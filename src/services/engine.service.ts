import {
  Injectable,
  NgZone,
  ElementRef,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import * as THREE from "three";

@Injectable({
  providedIn: "root",
})
export class EngineService implements OnDestroy {
  private canvas: HTMLCanvasElement | null = null;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private frameId: number | null = null;
  private particles!: THREE.Points;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.canvas = canvas.nativeElement;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.camera.position.z = 5;

    // Particles (Neural Network Effect)
    this.createParticles();

    // Resize Event
    window.addEventListener("resize", () => this.resize());

    // Start Loop
    this.animate();
  }

  private createParticles(): void {
    const geometry = new THREE.BufferGeometry();
    const count = 2000;
    const posArray = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15; // Spread
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ff41, // Electric Neon
      transparent: true,
      opacity: 0.8,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== "loading") {
        this.render();
      } else {
        window.addEventListener("DOMContentLoaded", () => this.render());
      }
    });
  }

  private render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    // Animation Logic
    if (this.particles) {
      this.particles.rotation.y += 0.001;
      this.particles.rotation.x += 0.0005;
    }

    this.renderer.render(this.scene, this.camera);
  }

  private resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
    if (this.renderer != null) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
      // this.renderer.context = null;
    }
  }
}
