import app from "./src/app/app"

const port = 3000

// database connection 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})