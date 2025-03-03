import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {


  trivias = []
}

export const AppState = createObservableProxy(new ObservableAppState())