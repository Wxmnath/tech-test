import { render, screen } from "@testing-library/react";
import SearchResults from "../components/Search";

describe("Search Result", () => {
  const validProps = {
    results: () => {},
  };

  it("renders search result", () => {
    const { asFragment } = render(
      <SearchResults results={validProps.results} />
    );

    expect(asFragment).toMatchSnapshot();
  });

  xit("renders no results found", () => {
    render(<SearchResults results={validProps.results} />);
    const renderResult = screen.getByText("No results found!");
    expect(renderResult).toBeInTheDocument();
    expect(renderResult).toHaveClass("no-result-title");
  });
});
