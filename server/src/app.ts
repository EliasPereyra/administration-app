import config from 'config'

import createServer from './utils/server'

const port = config.get<Number>('port')

const app = createServer()

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
