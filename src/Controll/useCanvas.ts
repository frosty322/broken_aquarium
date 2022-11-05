import { useRef, useEffect } from "react";

const useCanvas = (draw: (ctx: CanvasRenderingContext2D) => void) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      throw new Error("TypeScript Error");
    }
    const context = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 1000;

    if (!context) {
      throw new Error("TypeScript Error");
    }
    draw(context);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
