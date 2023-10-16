import Menu from "@/components/Menu";
import { render } from "@testing-library/react";

describe("Menu", () => {
  it("메뉴는 fastcampus 라는 텍스트를 가지고 있어야한다", () => {
    const { getByText } = render(<Menu />);

    const menu = getByText("fastcampus");

    expect(menu).toBeInTheDocument();
  });
});
