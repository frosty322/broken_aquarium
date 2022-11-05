export default function DrawGrid(
  ctx: CanvasRenderingContext2D,
  canvasSize: number,
  cellSize: number
) {
  let p = 10; //padding

  for (let x = 0 - cellSize + p; x < canvasSize; x += cellSize) {
    ctx.moveTo(x + cellSize, p);
    ctx.lineTo(x + cellSize, canvasSize - p);
  }

  for (let y = canvasSize + cellSize; y > 0; y -= cellSize) {
    ctx.moveTo(p, y - cellSize - p);
    ctx.lineTo(canvasSize - p, y - cellSize - p);
  }

  ctx.strokeStyle = "black";
  ctx.stroke();
}
