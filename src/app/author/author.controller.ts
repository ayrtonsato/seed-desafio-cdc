import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { createAuthorSchema } from '@app/author/schema-validators/create-author.schema';
import { CreateAuthor } from '@app/author/dtos/create-author.dto';
import { AuthorService } from '@app/author/author.service';
import { UniqueConstraintDbError } from '@common/errors/unique-constraint-db.error';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) { }

  @Post()
  async createAuthor(@Body() body: CreateAuthor) {
    const { success } = createAuthorSchema.safeParse(body);
    if (!success) {
      throw new BadRequestException();
    }
    try {
      const author = await this.authorService.create(body);
      return author;
    } catch (e) {
      console.log(e instanceof UniqueConstraintDbError)
      if (e instanceof UniqueConstraintDbError) {
        throw new BadRequestException(e.message);
      }
      throw e;
    }
  }
}
