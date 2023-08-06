import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session

from vakt.storage.sql import SQLStorage
from vakt.storage.sql.migrations import SQLMigrationSet, Migration0To1x3x0
from vakt.storage.sql.model import Base, PolicyActionModel, PolicySubjectModel, PolicyResourceModel, PolicyModel

from . import create_test_sql_engine


@pytest.mark.sql_integration
class TestSQLMigrationSet:

    @pytest.yield_fixture
    def session(self):
        engine = create_test_sql_engine()
        session = scoped_session(sessionmaker(bind=engine))
        yield session
        Base.metadata.drop_all(engine)

    @pytest.yield_fixture
    def migration_set(self, session):
        storage = SQLStorage(scoped_session=session)
        yield SQLMigrationSet(storage)
        session.remove()

    def test_application_of_migration_number(self, migration_set):
        assert 0 == migration_set.last_applied()
        migration_set.save_applied_number(6)
        assert 6 == migration_set.last_applied()
        migration_set.save_applied_number(2)
        assert 2 == migration_set.last_applied()

    def test_up_and_down(self, migration_set):
        migration_set.save_applied_number(0)
        migration_set.up()
        assert 1 == migration_set.last_applied()
        migration_set.up()
        assert 1 == migration_set.last_applied()
        migration_set.down()
        assert 0 == migration_set.last_applied()
        migration_set.down()
        assert 0 == migration_set.last_applied()


@pytest.mark.sql_integration
class TestMigration0To1x3x0:

    @pytest.yield_fixture
    def engine(self):
        engine = create_engine('sqlite:///:memory:', echo=False)
        yield engine

    @pytest.yield_fixture
    def session(self, engine):
        session = scoped_session(sessionmaker(bind=engine))
        yield session
        Base.metadata.drop_all(engine)

    @pytest.yield_fixture
    def migration(self, session):
        storage = SQLStorage(scoped_session=session)
        yield Migration0To1x3x0(storage)
        session.remove()

    def test_order(self, migration):
        assert 1 == migration.order

    def test_has_access_to_storage(self, migration):
        assert hasattr(migration, 'storage') and migration.storage is not None

    def test_up(self, migration, engine):
        migration.up()
        assert Base.metadata.tables[PolicyModel.__tablename__].exists(engine)
        assert Base.metadata.tables[PolicySubjectModel.__tablename__].exists(engine)
        assert Base.metadata.tables[PolicyResourceModel.__tablename__].exists(engine)
        assert Base.metadata.tables[PolicyActionModel.__tablename__].exists(engine)

    def test_down(self, migration, engine):
        migration.down()
        assert not Base.metadata.tables[PolicyModel.__tablename__].exists(engine)
        assert not Base.metadata.tables[PolicySubjectModel.__tablename__].exists(engine)
        assert not Base.metadata.tables[PolicyResourceModel.__tablename__].exists(engine)
        assert not Base.metadata.tables[PolicyActionModel.__tablename__].exists(engine)
