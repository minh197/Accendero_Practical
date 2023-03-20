import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import TestRenderer from "react-test-renderer"; // ES6

import App from "./App";
import NotFound from "./components/NotFound/NotFound";

test("renders StorePicker component on the homepage", () => {
  render(
    <MemoryRouter initialEntries={[`/`]}>
      <App />
    </MemoryRouter>
  );
  const storePickerElement = screen.getByText(
    "Please Enter The Name of Your Food Hawker"
  );
  expect(storePickerElement).toBeInTheDocument();
});

test("renders Main component on the correct route", () => {
  const testName = "123";
  render(
    <MemoryRouter initialEntries={[`/hawker/${testName}`]}>
      <App />
    </MemoryRouter>
  );
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});
