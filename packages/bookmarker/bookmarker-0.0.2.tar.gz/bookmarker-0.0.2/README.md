# Bookmarker
This Python module configures the bookmark backend. The library supports storing `string` type `bookmark_key` and `bookmark_value`. Currently, it supports only sqlalchemy based db, support for Amazon S3 is in progress.

### Steps to setup a SQLAlchemy based bookmark:
1. Add the following query in the service's migration file to create `_bookmark` table.
```
CREATE TABLE IF NOT EXISTS _bookmark
(
  bookmark_key character varying(255) NOT NULL,
  bookmark_value character varying(255),
  created_at   timestamp with time zone DEFAULT now() NOT NULL,
  updated_at   timestamp with time zone DEFAULT now() NOT NULL,

  PRIMARY KEY (bookmark_key)
);
```

2. Create an instance of the SQLAlchemyBookmarker
```python
app = Flask(__name__) # sample flask app
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite://"
db = SQLAlchemy(app)


sql_bookmarker = SQLAlchemyBookmarker(db)

# storing values:
sql_bookmarker["dummy_key"] = "dummy_value"

# fetching values:
sql_bookmarker.get("dummy_key")
```


### Releasing

- `make bump_version`
- Update [the Changelog]
- Commit changes to `Changelog`, `setup.py` and `setup.cfg`.
- `make push_tag` (this'll push a tag that will trigger python package checks)
- `make release` (this will release the tag)

- You can do `make push_tag_and_release` to combine the above two steps
