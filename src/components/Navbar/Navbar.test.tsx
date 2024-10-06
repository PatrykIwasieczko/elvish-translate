import { render } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("components/Navbar", () => {
  it("should render Navbar component when logged in", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar isAuthenticated login={jest.fn()} logout={jest.fn()} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render Navbar component when logged out", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar isAuthenticated={false} login={jest.fn()} logout={jest.fn()} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
