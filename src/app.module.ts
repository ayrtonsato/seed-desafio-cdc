import { Module } from '@nestjs/common';
import { DrizzleModule } from './common/drizzle/drizzle.module';
import { AuthorModule } from './app/author/author.module';

@Module({
  imports: [DrizzleModule, AuthorModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
