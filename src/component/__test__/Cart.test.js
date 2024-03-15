const { act } = require("react-dom/test-utils");
import { fireEvent, render, screen } from "@testing-library/react";
import RestrunatMenu from "../RestrunatMenu";
import MOCK_DATA2 from "../mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA2),
  });
});

test("should load resturant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestrunatMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const accoridanHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accoridanHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("(0)")).toBeInTheDocument();

  const addbtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("(1)")).toBeInTheDocument();

  fireEvent.click(addbtns[1]);
  expect(screen.getByText("(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", {name: "Delete Cart's"}))
  
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

// !you want to write cart is empty


});
