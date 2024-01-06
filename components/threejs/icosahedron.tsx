"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const effects = (containerRef: React.RefObject<HTMLDivElement>) => {
    // build WebGL renderer object
    const renderer = new THREE.WebGLRenderer();
    containerRef.current?.appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    // configure scenegraph
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(170, 170, 170)
    
    const geometry = new THREE.IcosahedronGeometry(1, 24);
    const material = new THREE.ShaderMaterial({
        blendColor: 0,
        forceSinglePass: true,
        wireframe: true,
        fog: false,
        uniforms: { 
            time: {
                value: 0
            }
        },
        vertexShader: "uniform float time;\nvarying vec3 vPosition;\nvoid main() {\n\tvPosition = position;\n\tvPosition.x += sin( time + vPosition.z * 4.0 ) / 4.0;\n\tvPosition.y += cos( time + vPosition.z * 4.0 ) / 4.0;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0 );\n}",
        fragmentShader: "varying vec3 vPosition;\nvoid main() {\n\tgl_FragColor = vec4( vPosition * 2.0, 1.0 );\n}",
        lights: false,
        clipping: false
    });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);
  
    // camera object
    const camera = new THREE.PerspectiveCamera(
      50.0, 1.0, 0.1, 10000.00
    );
    camera.position.x = 1;
    // camera.position.y = 3.590;
    // camera.position.z = 3.806;
    // camera.rotation.x = -43.32;
    // camera.rotation.y = 40.94;
    // camera.rotation.z = 31.71;
    
    // define render
    const renderScene = () => {
        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y += 0.01;
        icosahedron.rotation.z += 0.01;
        renderer.render(scene, camera);
    };

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
  
    // Call the renderScene function to start the animation loop
    const animate = () => {
      renderScene();
      requestAnimationFrame(animate);
    };

    animate();
    // Clean up the event listener when the component is unmounted
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  };
  
  const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(
      () => (typeof window !== "undefined" ? effects(containerRef) : void 0),
      []
    );  
    return <div ref={containerRef} />;
  };
  
  export default ThreeScene;
  
