import { render, screen } from "@testing-library/react";
import Dish from "./Dish";
import { formatPrice } from "../../helper";
const mockData = {
  index: 0,
  details: {
    image: "https://example.com/image.jpg",
    name: "Example Dish",
    price: 999,
    desc: "A delicious example dish.",
    status: "available",
  },
  addOrder: jest.fn(),
};
describe("<Dish/>", () => {
  it("renders out the name, price, and description", () => {
    const { container, debug } = render(<Dish {...mockData} />);
    const nameElement = screen.getByText(mockData.details.name);
    expect(nameElement).toBeInTheDocument();

    const priceElement = screen.getByText(
      `${formatPrice(mockData.details.price)}`
    );
    expect(priceElement).toBeInTheDocument();

    const descElement = screen.getByText(mockData.details.desc);
    expect(descElement).toBeInTheDocument();
  });
  it("renders the image with alt text", () => {
    render(<Dish {...mockData} />);
    const imageElement = screen.getByAltText(mockData.details.name);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockData.details.image);
  });
  it("renders the status with the correct color", () => {
    render(<Dish {...mockData} />);
    const statusElement = screen.getByText(
      `Status: ${mockData.details.status}`
    );
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveStyle({ color: "blue" });
  });
  it("disables the add to order button when the dish is not available", () => {
    const unavilableProps = {
      ...mockData,
      details: {
        ...mockData.details,
        status: "unavailable",
      },
    };
    render(<Dish {...unavilableProps} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
  it("calls addOrder when the add to order button is clicked", () => {
    render(<Dish {...mockData} />);
    const buttonElement = screen.getByText("Add to Order");
    buttonElement.click();
    expect(mockData.addOrder).toHaveBeenCalledWith(mockData.index);
  });
});
