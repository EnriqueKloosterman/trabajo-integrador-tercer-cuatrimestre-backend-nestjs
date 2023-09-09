import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  HttpStatus,
  BadRequestException,
  ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('recipes')
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  @Get()
  @UsePipes(new ValidationPipe({ transform: true}))
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
  @UsePipes(new ValidationPipe({ transform: true}))
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
  @UsePipes(new ValidationPipe({ transform: true}))
  async createRecipe(@Body() recipe: RecipeDto, @Res() res: Response): Promise<any> {
    try{
      const serviceResponse = await this.recipeService.createRecipe(recipe);
      await res.status(HttpStatus.CREATED).send(serviceResponse);
    }
    catch(error){
      throw new BadRequestException('Recipe creatioj failed')
    }
  }
  @Delete('/:id')
  @UsePipes(new ValidationPipe({ transform: true}))
  async deleteRecipe(@Param('id') id: number, @Res() res: Response): Promise<any> {
   try{
    const serviceResponse = await this.recipeService.deleteRecipe(id);
    res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
   }catch(error){
    throw new BadRequestException('Recipe deletion failed')
   }
  }
  @Put('/:id')
  @UsePipes(new ValidationPipe({ transform: true}))
  async updateRecipe(@Param('id') id: number, @Body() body, @Res() res: Response): Promise<any> {
    try {
      const serviceResponse = await this.recipeService.updateRecipe(id, body);
      res.status(HttpStatus.NO_CONTENT).send(serviceResponse);
    } catch (error) {
      throw new BadRequestException('Recipe update failed')
    }
  }
}
