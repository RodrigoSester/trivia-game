import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Team } from './team.schema';
import { Round } from './round.schema';
import { Question } from './question.schema';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema()
export class Answer {
  @Prop()
  text: string;

  @Prop()
  correct: boolean;

  @Prop()
  points: number;

  @Prop()
  questionId: Question;

  @Prop()
  teamId: Team;

  @Prop()
  roundId: Round;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
