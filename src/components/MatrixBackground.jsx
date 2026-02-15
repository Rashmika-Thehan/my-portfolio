import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Make canvas background transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Binary characters only
    const chars = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Array to store y position of each column
    const drops = Array(Math.floor(columns)).fill(1);

    // Drawing function
    const draw = () => {
      // Semi-transparent overlay for trail effect (NOT fully clearing)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text style with reduced opacity
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.font = fontSize + 'px monospace';

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        // Random binary character (0 or 1)
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it crosses the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment y position
        drops[i]++;
      }
    };

    // Animation interval
    const interval = setInterval(draw, 33);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
};

export default MatrixBackground;