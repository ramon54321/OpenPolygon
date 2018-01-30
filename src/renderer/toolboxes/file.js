// -- Application Modules
import store from "../store"

let toolbox = {
	title: "File",
	elements: [
	{
		text: "Save",
		action: () => {
			store.addLog("[INFO] Save pressed")
		},
	},
	{
		text: "Open",
		action: () => {
			store.addLog("[INFO] Open pressed")
		},
	},
	{
		text: "Preferences",
		action: () => {
			store.addLog("[INFO] Preferences pressed")
		},
	},
]}

export default toolbox
