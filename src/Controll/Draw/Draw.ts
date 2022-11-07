import { maxHeaderSize } from "http";
import { boxType } from "../../utils/constants";
import DrawBox from "./DrawBox";
import DrawCol from "./DrawCol";
import DrawGrid from "./DrawGrid";

const Draw =
  (
    boxes: number[],
    resultCB: React.Dispatch<React.SetStateAction<number | null>>
  ) =>
  (ctx: CanvasRenderingContext2D) => {
    const box = document.querySelector(".main-box");
    let width = 0;
    let height = 0;

    if (box) {
      width = box.clientWidth;
      height = box.clientHeight;
    }

    const boxSize =
      boxes.length > Math.max(...boxes)
        ? ((width / boxes.length) * height) / width
        : height / Math.max(...boxes);

    const resize = width < height ? boxSize * (width / height) : null;

    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = boxes.length - 1;
    let volume = 0;

    boxes.forEach((element, i) => {
      DrawCol(ctx, resize ?? boxSize, i, element, width, height, boxType.Sand);
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
          resize ?? boxSize,
          right,
          rightMax - boxes[right],
          width,
          height,
          boxType.Whater,
          boxes[right]
        );
        right--;
      } else {
        volume += leftMax - boxes[left];
        DrawCol(
          ctx,
          resize ?? boxSize,
          left,
          leftMax - boxes[left],
          width,
          height,
          boxType.Whater,
          boxes[left]
        );
        left++;
      }
    }
    console.log(Math.max(...boxes));

    if (boxes.length < 100 && Math.max(...boxes) < 100) {
      DrawGrid(ctx, width, height, resize ?? boxSize);
    }
    resultCB(volume);
  };

export default Draw;
