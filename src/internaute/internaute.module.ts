import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InternauteController } from './internaute.controller';
import { InternauteService } from './internaute.service';
import { Internaute, InternauteSchema } from './internaute';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Internaute.name, schema: InternauteSchema},
    ])
  ],
  controllers: [InternauteController],
  providers: [InternauteService]
})
export class InternauteModule {}
