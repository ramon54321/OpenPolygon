// -- External Modules
import {observable} from "mobx"

/**
 * The main data store for global interface data.
 */
class Store {
	@observable logs = []

	addLog(log) {
		this.logs.push(log)
		if (this.logs.length > 50) {
			this.logs.shift()
		}
	}
}

let store = new Store()

export default store
