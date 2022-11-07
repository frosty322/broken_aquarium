import React, { useEffect, useRef } from "react";
import useCanvas from "../../Controll/useCanvas";

interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D) => void;
}

function Canvas(props: CanvasProps) {
  const { draw } = props;
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} />;
}

export default Canvas;
