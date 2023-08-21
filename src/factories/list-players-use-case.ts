import { InMemoryRepository } from '../repositories/in-memory';
import { ListPlayersUseCase } from '../use-cases/list-players';

export function makeListPlayersUseCase() {
  const inMemoryRepository = new InMemoryRepository();
  const listPlayersUseCase = new ListPlayersUseCase(inMemoryRepository);

  return listPlayersUseCase;
}
