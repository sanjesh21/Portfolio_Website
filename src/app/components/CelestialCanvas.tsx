"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CelestialCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 1. Interactive Star Field Particles
    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 40;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const isDark = document.documentElement.classList.contains("dark");
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: isDark ? 0x38bdf8 : 0x1d4ed8,
      transparent: true,
      opacity: 0.7,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particlesMesh);

    // 2. Wireframe Celestial Orb
    const orbGeometry = new THREE.IcosahedronGeometry(5, 2);
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x0284c7 : 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const celestialOrb = new THREE.Mesh(orbGeometry, orbMaterial);
    celestialOrb.position.set(10, 2, -5);
    scene.add(celestialOrb);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate Orb
      celestialOrb.rotation.x += 0.002;
      celestialOrb.rotation.y += 0.003;

      // Parallax Stars
      particlesMesh.rotation.y = mouseX * 0.5;
      particlesMesh.rotation.x = -mouseY * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particleMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-canvas-container" />;
}