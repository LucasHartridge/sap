using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL
{      
    public class DataAccess
    {
        private IMongoDatabase Database
        {
            get
            {
                MongoClient client = new MongoClient("mongodb://localhost:27017");
                IMongoDatabase database = client.GetDatabase("ArcoMaq");
                return database;
            }
        }

        public void Create<T>(T Entidad)
        {
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            _collection.InsertOne(Entidad);
        }

        public IEnumerable<T> GetAll<T>()
        {
           return  Database.GetCollection<T>(typeof(T).Name).AsQueryable<T>();
        }

        public T GetOne<T>(ObjectId id)
        {
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            var filter = Builders<T>.Filter.Eq("_id", id);
            var result = _collection.Find(filter).Single();
            return result;
        }

        public T GetOneByEmail<T>(string Email)
        {
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            var filter = Builders<T>.Filter.Eq("Email", Email);
            var result = _collection.Find(filter).SingleOrDefault();
            return result;
        }

        public T GetOneByDNI<T>(string DNI)
        {
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            var filter = Builders<T>.Filter.Eq("DNI", DNI);
            var result = _collection.Find(filter).SingleOrDefault();
            return result;
        }

        public void Update<T>(ObjectId id, T entidad)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            _collection.ReplaceOne(filter, entidad);
        }

        public void Remove<T>(ObjectId id)
        {
            var filter = Builders<T>.Filter.Eq("_id", id);
            var _collection = Database.GetCollection<T>(typeof(T).Name);
            _collection.DeleteOne(filter);
        }
    }
}

