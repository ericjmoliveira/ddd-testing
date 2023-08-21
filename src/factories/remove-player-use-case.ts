import { InMemoryRepository } from '../repositories/in-memory';
import { RemovePlayerUseCase } from '../use-cases/remove-player';

export function makeRemovePlayerUseCase() {
  const inMemoryRepository = new InMemoryRepository();
  const removePlayerUseCase = new RemovePlayerUseCase(inMemoryRepository);

  return removePlayerUseCase;
}
