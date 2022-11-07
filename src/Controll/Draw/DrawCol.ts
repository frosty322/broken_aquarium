import { boxType } from "../../utils/constants";
import DrawBox from "./DrawBox";

export default function DrawCol(
  ctx: CanvasRenderingContext2D,
  boxSize: number,
  x: number,
  num: number,
  width: number,
  height: number,
  type: boxType,
  bias?: number
) {
  for (let i = 0; i < num; i++) {
    let y = bias === undefined ? i : i + bias;
    DrawBox(ctx, boxSize, x, y, height, type);
  }
}
