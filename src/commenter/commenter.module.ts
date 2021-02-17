import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommenterController } from './commenter.controller';
import { CommenterService } from './commenter.service';
import { Commenter, CommenterSchema } from './commenter';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Commenter.name, schema: CommenterSchema},
    ])
  ],
  controllers: [CommenterController],
  providers: [CommenterService]
})
export class CommenterModule {}
