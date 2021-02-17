import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Sujet } from '../sujet/sujet';
import * as mongoose from 'mongoose';
import { Internaute } from '../internaute/internaute';

export type CommenterDocument = Commenter & Document;

@Schema()
export class Commenter {

    // @Prop()
    // id?: number;

    @Prop({ required: true })
    commenter: string;

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Internaute' }})
    internaute?: Internaute;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sujet'})
    // sujet: Sujet;
}

export const CommenterSchema = SchemaFactory.createForClass(Commenter);

