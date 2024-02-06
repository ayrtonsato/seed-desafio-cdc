import { Module } from '@nestjs/common';
import { drizzleProvider } from '@common/drizzle/drizzle.provider';

@Module({
  providers: [...drizzleProvider],
  exports: [...drizzleProvider],
})
export class DrizzleModule { }
