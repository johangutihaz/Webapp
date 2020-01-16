const {Client}=require('pg')
const client =new Client({
  user:"postgres",
  password:"pwd",
  host: "localhost",
  port: 5432,
  database:"carshop"
})

client.connect()


//var car= "select * from carmodels where id = 4"
.then(()=> client.query("DELETE FROM carmodels WHERE id = 4"))

.then(()=> client.query("select * from carmodels "))

.then(results=> console.table(results.rows))

.catch(e => console.log("Failed connection"))
.finally(() => client.end())