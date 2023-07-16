import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop()
  name: string;

  @Prop()
  table: number;

  @Prop()
  score: number;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
