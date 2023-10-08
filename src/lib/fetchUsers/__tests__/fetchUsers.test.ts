import { server } from "@/mocks/server";
import { rest } from "msw";
import fetchUser from "../fetchUsers";

describe("users lib function", () => {
  it("should return the correct number of user items", async () => {
    const usersArray = await fetchUser();
    expect(usersArray.length).toBe(2);
  });

  it("should return an empty array with an error", async () => {
    server.use(
      rest.get("/users", (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );
    const usersArray = await fetchUser();
    expect(usersArray.length).toBe(0);
  });
});
