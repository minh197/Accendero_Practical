import React from "react";
import {render, screen} from "@testing-library/react";
import NotFound from "./NotFound";

describe("renders NotFound component", () => {
    it("renders 'NotFound!!!!", () => {
       render(<NotFound/>)
        expect(screen.getByText("NotFound!!!!")).toBeInTheDocument();
    })
})