import { JSONFileSyncPreset } from 'lowdb/node'
import { DBData } from '../types/database.types.js'


const defaultData: DBData = { posts: [], messages: [] }
const database = JSONFileSyncPreset<DBData>('./database.json', defaultData)

export default database
