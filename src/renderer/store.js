// -- External Modules
import {observable} from "mobx"

class Store {
	@observable logs = []

	addLog(log) {
		this.logs.push(log)
		if (this.logs.length > 20) {
			this.logs.shift()
		}
	}
}

let store = new Store()

export default store
