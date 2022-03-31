import { render } from "@testing-library/react";
import SearchResults from "../components/Search";

describe("Search Result", () => {
  test("renders search result", () => {
    render(<SearchResults />);
    const { asFragment } = render(<SearchResults />);
    expect(asFragment).toMatchSnapshot();
  });
});
