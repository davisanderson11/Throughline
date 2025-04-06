// Background.js
import React, { useEffect } from 'react';

function Background() {
  useEffect(() => {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Grid and dot parameters
    const spacing = 40;         // Distance between dot centers
    const baseRadius = 2;       // Dot radius when the mouse is far away
    const maxRadius = 10;       // Maximum radius when the mouse is very close
    const maxAdd = maxRadius - baseRadius; // Maximum additional radius
    const k = 10000;            // Constant for inverse square effect
    const easeFactor = 5;       // Controls the exponential easing
    const maxShake = 0.5;       // Maximum shake offset in pixels
    const shakeFrequency = 40;  // Frequency of the shake oscillation

    let dots = [];

    // Create grid of dots.
    function createDots() {
      dots = [];
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dots.push({ x, y });
        }
      }
    }

    // Resize canvas to fill the window.
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createDots();
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse position (initially offscreen).
    let mouse = { x: -1000, y: -1000 };
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Animation loop: clear the canvas and redraw dots.
    function animate() {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentTime = Date.now() / 1000; // For shake animation

      dots.forEach(dot => {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distSq = dx * dx + dy * dy;
        const raw = k / (distSq + 1);
        const easedEffect = maxAdd * (1 - Math.exp(-raw / easeFactor));
        const radius = baseRadius + Math.min(easedEffect, maxAdd);
        const t = (radius - baseRadius) / (maxRadius - baseRadius);
        const gray = Math.floor(128 + t * (255 - 128));
        const color = `rgb(${gray}, ${gray}, ${gray})`;
        const shakeAmplitude = maxShake * t;
        const offsetX = Math.sin(currentTime * shakeFrequency + dot.x) * shakeAmplitude;
        const offsetY = Math.cos(currentTime * shakeFrequency + dot.y) * shakeAmplitude;

        ctx.beginPath();
        ctx.arc(dot.x + offsetX, dot.y + offsetY, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup event listener on unmount.
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="background-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    ></canvas>
  );
}

export default Background;
