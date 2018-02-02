// -- External Modules
import * as three from "three"

let viewportElement
let camera
let renderer
let geometry
let material

/**
 * Resize callback for screen.
 */
export function updateRendererSize() {
	if (!viewportElement) {
		return
	}

	let width = viewportElement.offsetWidth
	let height = viewportElement.offsetHeight
	renderer.setSize(width, height)
	camera.aspect = width / height
	camera.updateProjectionMatrix()
}

/**
 * Initializes the renderer.
 * @param {string} viewportElementId The id of the element in which the
 * viewport should render.
 */
export function init(viewportElementId) {
	viewportElement = document.getElementById(viewportElementId)
	let width = viewportElement.offsetWidth
	let height = viewportElement.offsetHeight

	let scene = new three.Scene()
	camera = new three.PerspectiveCamera(75,
		 width / height, 0.1, 1000)

	renderer = new three.WebGLRenderer()
	updateRendererSize()

	viewportElement.appendChild(renderer.domElement)

	geometry = new three.BoxGeometry(1, 1, 1)
	material = new three.MeshBasicMaterial({color: 0x33AA44})
	material = new three.MeshNormalMaterial()
	material = new three.PointsMaterial({size: 0.2, color: 0xFFFFAA})
	let cube = new three.Points(geometry, material)
	scene.add(cube)

	camera.position.z = 5

	/**
	*
	*/
	function animate() {
		requestAnimationFrame(animate)
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01
		renderer.render(scene, camera)
	}
	animate()
}
