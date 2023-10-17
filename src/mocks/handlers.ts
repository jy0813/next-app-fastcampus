import { Lectures, MockCategory, MockTags } from "@/types/lecture";
import { rest } from "msw";
import type {
  DefaultBodyType,
  ResponseComposition,
  RestContext,
  RestRequest,
} from "msw";

const mockCategory: MockCategory = {
  id: 0,
  name: "프로그래밍",
};

const mockTags: MockTags[] = [
  {
    id: 0,
    name: "평생소장",
  },
  {
    id: 1,
    name: "AWS",
  },
  {
    id: 2,
    name: "DevOps",
  },
];

const lecturesData: Lectures[] = [
  {
    id: 0,
    category: mockCategory,
    title: "초격차 패키지 : 한 번에 끝내는 AWS 인프라 구축과 DevOps 운영",
    tags: mockTags,
    description: "개발/운영",
    thumb: "/thumb.jpg",
    isHot: true,
    isNew: true,
  },
];

export const handlers = [
  rest.get(
    "/users",
    (
      req: RestRequest,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
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
    }
  ),
  rest.get(
    "/lectures",
    (
      req: RestRequest,
      res: ResponseComposition<DefaultBodyType>,
      ctx: RestContext
    ) => {
      return res(ctx.status(200), ctx.json(lecturesData));
    }
  ),
];
