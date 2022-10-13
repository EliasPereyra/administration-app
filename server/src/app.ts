import createServer from './utils/server'

const port = 3010

const app = createServer()

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
