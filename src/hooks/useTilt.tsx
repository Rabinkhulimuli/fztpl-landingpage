import { useRef } from "react";

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ref.current!.style.transform = `
      rotateX(${y * -10}deg)
      rotateY(${x * 10}deg)
      scale(1.02)
    `;
  };

  const reset = () => {
    ref.current!.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return { ref, handleMove, reset };
}