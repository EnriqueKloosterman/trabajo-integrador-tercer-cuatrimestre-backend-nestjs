import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
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
  @Delete('/:id')
  deleteRecipe(@Param('id') id: number): any {
    return this.recipeService.deleteRecipe(id);
  }
  @Put('/:id')
  @HttpCode(204)
  updateRecipe(@Param('id') id: number, @Body() body): Promise<Recipe> {
    return this.recipeService.updateRecipe(id, body);
  }
}
