import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ResurtantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should rebder reaturent component with props data", () => {
  render(<RestaurantCard resData={Mock_Data} />);

  const name = screen.getByText("UBQ BY Barbeque Nation");

  expect(name).toBeInTheDocument();
});
