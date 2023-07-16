import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Question } from './question.schema';

export type RoundDocument = HydratedDocument<Round>;

@Schema()
export class Round {
  @Prop()
  name: string;

  @Prop()
  questions: Question[];

  @Prop()
  currentQuestion: number;
}

export const RoundSchema = SchemaFactory.createForClass(Round);
