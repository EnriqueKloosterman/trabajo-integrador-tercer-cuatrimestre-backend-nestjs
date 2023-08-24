export interface Recipe {
  id: number;
  title: string;
  recipe: string;
  ingredients: string;
  img: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
