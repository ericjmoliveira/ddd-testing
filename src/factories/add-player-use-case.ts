import { InMemoryRepository } from '../repositories/in-memory';
import { AddPlayerUseCase } from '../use-cases/add-player';

export function makeAddPlayerUseCase() {
  const inMemoryRepository = new InMemoryRepository();
  const addPlayerUseCase = new AddPlayerUseCase(inMemoryRepository);

  return addPlayerUseCase;
}
