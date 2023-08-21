import { InMemoryRepository } from '../repositories/in-memory';
import { UpdatePlayerUseCase } from '../use-cases/update-player';

export function makeUpdatePlayerUseCase() {
  const inMemoryRepository = new InMemoryRepository();
  const updatePlayerUseCase = new UpdatePlayerUseCase(inMemoryRepository);

  return updatePlayerUseCase;
}
