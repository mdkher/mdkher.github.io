import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  inject,
  effect,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-background",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.css"],
})
export class BackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild("canvas") canvasRef!: ElementRef<HTMLCanvasElement>;
  private themeService = inject(ThemeService);
  private animationId: number | null = null;

  // Orbs configuration
  private orbs: any[] = [];
  private numOrbs = 8; // Increased orb count for density

  constructor() {
    effect(() => {
      // Re-initialize colors when theme changes
      this.themeService.isDark(); // Track dependency
      this.initOrbs();
    });
  }

  ngAfterViewInit() {
    this.initCanvas();
    this.initOrbs();
    this.animate();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener("resize", this.onResize.bind(this));
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    // Lower resolution for performance + better blur effect
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
  }

  private onResize() {
    this.initCanvas();
    this.initOrbs();
  }

  private initOrbs() {
    const isDark = this.themeService.isDark();
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;

    this.orbs = [];

    // More vibrant, "creative" palettes
    const darkColors = [
      "#4338ca", // Indigo 700
      "#3b82f6", // Blue 500
      "#7c3aed", // Violet 600
      "#db2777", // Pink 600
      "#0f172a", // Slate 900 (Depth)
    ];

    // Subtle but defined pastels for light mode (Contrast safe against white)
    const lightColors = [
      "#a5b4fc", // Indigo 300
      "#c4b5fd", // Violet 300
      "#67e8f9", // Cyan 300
      "#f9a8d4", // Pink 300
      "#93c5fd", // Blue 300
    ];

    const colors = isDark ? darkColors : lightColors;

    for (let i = 0; i < this.numOrbs; i++) {
      this.orbs.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * (width * 0.3) + width * 0.1, // Varied sizes
        // Faster movement for "creative" feel
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: colors[i % colors.length],
        growth: Math.random() * 0.02, // Pulse effect
        maxRadius: Math.random() * (width * 0.4) + width * 0.2,
      });
    }
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Base Background
    ctx.fillStyle = this.themeService.isDark() ? "#080808" : "#F8FAFC";
    ctx.fillRect(0, 0, width, height);

    // Update and Draw Orbs
    this.orbs.forEach((orb) => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      // Pulse radius
      orb.radius += Math.sin(Date.now() * 0.001) * 0.2;

      // Bounce off walls
      if (orb.x < -orb.radius * 0.5) orb.vx = Math.abs(orb.vx);
      if (orb.x > width + orb.radius * 0.5) orb.vx = -Math.abs(orb.vx);
      if (orb.y < -orb.radius * 0.5) orb.vy = Math.abs(orb.vy);
      if (orb.y > height + orb.radius * 0.5) orb.vy = -Math.abs(orb.vy);

      // Draw Gradient Orb
      const gradient = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.radius,
      );

      // More realistic alpha blending
      const alpha = this.themeService.isDark() ? 0.4 : 0.25;

      gradient.addColorStop(0, this.hexToRgba(orb.color, alpha));
      gradient.addColorStop(0.5, this.hexToRgba(orb.color, alpha * 0.5));
      gradient.addColorStop(1, this.hexToRgba(orb.color, 0));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    this.animationId = requestAnimationFrame(this.animate.bind(this));
  }

  private hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
