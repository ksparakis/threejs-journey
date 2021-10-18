import './style.css'
import * as THREE from 'three'
import  { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Sizes
const sizes = {
    width: 800,
    height: 600
}
/**
 *  Cursor
 */

const cursor = {
    x:0,
    y:0
}
window.addEventListener('mousemove', (event) => {
    // lets us have a 0 in the middle of the screen
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = - (event.clientY / sizes.height -0.5);
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(.5, .5, .5, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

mesh.position.z =2

// Camera
const aspectRatio = sizes.width /sizes.height
const camera = new THREE.OrthographicCamera(
     -1 * aspectRatio,
    1 ,
    1,
    -1,
    0.1,
    200
    )
//camera.position.x = 2
//camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// Animate
const clock = new THREE.Clock()

//Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y = cursor.y * 5
    // camera.lookAt(mesh.position)

    // Using Controls instead
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
