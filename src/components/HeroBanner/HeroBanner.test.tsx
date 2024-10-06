import { render } from "@testing-library/react";
import { HeroBanner } from "./HeroBanner";

describe("components/HeroBanner", () => {
  it("should render HeroBanner component", () => {
    const { container } = render(<HeroBanner />);

    expect(container).toMatchSnapshot();
  });
});
