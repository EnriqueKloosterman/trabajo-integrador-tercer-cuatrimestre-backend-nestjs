import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';
import { ComentsController } from './coments/coments.controller';
import { ComentsService } from './coments/coments.service';
import { ArticleController } from './article/article.controller';
import { ArticleService } from './article/article.service';

@Module({
  imports: [],
  controllers: [
    UserController,
    RecipeController,
    ComentsController,
    ArticleController,
  ],
  providers: [UserService, RecipeService, ComentsService, ArticleService],
})
export class AppModule {}
