import { boxType } from "../../constants";
import DrawBox from "./DrawBox";

export default function DrawCol(
  ctx: CanvasRenderingContext2D,
  boxSize: number,
  x: number,
  height: number,
  canvasSize: number,
  type: boxType,
  bias?: number
) {
  for (let i = 0; i < height; i++) {
    let y = bias === undefined ? i : i + bias;
    DrawBox(ctx, boxSize, x, y, canvasSize, type);
  }
}
