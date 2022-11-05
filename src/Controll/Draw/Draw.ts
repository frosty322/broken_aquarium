import { boxType } from "../../constants";
import DrawBox from "./DrawBox";
import DrawCol from "./DrawCol";
import DrawGrid from "./DrawGrid";

export default function Draw(ctx: CanvasRenderingContext2D) {
  DrawGrid(ctx, 1000, 1000 / 8);
  const boxes = [4, 2, 3, 2, 5, 0, 1, 3];
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = boxes.length - 1;
  let volume = 0;

  boxes.forEach((element, i) => {
    DrawCol(ctx, 1000 / 8, i, element, 1000, boxType.Sand);
  });

  while (left < right) {
    if (boxes[left] > leftMax) {
      leftMax = boxes[left];
    }

    if (boxes[right] > rightMax) {
      rightMax = boxes[right];
    }

    if (leftMax >= rightMax) {
      volume += rightMax - boxes[right];
      DrawCol(
        ctx,
        1000 / 8,
        right,
        rightMax - boxes[right],
        1000,
        boxType.Whater,
        boxes[right]
      );
      right--;
    } else {
      volume += leftMax - boxes[left];
      DrawCol(
        ctx,
        1000 / 8,
        left,
        leftMax - boxes[left],
        1000,
        boxType.Whater,
        boxes[left]
      );
      left++;
    }
  }
}
