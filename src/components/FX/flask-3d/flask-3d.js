/* eslint-disable @typescript-eslint/no-unused-vars */
import './flask-3d.scss';
import checker from '.flask-prop/checker.jpg';
import * as THREE from 'three';
import { OrbitControls } from 'three/example/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/exmaples/jsm/loaders/GLTFLoader';
import flaskGLB from './flask-prop/flask.glb';

function main() {
  const canvas = document.querySelector('.canvas');
  const renderer = new THREE.WebGL1Renderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });

  const fov = 45;
  const aspect = 2;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 12);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0.2, 0);
  controls.update();
  controls.enableZoom = false;
  controls.enablePan = false;

  const scene = new THREE.Scene();

  {
    const planeSize = 2;

    const loader = new THREE.TextureLoader();
    const texture = loader.load(checker);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -0.5;
    scene.add(mesh);
  }

  {
    const skyColor = 0xabecff;
    const groundColor = 0x2c74f9;
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 8, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }

  let loadedModel;
  const loader = new GLTFLoader();
  loader.load(
    flaskGLB,
    function (gltf) {
      loadedModel = gltf;
      scene.add(gltf.scene);
      loadedModel.scene.rotation.y = Math.PI / 5;
      loadedModel.scene.position.y = -2;
      loadedModel.scene.scale.set(7, 7, 7);
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '%loaded');
    },
    function (error) {
      console.log('Error happened');
    },
  );

  const anim = () => {
    if (loadedModel) {
      loadedModel.scene.rotation.y += 0.014;
    }
    requestAnimationFrame(anim);
  };
  anim();

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
