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

    // add box
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // add directional light
    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  
    // camera object
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // define render
    const renderScene = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
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
    return <div ref={containerRef} className="absolute" />;
  };
  
  export default ThreeScene;
  
