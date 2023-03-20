import React from "react";
import { getByText, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  test("renders header and h3 element with the expected text", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    const h1 = screen.getByText("Today's Foods");
    const h3 = screen.getByText("Just As Good As Your Homemade's");

    expect(header).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(h3).toBeInTheDocument();
  });
});
