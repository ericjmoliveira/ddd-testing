import { it, expect, describe } from 'vitest';

import { makeUpdatePlayerUseCase } from '../factories/update-player-use-case';

describe('Update Player Use Case', () => {
  it('should successfully update a player', () => {
    const updatePlayerUseCase = makeUpdatePlayerUseCase();

    const success = updatePlayerUseCase.execute('any_id', {
      name: 'Neymar Jr',
      age: 31,
      position: 'FORWARD',
      marketValue: 40
    });

    expect(success).toBeTruthy();
  });
});
