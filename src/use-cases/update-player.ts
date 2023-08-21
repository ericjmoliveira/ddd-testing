import { Player } from '../entities/player';
import { PlayerRepository } from '../interfaces/player-repository';

export class UpdatePlayerUseCase {
  constructor(private playerReposiory: PlayerRepository) {}

  execute(id: string, data: Player) {
    return this.playerReposiory.updatePlayer(id, data);
  }
}
