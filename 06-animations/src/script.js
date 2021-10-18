import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
let time = Date.now()
const clock = new THREE.Clock()

// Using the GSAP library for animations
gsap.to(mesh.position, {duration:1, delay:1, x: 3 })
gsap.to(mesh.position, {duration:1, delay:2, x: 0 })

// This is our animation loop
const tick = () =>
{
    // How to rotate with DateTime class
    // const currentTime = Date.now()
    // const deltaTime = currentTime - time;
    // time = currentTime
    //
    // // Now we are rotating on  time
    // mesh.rotation.y += 0.001 * deltaTime

    // Using the built in three js time
    //  const elapsedTime = clock.getElapsedTime()
    // mesh.position.y = Math.cos(elapsedTime)
    // mesh.position.x = Math.sin(elapsedTime)




    // we have to render each scene
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick ()
