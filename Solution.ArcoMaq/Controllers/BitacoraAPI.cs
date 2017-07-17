using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BIZ;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Solution.ArcoMaq.Controllers
{
    [Route("api/[controller]")]
    public class BitacoraAPI : Controller
    {
        // GET: api/values
        [HttpGet]
        [Route("obtenerBitacoras")]
        public IActionResult Get()
        {
            var DAL = new DataAccess();
            var bitacoras = DAL.GetAll<Bitacora>();
            return Ok(bitacoras);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
