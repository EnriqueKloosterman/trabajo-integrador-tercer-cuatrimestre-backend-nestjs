import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.interface';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Get()
  getAllRecipes(): Promise<Recipe[]> {
    return this.recipeService.getAllRecipes();
  }
  @Get(':id')
  getRecipeById(@Param('id') id: number): Promise<Recipe> {
    return this.recipeService.getRecipeById(id);
  }
  @Post()
  createRecipe(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.createRecipe(recipe);
  }
}

