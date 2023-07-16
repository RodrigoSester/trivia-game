import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { Round } from './round.schema';
import { Team } from './team.schema';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  rounds: Round[];

  @Prop()
  teams: Team[];

  @Prop()
  currentRound: number;

  @Prop()
  date: Date;

  @Prop()
  local: string;

  @Prop()
  finished: boolean;
}

export const GameSchema = SchemaFactory.createForClass(Game);
