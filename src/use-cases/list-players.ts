import { PlayerRepository } from '../interfaces/player-repository';

export class ListPlayersUseCase {
  constructor(private playerRepository: PlayerRepository) {}

  execute() {
    return this.playerRepository.listPlayers();
  }
}
