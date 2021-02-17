import { Module } from '@nestjs/common';
import { SujetController } from './sujet.controller';
import { SujetService } from './sujet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Sujet, SujetSchema } from './sujet';
import { CommenterService } from '../commenter/commenter.service';
import { Commenter, CommenterSchema } from '../commenter/commenter';
import { InternauteService } from '../internaute/internaute.service';
import { Internaute, InternauteSchema } from '../internaute/internaute';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Sujet.name, schema: SujetSchema},
      {name: Commenter.name, schema: CommenterSchema},
      {name: Internaute.name, schema: InternauteSchema}
    ])
  ],
  controllers: [SujetController],
  providers: [SujetService, CommenterService, InternauteService]
})
export class SujetModule {}
