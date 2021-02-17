import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { InternauteModule } from './internaute/internaute.module';
import { CommenterModule } from './commenter/commenter.module';
import { SujetModule } from './sujet/sujet.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/my_blog'), 
  AuthModule, 
  UsersModule, 
  InternauteModule,
  CommenterModule,
  SujetModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
