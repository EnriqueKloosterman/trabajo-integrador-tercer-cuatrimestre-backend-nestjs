import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { ComentsModule } from './coments/coments.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, RecipeModule, ComentsModule, ArticleModule],
})
export class AppModule {}
