import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document, Types } from 'mongoose';


export type UsersDoc = Users & Document;

@Schema()
export class Users {
    
    @Prop()
    name: string;

    @Prop()
    login: string;

    @Prop()
    password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);


