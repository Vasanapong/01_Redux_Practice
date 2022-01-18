import { createStore } from 'redux'
import reducer from './reducer'

const createStoreConfig = createStore(reducer)

export default createStoreConfig