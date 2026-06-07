import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Panorama() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    const loader = new THREE.CubeTextureLoader();

    const skybox = loader.load([
      "/panorama/panorama_1.png", // +X east
      "/panorama/panorama_3.png", // -X west
      "/panorama/panorama_4.png", // +Y up
      "/panorama/panorama_5.png", // -Y down
      "/panorama/panorama_0.png", // +Z south
      "/panorama/panorama_2.png", // -Z north
    ]);

    scene.background = skybox;

    const clock = new THREE.Clock();
    let last = 0;
    const fps = 60;
    const interval = 1000/fps;

    const animate = () => {
        requestAnimationFrame(animate);
        
        if (time - last < interval) return;
        last = time;
        const elapsed = 
        
        /* Speed adjustment */
        camera.lookAt(
            Math.sin(elapsed * 0.5) * 10,
            -1,
            Math.cos(elapsed * 0.5) * 10
        );

        renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="panorama-three" ref={mountRef} />;
}