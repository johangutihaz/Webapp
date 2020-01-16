const {Client}=require('pg')
const client =new Client({
  user:"postgres",
  password:"pwd",
  host: "localhost",
  port: 5432,
  database:"carshop"
})

client.connect()

.then(()=> client.query("select * from employees"))
.then(results=> console.table(results.rows))

.catch(e => console.log("Failed connection"))
.finally(() => client.end())