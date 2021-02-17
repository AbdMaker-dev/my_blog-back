import { Body, Controller, Get, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { SujetService } from './sujet.service';
import { CommenterService } from '../commenter/commenter.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InternauteService } from '../internaute/internaute.service';

@Controller('sujets')
export class SujetController {

    constructor(private sujetSrv: SujetService, private commenterSrv: CommenterService, private internatSrv: InternauteService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    async addSujet(
        @Body('libelle') libelle: string,
        @Body('description') description: string,
        @Body('image') image: string
    ) {
        const sujet = await this.sujetSrv.create(
            {
                libelle,
                description,
                image
            }
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'successfull',
            data: sujet,
        };
    }

    @Post(':id')
    async addCommenter(
        @Param('id') id: string,
        @Body('commenter') commenter: string,
        @Body('email') internaute: string
    ){
        const intnt = await this.internatSrv.create(internaute);
        const comnt = await this.commenterSrv.create({ commenter });
        // await this.internatSrv.addCommenterToInternaute(intnt, comnt);
        const sujet = await this.sujetSrv.addCommenterToSujet(
           id,
           comnt
        );
        return {
            statusCode: HttpStatus.OK,
            message: 'successfull',
            data: sujet,
        };
    }


   
    @Get()
    async getAllSujet() {
        const sujet = await this.sujetSrv.findAll();
        return sujet;
    }

    @Get(':id')
    async getSujetByid(
        @Param('id') id: string,
    ) {
        const sujet = await this.sujetSrv.findBi(id);
        return sujet;
    }
}
