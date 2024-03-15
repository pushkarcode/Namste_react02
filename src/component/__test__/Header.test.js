import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should load (rebder) header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartitem = screen.getByText(/Cart/);

  const loginbtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginbtn);
  const logoutbtn = screen.getByRole("button", { name: "Logout" });
  //secand way
  // let loginbtn = screen.getByText("Login")

  expect(logoutbtn).toBeInTheDocument();
});
