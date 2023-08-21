import { Player } from '../entities/player';

export interface PlayerRepository {
  listPlayers(): Player[];
  addPlayer(data: Player): boolean;
  updatePlayer(id: string, data: Player): boolean;
  removePlayer(id: string): boolean;
}
