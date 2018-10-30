import config from './server/infrastructure/config'
import server from './server'

const { port } = config

server.listen(port, () => console.log(`Started at :${ port }`))
