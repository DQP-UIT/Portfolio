"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackGround: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Tạo scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";

    const createLight = (color: number) => {
      const light = new THREE.PointLight(color, 0, 100);
      scene.add(light);
      return light;
    };

    const lights: THREE.PointLight[] = [];
    const lightColor = 0xccff33;
    for (let i = 0; i < 10; i++) {
      const light = createLight(lightColor);
      lights.push(light);
    }

    const createStars = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;
        const z = Math.random() * 200 - 100;
        vertices.push(x, y, z);
      }
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.002,
      });
      return new THREE.Points(geometry, material);
    };

    const stars = createStars();
    scene.add(stars);

    const animate = () => {
      const time = Date.now() * 0.0005;

      lights.forEach((light, index) => {
        const offset = index * 0.4;
        light.intensity = 400;
        light.position.set(
          Math.sin(time * (0.7 + offset)) * 30,
          Math.cos(time * (0.5 + offset)) * 40,
          Math.sin(time * (0.3 + offset)) * 30
        );
      });

      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default ThreeBackGround;
