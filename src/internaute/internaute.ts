import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Commenter } from "src/commenter/commenter";



export type InternauteDoc = Internaute & Document;

@Schema()
export class Internaute {

    @Prop()
    email: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Commenter' }] })
    commenters?: Commenter[];
}

export const InternauteSchema = SchemaFactory.createForClass(Internaute);

