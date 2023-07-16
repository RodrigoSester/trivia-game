import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Answer } from './answer.schema';

export type QuestionDocument = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop()
  question: string;

  @Prop()
  answerId: Answer;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
