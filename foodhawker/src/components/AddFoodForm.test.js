import React from "react"
import {render, screen, fireEvent} from '@testing-library/react';
import AddFoodForm from "./AddFoodForm";

describe("AddFoodForm component", () => {
    test("should submit the form with correct data", () => {
        const fakeAddDish = jest.fn(); 
        render(<AddFoodForm addDish={fakeAddDish}/>)

        //retrive the input fields and button
        const nameInput = screen.getByPlaceholderText("Name")
        const priceInput = screen.getByPlaceholderText("Price")
        const selectInput = screen.getByPlaceholderText("Status");
        const descInput = screen.getByPlaceholderText("Desc");
        const imageInput = screen.getByPlaceholderText("Image");
        const submitButton = screen.getByText("+ Add New Dish"); 

        //simulate user input
        fireEvent.change(nameInput, { target: {value: "Banh canh cua"}});
        fireEvent.change(priceInput, {target: {value: "10.99"}});
        fireEvent.change(selectInput, {target: {value: "unavailable"}})
        fireEvent.change(descInput, {target: {value: "Banh canh cua is one of the most popular Vietnamese dishes!!!"}})
        fireEvent.change(imageInput, {target: {value: "/images/banhcanhcua.jpg"}})

        //submit the form 
        fireEvent.click(submitButton)

        //verify if the addDish function was triggered with corrected information
        expect(fakeAddDish).toHaveBeenCalledWith({
          name: "Banh canh cua",
          price: 10.99,
          status: "unavailable",
          desc: "Banh canh cua is one of the most popular Vietnamese dishes!!!",
          image: "/images/banhcanhcua.jpg",
        });
    })
})