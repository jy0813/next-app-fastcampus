import { rest } from "msw";

export const handlers = [
  rest.get("/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "test1",
          age: 30,
        },
        {
          name: "test2",
          age: 26,
        },
      ])
    );
  }),
];
