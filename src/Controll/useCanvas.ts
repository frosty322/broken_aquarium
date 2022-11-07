import { useRef, useEffect } from "react";

const useCanvas = (draw: (ctx: CanvasRenderingContext2D) => void) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const box = document.querySelector(".main-box");
    if (!canvas) {
      throw new Error("TypeScript Error");
    }
    if (box) {
      canvas.width = box.clientWidth;
      canvas.height = box.clientHeight;
    }
    const context = canvas.getContext("2d");
    if (!canvas) {
      throw new Error("TypeScript Error");
    }

    if (!context) {
      throw new Error("TypeScript Error");
    }
    draw(context);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
