export default function DrawGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cellSize: number
) {
  for (let x = 0 - cellSize; x < width; x += cellSize) {
    ctx.moveTo(x + cellSize, 0);
    ctx.lineTo(x + cellSize, height);
  }

  for (let y = height; y > 0; y -= cellSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }

  ctx.strokeStyle = "black";
  ctx.stroke();
}
