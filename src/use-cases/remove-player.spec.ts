import { describe, it, expect } from 'vitest';

import { makeRemovePlayerUseCase } from '../factories/remove-player-use-case';

describe('Remove Player Use Case', () => {
  it('should remove a player', () => {
    const removePlayerUseCase = makeRemovePlayerUseCase();

    const players = removePlayerUseCase.execute('any_id');

    expect(players).toBeTruthy();
  });
});
