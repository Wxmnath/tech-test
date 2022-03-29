import { render } from "@testing-library/react";
import SearchForm from "../components/Search";

test("renders learn react link", () => {
  render(<SearchForm />);
  const { asFragment } = render(<SearchForm />);
  expect(asFragment).toMatchSnapshot();
});
