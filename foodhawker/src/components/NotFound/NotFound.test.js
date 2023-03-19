import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound component", () => {
  test("renders NotFound message", () => {
    render(<NotFound />);
    const notFoundElement = screen.getByRole('heading',{level :1})
    expect(notFoundElement).toBeInTheDocument();
  });
});
