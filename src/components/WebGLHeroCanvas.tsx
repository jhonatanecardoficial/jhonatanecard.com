'use client';

import React, { useEffect, useRef } from 'react';
import { ShaderTheme } from '@/data/portfolio';

interface WebGLHeroCanvasProps {
  theme: ShaderTheme;
}

export default function WebGLHeroCanvas({ theme }: WebGLHeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const themeRef = useRef<ShaderTheme>(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'high-performance' }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_res;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      uniform vec3 u_accent;
      uniform vec3 u_secondary;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.03 + vec2(1.7, 9.2);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res.xy;
        vec2 p = (gl_FragCoord.xy - 0.5 * u_res.xy) / min(u_res.x, u_res.y);

        vec2 m = (u_mouse - 0.5) * vec2(u_res.x / min(u_res.x, u_res.y), u_res.y / min(u_res.x, u_res.y));
        float d = length(p - m);

        float t = u_time * 0.16;

        // Domain warping
        vec2 q = vec2(
          fbm(p * 1.6 + vec2(0.0, t * 0.7)),
          fbm(p * 1.6 + vec2(5.2, 1.3 - t * 0.5))
        );

        vec2 r = vec2(
          fbm(p * 2.1 + 2.8 * q + vec2(1.7, 9.2) + 0.15 * t + (m * 0.35)),
          fbm(p * 2.1 + 2.8 * q + vec2(8.3, 2.8) + 0.12 * t - (m * 0.25))
        );

        float f = fbm(p * 1.8 + 2.2 * r - vec2(0.0, u_scroll * 0.35));

        // Base obsidian palette
        vec3 col = vec3(0.027, 0.028, 0.036);
        col = mix(col, vec3(0.06, 0.068, 0.088), clamp(f * f * 2.2, 0.0, 1.0));
        col = mix(col, u_secondary * 0.55, clamp(length(q) * 0.65, 0.0, 1.0));

        // Neural ridge highlights
        float ridge = smoothstep(0.56, 0.88, f);
        col = mix(col, u_accent * 0.32, ridge * 0.65);

        // Cursor reactive aura
        float spot = exp(-d * 3.4);
        float ring = smoothstep(0.32, 0.0, abs(d - 0.18 - 0.04 * sin(u_time))) * 0.15;
        col += u_accent * (spot * 0.24 + ring * 0.35);

        // Subtle topographic isolines
        float iso = abs(fract(f * 8.0) - 0.5);
        float line = smoothstep(0.03, 0.0, iso) * (0.04 + spot * 0.12);
        col += u_accent * line;

        // Vignette
        float vig = smoothstep(1.38, 0.22, length(uv - 0.5));
        col *= vig;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uScroll = gl.getUniformLocation(prog, 'u_scroll');
    const uAccent = gl.getUniformLocation(prog, 'u_accent');
    const uSecondary = gl.getUniformLocation(prog, 'u_secondary');

    let dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let mx = 0.5;
    let my = 0.5;
    let tmx = 0.5;
    let tmy = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth;
      tmy = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Smoothly interpolate theme colors in the render loop
    let curAccent = [...themeRef.current.rgb];
    let curSecondary = [...themeRef.current.secondaryRgb];

    const start = performance.now();
    let rafId = 0;

    const loop = (now: number) => {
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      const targetAccent = themeRef.current.rgb;
      const targetSecondary = themeRef.current.secondaryRgb;

      for (let i = 0; i < 3; i++) {
        curAccent[i] += (targetAccent[i] - curAccent[i]) * 0.06;
        curSecondary[i] += (targetSecondary[i] - curSecondary[i]) * 0.06;
      }

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uScroll, window.scrollY / Math.max(window.innerHeight, 1));
      gl.uniform3f(uAccent, curAccent[0], curAccent[1], curAccent[2]);
      gl.uniform3f(uSecondary, curSecondary[0], curSecondary[1], curSecondary[2]);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      aria-hidden="true"
      className="hero-canvas"
    />
  );
}
