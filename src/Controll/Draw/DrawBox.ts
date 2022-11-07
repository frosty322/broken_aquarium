import { boxType } from "../../utils/constants";

export default function DrawBox(
  ctx: CanvasRenderingContext2D,
  boxSize: number,
  x: number,
  y: number,
  height: number,
  type: boxType
) {

  ctx.fillStyle = type;
  ctx.fillRect(
    x * boxSize,
    height - (y + 1) * boxSize,
    boxSize,
    boxSize
  );
}
