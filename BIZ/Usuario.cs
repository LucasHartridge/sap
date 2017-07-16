using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BIZ
{
    public class Usuario
    {
        //public ObjectId Id { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id;
        [BsonElement("Email")]
        public string Email { get; set; }
        [BsonElement("Nombre")]
        public string Nombre { get; set; }
        [BsonElement("Apellido")]
        public string Apellido { get; set; }
        [BsonElement("DNI")]
        public string DNI { get; set; }
        [BsonElement("Password")]
        public string Password { get; set; }
        [BsonElement("PasswordHash")]
        public string PasswordHash { get; set; }

    }
}
