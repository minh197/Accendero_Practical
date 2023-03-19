import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from "./Main";

jest.mock("firebase/database", () => {
  return {
    ref: jest.fn(() => ({
      onValue: jest.fn(),
      set: jest.fn(),
      update: jest.fn(),
      get: jest.fn(() =>
        Promise.resolve({
          exists: () => true,
          val: () => ({ quantity: 1 }),
        })
      ),
    })),
  };
});

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(() => ({ hawkerId: "123" })),
}));
it("adds a dish to the inventory", () => {
  const { getByTestId } = render(<Main />);
  const addDishButton = getByTestId("add-dish-button");
  fireEvent.click(addDishButton);
  // assert that a dish is added to the inventory
});