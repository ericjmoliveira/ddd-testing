import { randomUUID } from 'node:crypto';

import { Player } from '../entities/player';
import { PlayerRepository } from '../interfaces/player-repository';

export class InMemoryRepository implements PlayerRepository {
  private playersList: Player[] = [
    { id: 'any_id', name: 'Any Name', age: 25, position: 'FORWARD', marketValue: 50 },
    { id: 'any_id2', name: 'Any Other Name', age: 26, position: 'MIDFIELDER', marketValue: 40 },
    { id: 'any_id3', name: 'Any Another Name', age: 27, position: 'DEFENDER', marketValue: 30 }
  ];

  listPlayers(): Player[] {
    return this.playersList;
  }

  addPlayer(data: Player): boolean {
    if (data.marketValue <= 0) return false;

    try {
      this.playersList.push({ id: randomUUID(), ...data });

      return true;
    } catch (error) {
      return false;
    }
  }

  updatePlayer(id: string, data: Player): boolean {
    try {
      this.playersList = this.playersList.map((player) => {
        if (player.id === id) {
          player = data;

          return player;
        }

        return player;
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  removePlayer(id: string): boolean {
    try {
      this.playersList = this.playersList.filter((player) => player.id !== id);

      return true;
    } catch (error) {
      return false;
    }
  }
}
