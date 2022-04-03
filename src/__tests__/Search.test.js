import { render, screen } from "@testing-library/react";
import SearchForm from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  };

  test("renders search component", () => {
    const { asFragment } = render(
      <SearchForm setSearchResults={validProps.setSearchResults} />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it("renders search-input", () => {
    render(<SearchForm setSearchResults={validProps.setSearchResults} />);

    const formInput = screen.getByPlaceholderText("Search Image");
    expect(formInput).toBeInTheDocument();
    expect(formInput).toHaveClass("search-input");
  });

  it("renders search button as expected", () => {
    render(<SearchForm setSearchResults={validProps.setSearchResults} />);

    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search-button");
  });
});
