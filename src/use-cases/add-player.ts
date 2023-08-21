import { Player } from '../entities/player';
import { PlayerRepository } from '../interfaces/player-repository';

export class AddPlayerUseCase {
  constructor(private playerRepository: PlayerRepository) {}

  execute(data: Player) {
    return this.playerRepository.addPlayer(data);
  }
}
