import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  HttpCode,
  Res,
  HttpStatus,
  BadRequestException
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.interface';
import { Response } from 'express';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Get()
  async getAllRecipes(@Res() res: Response): Promise<any> {
    try{
      const serviceResponse = await this.recipeService.getAllRecipes();
      return res.status(HttpStatus.OK).json(serviceResponse);
    }
    catch(error){
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
  }
  @Get(':id')
  async getRecipeById(@Param('id') id: number, @Res() res: Response): Promise<any> {
    try{
      const serviceResponse = await this.recipeService.getRecipeById(id);
      if(Object.keys(serviceResponse).length){
        return res.status(HttpStatus.OK).send(serviceResponse)
      }else{
        return res.status(HttpStatus.NOT_FOUND).send(serviceResponse);
      }
    }
    catch(error){
      throw new BadRequestException('Recipe with id ${id} not found.')
    }
  }
  @Post()
  async createRecipe(@Body() recipe: Recipe, @Res() res: Response): Promise<any> {
    try{
      const serviceResponse = await this.recipeService.createRecipe(recipe);
      await res.status(HttpStatus.CREATED).send(serviceResponse);
    }
    catch(error){
      throw new BadRequestException('Recipe creatioj failed')
    }
  }
  @Delete('/:id')
  @HttpCode(204)
  deleteRecipe(@Param('id') id: number): any {
    return this.recipeService.deleteRecipe(id);
  }
  @Put('/:id')
  @HttpCode(204)
  updateRecipe(@Param('id') id: number, @Body() body): Promise<Recipe> {
    return this.recipeService.updateRecipe(id, body);
  }
}
