import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render the body component with Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchbrtn = screen.getByRole("button", { name: "search" });

  const searchinput = screen.getByTestId("searchInput");
  expect(searchbrtn).toBeInTheDocument();

  //   fireEvent.change(searchinput, { target: { value: "pizza" } });

  //   fireEvent.click(searchbrtn);

  //   //screen load only one card

  //  const cards =  screen.getAllByAltText("resCard")

  //  expect(cards.length).toBe(1);
});



test("should Filter top rated resturant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardElements = screen.getAllByTestId("resCard");

  expect(cardElements.length).toBe(9);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Reated Restaurant",
  });
   fireEvent.click(topRatedBtn);

   const cardsAfterFilter = screen.getAllByTestId("resCard");

   expect(cardsAfterFilter.length).toBe(7)

});
