# cron_processor
This python module takes care of the common functionality in cron i.e., managing the bookmark and processing the entities as per the requirement. The cron expects a few handlers to fetch and process the entities.
Additional handlers can be provided in the input to add functionality throughout the life-cycle of the cron.

```python
@dataclass
class KeyedBookmarker:
    bookmarker: Bookmarker
    key: str
   
# defining bookmarker
app = Flask(__name__) # sample flask app
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://"
db = SQLAlchemy(app)
sql_bookmarker = SQLAlchemyBookmarker(db)
```
KeyedBookmarker is a wrapper around Bookmarker library, details around it can be found at - https://github.com/Shuttl-Tech/bookmarker

```python
def entity_fetcher(context: Cursor) -> List:  
    pass
    
def entity_processor(enitities: List) -> None:
    pass

# defining cron
keyed_bookmaker = KeyedBookmarker(key="dummy_key", bookmarker=sql_bookmarker)
cron = Cron(keyed_bookmarker=keyed_bookmaker, 
            entity_fetcher=entity_fetcher, 
            entity_processor=entity_processor)
cron.process()
# or
cron.process_all()


```
details on cursor can be found in pyshuttlis -> https://github.com/Shuttl-Tech/pyshuttlis/blob/7d4a1f2a3ac7ea08daf4578357ae11171543aafd/shuttlis/pagination.py#L40.

`entity_fetcher`, `entity_processor` will be defined in the service setting up the cron. **`entity_fetcher` should handle a DB call, all the filtration on the entities fetched should be handled in `entity_processor`. This will ensure that the bookmark is updated to the last fetched entity even though no entity was processed.** example:
``` python
def entity_fetcher(context: Cursor) -> List:  
    return self._repo.get_paginated()
    
def entity_processor(enitities: List) -> None:
    def condition(entity) -> bool:
        pass
    events_to_be_processed = [e for e in enitities if condition(e)]
    self._processor.process_events(events_to_be_processed)

cron.process()
# in this case the bookmark will update to the last entry in entity_fetcher
```

`cron.process()` handles only defined no. of entities, specified in the `Cursor.limit`, while `process_all` will handle all the entities till all of them are processed till the date.

Similarly, additional handlers can be provided that would be called at the various lifecycles of the cron. These can be used to setup the instrumentation. Each state can have multiple handlers and each handler will have a context obj passed in the args.
``` python
class CronState(Enum):
    INIT = "INIT"
    START = "START"
    ITERATION_END = "ITERATION_END"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

cron.process:
INIT ---> START ----> SUCCESS
            |_______> FAILURE
            
cron.process_all:
INIT ---> START ----> ITERATION_END  ----> SUCCESS
            |            |   ^
            |            |___|
            |            |
            |            v
            |_______> FAILURE
    
# CronState.INIT -> on_init_handlers or []
# CronState.START -> on_start_handlers or []
# CronState.FAILED -> on_failure_handlers or []
# CronState.SUCCESS -> on_success_completion_handlers or []
# CronState.ITERATION_END -> on_single_iteration_completion or [] 
```


```python
@dataclass(frozen=True)
class Context:
    iteration: List[List[Any]] = field(default_factory=list)
    errors: List[Exception] = field(default_factory=list)

    def add_iteration(self, iteration: List) -> None:
        self.iteration.append(iteration)

    def add_error(self, error: Exception) -> None:
        self.errors.append(error)
```

Following is an example where an exception is raised after one iteration, though before raising the exception, it will call the failure_handler.
``` python
def test_cron_process_all_failure():
    class FakeEntity:
          pass
    f1 = FakeEntity()

    def fake_entity_fetcher(cursor: Cursor) -> List[FakeEntity]:
        try:
            return [next(iter([f1]))]
        except StopIteration:
            raise Exception
     
     def fake_entity_processor(entities: List[FakeEntity]) -> None:
         pass
    
    
    def fake_failure_handler(context):
        assert context.errors
    
    def fake_iter_handler(context):
        assert context.iteration == [[f1]]
        
    cron = get_cron(
        keyed_bookmark=KeyedBookmarker(key="dummy_key", bookmarker=sql_bookmarker),
        entity_fetcher=fake_entity_fetcher,
        entity_processor=fake_entity_processor,
        on_failure_handlers=[fake_failure_handler],
        on_single_iteration_completion=[fake_iter_handler],
    )
    
    cron.process_all() # this will raise exception, but before will call fake_failure_handler

```

### Releasing

- `make bump_version`
- Update [the Changelog]
- Commit changes to `Changelog`, `setup.py` and `setup.cfg`.
- `make push_tag` (this'll push a tag that will trigger python package checks)
- `make release` (this will release the tag)

- You can do `make push_tag_and_release` to combine the above two steps
