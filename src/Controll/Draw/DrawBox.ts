import { boxType } from "../../constants";

export default function DrawBox(
  ctx: CanvasRenderingContext2D,
  boxSize: number,
  x: number,
  y: number,
  canvasSize: number,
  type: boxType
) {
  const p = 10; //padding

  ctx.fillStyle = type;
  ctx.fillRect(
    p + x * boxSize,
    canvasSize - p - (y + 1) * boxSize,
    boxSize,
    boxSize
  );
}
