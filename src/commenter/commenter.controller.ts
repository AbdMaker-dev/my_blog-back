import { Body, Controller, Get, HttpStatus, Post } from "@nestjs/common";
import { CommenterService } from "./commenter.service";


@Controller('commenters')
export class CommenterController {
    
    constructor(public commenterSrv: CommenterService){}

    @Post()
    async addSujet(
        @Body('commenter') commenter: string,
    ){
        const cmnt = await this.commenterSrv.create(
            {
                commenter,
            }
        );
        
        return {
            statusCode: HttpStatus.OK,
            message: 'successfull',
            data: cmnt,
        };
    }

    @Get()
    async getAllCommenter() {
        const sujet = await this.commenterSrv.findAll();
        return sujet;
    }
}
