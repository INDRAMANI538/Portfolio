import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const arrowRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Arrow snaps instantly to cursor position
      if (arrowRef.current) {
        arrowRef.current.style.left = `${e.clientX}px`;
        arrowRef.current.style.top = `${e.clientY}px`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isPointer = el ? window.getComputedStyle(el).cursor === 'pointer' : false;
      setIsHovering(isPointer);
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Glow lags with lerp
    const animateGlow = () => {
      const lerp = 0.1;
      glowPos.current.x += (pos.current.x - glowPos.current.x) * lerp;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * lerp;

      if (glowRef.current) {
        glowRef.current.style.left = `${glowPos.current.x}px`;
        glowRef.current.style.top  = `${glowPos.current.y}px`;
      }
      rafId.current = requestAnimationFrame(animateGlow);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafId.current = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const arrowColor1 = isHovering ? '#a78bfa' : '#06b6d4';
  const arrowColor2 = isHovering ? '#7c3aed' : '#0891b2';
  const glowColor   = isHovering ? 'rgba(124,58,237,0.35)' : 'rgba(6,182,212,0.3)';

  return (
    <>
      {/* Lagging glow halo (behind the arrow) */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: isVisible ? 1 : 0,
          filter: 'blur(4px)',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, background 0.3s',
        }}
      />

      {/* Arrow cursor (snappy) */}
      <div
        ref={arrowRef}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isClicking ? 0.85 : 1})`,
          transformOrigin: '0 0',
          transition: 'opacity 0.2s, transform 0.15s',
        }}
      >
        <svg
          width={isHovering ? '26' : '22'}
          height={isHovering ? '30' : '26'}
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transition: 'width 0.2s, height 0.2s' }}
        >
          <defs>
            <linearGradient id="cursorGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={arrowColor1} />
              <stop offset="100%" stopColor={arrowColor2} />
            </linearGradient>
            <filter id="cursorGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation={isHovering ? '2.5' : '1.5'} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Arrow pointer path */}
          <path
            d="M2 2 L2 20 L6.5 15.5 L10.5 23 L13.5 21.5 L9.5 14 L16 14 Z"
            fill="url(#cursorGrad)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="0.8"
            strokeLinejoin="round"
            filter="url(#cursorGlow)"
          />
        </svg>
      </div>
    </>
  );
};

export default Cursor;