import { describe, it, expect } from 'vitest';

import { makeListPlayersUseCase } from '../factories/list-players-use-case';

describe('List Players Use Case', () => {
  it('should list the players', () => {
    const listPlayersUseCase = makeListPlayersUseCase();

    const players = listPlayersUseCase.execute();

    expect(players).toBeTruthy();
  });
});
