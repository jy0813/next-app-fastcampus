import { server } from "@/mocks/server";
import { rest } from "msw";
import fetchLectures from "../fetchLectures";

describe("lectures lib function", () => {
  it("should return the correct number of user items", async () => {
    const lecturesArray = await fetchLectures();
    expect(lecturesArray.length).toBe(1);
  });

  it("should return an empty array with an error", async () => {
    server.use(
      rest.get("/lectures", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    const lecturesArray = await fetchLectures();
    expect(lecturesArray.length).toBe(0);
  });
});
