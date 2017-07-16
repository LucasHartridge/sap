using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BIZ;
using DAL;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Solution.ArcoMaq.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioAPIController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("crearUsuario")]
        public void Post([FromBody] Usuario usuario)
        {
            var DAL = new DataAccess();
            usuario.PasswordHash = "123";
            DAL.Create<Usuario>(usuario);

            var bitacora = new Bitacora();
            bitacora.TipoEvento = "Creacion nuevo usuario";
            bitacora.DescripcionEvento = "Se ha creado un nuevo usuario";
            bitacora.Fecha = DateTime.Now;
            bitacora.Usuario = usuario;
            DAL.Create<Bitacora>(bitacora);
        }

        [HttpPost]
        [Route("login")]
        //public IActionResult Login(string email, string password)
        public IActionResult Login([FromBody] Usuario usuario)
        {
            var DAL = new DataAccess();
            var bizUsuario = DAL.GetOneByEmail<Usuario>(usuario.Email);
            if (bizUsuario.Password == usuario.Password)
            {
                return Ok();
            }
            else
            {
                return Ok();
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
