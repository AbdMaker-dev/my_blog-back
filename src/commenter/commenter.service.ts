import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commenter, CommenterDocument } from './commenter';

@Injectable()
export class CommenterService {

    constructor(@InjectModel(Commenter.name) private readonly commenterModel: Model<CommenterDocument>) {}

    async create(data: Commenter): Promise<Commenter> {
        const commenter = new this.commenterModel(data);
        // await commenter.populate('sujet').execPopulate();
        // commenter.sujet.commenters.push(commenter);
        
        return commenter.save();
    }

    async findAll(): Promise<Commenter[]> {
        return this.commenterModel.find().populate('sujet').exec();
    }

    async findBi(id: number): Promise<Commenter> {
        return this.commenterModel.findById(id).exec();
    }
}
