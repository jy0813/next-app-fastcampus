import Banner from "@/components/Banner";
import { render } from "@testing-library/react";

describe("Banner", () => {
  it("배너는 배너라는 텍스트를 가지고있어야한다", () => {
    const { getByText } = render(<Banner />);

    const banner = getByText("배너");

    expect(banner).toBeInTheDocument();
  });
});
