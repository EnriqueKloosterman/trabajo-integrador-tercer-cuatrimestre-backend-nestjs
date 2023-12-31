import { Injectable } from '@nestjs/common';
import { RecipeDto } from './recipe.dto';
const recipeURL = 'http://localhost:3030/recipe/';

@Injectable()
export class RecipeService {
  async getAllRecipes(): Promise<any> {
    const res = await fetch(recipeURL);
    const parsed = await res.json();
    return parsed;
  }
  async getRecipeById(id: number): Promise<RecipeDto> {
    const res = await fetch(`${recipeURL}/${id}`);
    const parsed = await res.json();
    return parsed;
  }
  async createRecipe(recipe: RecipeDto): Promise<RecipeDto> {
    const id = await this.createId();
    const recipeWithId = { id, ...recipe };
    recipeWithId.createdAt = new Date();
    recipeWithId.updatedAt = new Date();
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
  async deleteRecipe(id: number): Promise<RecipeDto> {
    const res = await fetch(`${recipeURL}/${id}`, {
      method: 'DELETE',
    });
    const parsed = await res.json();
    return parsed;
  }
  async updateRecipe(id: number, Recipe: RecipeDto): Promise<RecipeDto> {
    const isRecipe = await this.getRecipeById(id);
    if (!Object.keys(isRecipe).length) return;
    const updateRecipe = { id, ...Recipe };
    updateRecipe.updatedAt = new Date();
    await fetch(`${recipeURL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateRecipe),
    });
  }
  async createId(): Promise<number> {
    const res = await this.getAllRecipes();
    const lastRecipe = res[res.length - 1];
    const id = lastRecipe.id + 1;
    return id;
  }
}
