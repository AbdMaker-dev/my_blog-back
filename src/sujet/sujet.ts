import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Commenter } from '../commenter/commenter';
import { Document, Types } from 'mongoose';


export type SujetDoc = Sujet & Document;

@Schema()
export class Sujet {

    // @Prop()
    // id?: number;
    
    @Prop({ required: true })
    libelle: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    image: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commenter' }] })
    commenters?: Commenter[];
}

export const SujetSchema = SchemaFactory.createForClass(Sujet);
