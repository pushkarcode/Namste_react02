const { render, screen } = require("@testing-library/react");
const { default: ContactUs } = require("../ContactUs");
import "@testing-library/jest-dom";


// ! Group each of test case inside describe block
describe("ContactUsa page test case's", () => {
  test("should load contact component", () => {
    render(<ContactUs />);
    //  ! Quering
    const heading = screen.getByRole("heading");

    // * Assertions
    expect(heading).toBeInTheDocument();
  });

  it("should load button in contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  test("should load placeholder text in contact component", () => {
    render(<ContactUs />);

    const input = screen.getByPlaceholderText("name..");

    expect(input).toBeInTheDocument();
  });

  test("should load input's feild in contact component", () => {
    render(<ContactUs />);

    const inputbox = screen.getAllByRole("textbox");

    console.log(inputbox.length);
    expect(inputbox.length).not.toBe(3);
  });
});


