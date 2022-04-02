import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
  it("renders logo", () => {
    render(<App />);
    const imageTest = screen.getByAltText("nasaLogo");

    expect(imageTest).toBeInTheDocument();
    expect(imageTest).toHaveClass("nasa-image");
  });
});
