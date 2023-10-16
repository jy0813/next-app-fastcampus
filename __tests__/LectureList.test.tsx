import { render } from "@testing-library/react";
import Home from "@/app/page";
import LectureList from "@/components/LectureList";

describe("LectureList", () => {
  it("강의목록은 강의목록이라는 텍스트를 가지고있어야한다", () => {
    const { getByText } = render(<LectureList />);

    const lectureList = getByText("강의목록");

    expect(lectureList).toBeInTheDocument();
  });
});
