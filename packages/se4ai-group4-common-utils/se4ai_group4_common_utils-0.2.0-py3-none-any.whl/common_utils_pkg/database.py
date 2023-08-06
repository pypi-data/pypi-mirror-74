import os
from sqlalchemy import create_engine, Column, Text, SmallInteger, Integer, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

class Database:
    def __init__(self, user, password, host, port, database, **kwargs):
        self.engine = create_engine('postgresql://{}:{}@{}:{}/{}'.format(
                user, password, host, port, database
            ), **kwargs)
        self.Base = declarative_base(self.engine)
    
    def load_session(self):
        # TODO: should we checkout scoped sessions
        Session = sessionmaker(bind=self.engine)
        return Session()
class RDSDatabase(Database):
    def __init__(self, user, password, host, port, database, **kwargs):
        super().__init__(user, password, host, port, database, **kwargs)
        self.Movie = self._create_movie_class(self.Base)
        self.User = self._create_user_class(self.Base)
        self.Rating = self._create_rating_class(self.Base)
 
    def _create_movie_class(self, base):
        class Movie(base):
            __tablename__ = 'movies'
            __table_args__ = ({'autoload': True})
        return Movie
    
    def _create_user_class(self, base):
        class User(base):
            __tablename__ = 'users'
            __table_args__ = {'autoload':True}
        return User

    def _create_rating_class(self, base):
        class Rating(base):
            __tablename__ = 'ratings'

            movie_id = Column(Text, primary_key =True)
            user_id = Column(Text, primary_key =True)
            rating = Column(SmallInteger)
        return Rating

class TSDatabase(Database):
    def __init__(self, user, password, host, port, database, **kwargs):
        super().__init__(user, password, host, port, database, **kwargs)
        self.Recommendation = self._create_recommendation_class(self.Base)
        self.View = self._create_view_class(self.Base)
        self.Rating = self._create_rating_class(self.Base)

    def _create_recommendation_class(self, base):
        class Recommendation(base):
            __tablename__ = 'recommendations'
            __table_args__ = ({'autoload': True})
        return Recommendation
    
    def _create_view_class(self, base):
        class View(base):
            __tablename__ = 'views'
            time = Column(TIMESTAMP, primary_key=True)
            movie_id = Column(Text)
            user_id = Column(Text, primary_key=True)
            minute = Column(Integer)
        return View
    
    def _create_rating_class(self, base):
        class Rating(base):
            __tablename__ = 'ratings'

            time = Column(TIMESTAMP, primary_key=True)
            movie_id = Column(Text)
            user_id = Column(Text, primary_key=True)
            rating = Column(SmallInteger)
        return Rating