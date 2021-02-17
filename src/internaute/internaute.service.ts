import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Internaute, InternauteDoc } from './internaute';
import { Commenter } from '../commenter/commenter';

@Injectable()
export class InternauteService {

    constructor(@InjectModel(Internaute.name) private readonly internauteSujet: Model<InternauteDoc>){}

    async create(email: string): Promise<Internaute> {
        const intnt = this.findBiEmail(email);
        if (intnt) {
           return intnt;
        }
        const new_intnt = new this.internauteSujet({"email": email});
        return new_intnt.save();
    }

    async findBiEmail(email: string): Promise<Internaute> {
        return this.internauteSujet.findOne({'email': email}).exec();
    }

    async addCommenterToInternaute(internaute: Internaute, commentere: Commenter): Promise<Internaute>{
        // if (!(await internaute).commenters) {
        //     (await internaute).commenters = [];
        // }
        // internaute.commenters.push(commentere);
        return (await this.internauteSujet.findByIdAndUpdate({'email': internaute.email }, internaute, { new: true })).save();
    }

}
