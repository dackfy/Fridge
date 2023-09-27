export type Recipe = {
  id: number;
  title: string;
  img: string;
  ingridients: string;
  instruction: string;
  apiId?: number;
};

export type RecipeWithOutId = {
  title: string;
  img: string;
  ingridients: string;
  instruction: string;
};
