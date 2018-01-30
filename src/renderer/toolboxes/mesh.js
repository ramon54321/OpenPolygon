// -- Application Modules
import store from "../store"

let toolbox = {
	title: "Mesh",
	elements: [
	{
		text: "Insert Vertex",
		action: () => {
			store.addLog("[INFO] Tool: Insert Vertex")
		},
	},
	{
		text: "Slice",
		action: () => {
			store.addLog("[INFO] Tool: Slice")
		},
	},
]}

export default toolbox
