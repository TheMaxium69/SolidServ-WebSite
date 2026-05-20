import { Component, inject, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TyroUiLangService } from 'tyrolium-ui';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  color: string;
  alpha: number;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  readonly lang = inject(TyroUiLangService).lang;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private rafId!: number;
  private mouse = { x: -9999, y: -9999 };

  /* ── Config particules ── */
  private readonly COUNT   = 110;
  private readonly LINK    = 140;
  private readonly REPEL   = 110;
  private readonly COLORS  = ['#4d6fff', '#7090ff', '#2233cc', '#cc2233', '#ffffff', '#99aaff'];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resize(canvas);
    this.spawn(canvas);
    this.tick(canvas);

    canvas.addEventListener('mousemove', (e) => {
      const r = canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - r.left;
      this.mouse.y = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { this.mouse.x = -9999; this.mouse.y = -9999; });
    canvas.addEventListener('touchmove', (e) => {
      const r = canvas.getBoundingClientRect();
      this.mouse.x = e.touches[0].clientX - r.left;
      this.mouse.y = e.touches[0].clientY - r.top;
    }, { passive: true });

    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
  }

  private onResize = () => {
    const c = this.canvasRef.nativeElement;
    this.resize(c);
    this.spawn(c);
  };

  private resize(c: HTMLCanvasElement) {
    c.width  = c.offsetWidth;
    c.height = c.offsetHeight;
  }

  private spawn(c: HTMLCanvasElement) {
    this.particles = Array.from({ length: this.COUNT }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size:  Math.random() * 2 + 1,
      color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
      alpha: Math.random() * 0.45 + 0.25,
    }));
  }

  private tick(c: HTMLCanvasElement) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, c.width, c.height);

    for (const p of this.particles) {
      const dx = p.x - this.mouse.x;
      const dy = p.y - this.mouse.y;
      const d2 = dx * dx + dy * dy;
      if (d2 < this.REPEL * this.REPEL) {
        const d = Math.sqrt(d2);
        const f = ((this.REPEL - d) / this.REPEL) * 0.55;
        p.vx += (dx / d) * f;
        p.vy += (dy / d) * f;
      }

      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > 2.5) { p.vx = p.vx / spd * 2.5; p.vy = p.vy / spd * 2.5; }

      p.vx *= 0.988; p.vy *= 0.988;
      p.x += p.vx;   p.y += p.vy;

      if (p.x < 0)        { p.x = 0;        p.vx *= -1; }
      if (p.x > c.width)  { p.x = c.width;  p.vx *= -1; }
      if (p.y < 0)        { p.y = 0;        p.vy *= -1; }
      if (p.y > c.height) { p.y = c.height; p.vy *= -1; }

      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i], b = this.particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < this.LINK) {
          ctx.globalAlpha = (1 - d / this.LINK) * 0.28;
          ctx.beginPath();
          ctx.strokeStyle = '#6680ff';
          ctx.lineWidth = 0.7;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    this.rafId = requestAnimationFrame(() => this.tick(c));
  }
}
