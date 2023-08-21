import { PlayerRepository } from '../interfaces/player-repository';

export class RemovePlayerUseCase {
  constructor(private playerRepository: PlayerRepository) {}

  execute(id: string) {
    return this.playerRepository.removePlayer(id);
  }
}
