import { Module } from '@nestjs/common';
import { AuthorService } from '@app/author/author.service';
import { AuthorController } from '@app/author/author.controller';
import { DrizzleModule } from '@common/drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule { }
