import { Injectable } from '@nestjs/common';
import { Recipe } from './recipe.interface';
const recipeURL = 'http://localhost:3030/recipe/';

@Injectable()
export class RecipeService {
  async getAllRecipes(): Promise<Recipe[]> {
    const res = await fetch(recipeURL);
    const parsed = await res.json();
    return parsed;
  }
  async getRecipeById(id: number): Promise<Recipe> {
    const res = await fetch(`${recipeURL}/${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async createRecipe(recipe: Recipe): Promise<Recipe> {
    const id = await this.createId();
    const recipeWithId = { id, ...recipe };
    const res = await fetch(recipeURL, {
      method: 'POST',
      body: JSON.stringify(recipeWithId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const parsed = await res.json();
    return parsed;
  }
  async createId(): Promise<number> {
    const res = await this.getAllRecipes();
    const lastRecipe = res[res.length - 1];
    const id = lastRecipe.id + 1;
    return id;
  }
}
