import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Разбитый аквариум/i);
  expect(titleElement).toBeInTheDocument();
});

test("calcWhater function test", () => {
  expect(calcWater([4, 2, 3, 2, 5, 0, 1, 3])).toBe(10);
});

function calcWater(boxes: number[]) {
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = boxes.length - 1;
  let volume = 0;

  while (left < right) {
    if (boxes[left] > leftMax) {
      leftMax = boxes[left];
    }

    if (boxes[right] > rightMax) {
      rightMax = boxes[right];
    }

    if (leftMax >= rightMax) {
      volume += rightMax - boxes[right];
      right--;
    } else {
      volume += leftMax - boxes[left];
      left++;
    }
  }

  return volume;
}
