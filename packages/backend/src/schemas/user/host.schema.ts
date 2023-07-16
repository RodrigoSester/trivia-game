import { Prop, Schema } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Game } from '../game.schema';

@Schema()
export class Host extends User {
  @Prop()
  games: Game[];
}
