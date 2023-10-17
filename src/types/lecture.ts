export type MockCategory = {
  id: number;
  name: string;
};

export type MockTags = {
  id: number;
  name: string;
};

export type Lectures = {
  id: number;
  category: MockCategory;
  tags: MockTags[];
  title: string;
  description: string;
  thumb: string;
  isHot: boolean;
  isNew: boolean;
};
