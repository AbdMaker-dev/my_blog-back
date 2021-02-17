import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sujet, SujetDoc } from './sujet';
import { Model } from 'mongoose';

@Injectable()
export class SujetService {

    constructor(@InjectModel(Sujet.name) private readonly modelSujet: Model<SujetDoc>){}

    async create(data: Sujet): Promise<Sujet> {
        const sujet = new this.modelSujet(data);
        return sujet.save();
    }

    async findAll(): Promise<Sujet[]> {
        return this.modelSujet.find().populate('commenters').exec();
    }

    async findBi(id: string): Promise<Sujet> {
        return this.modelSujet.findOne({'_id': id}).populate('commenters').exec();
    }

    async addCommenterToSujet(id: any, commentere: any): Promise<Sujet>{
        const sujet = await this.findBi(id);
        sujet.commenters.push(commentere);
        return (await this.modelSujet.findByIdAndUpdate({_id:id }, sujet, { new: true }).populate('commenters')).save();
    }
}
