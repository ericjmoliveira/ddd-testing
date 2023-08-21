import { describe, it, expect } from 'vitest';

import { makeAddPlayerUseCase } from '../factories/add-player-use-case';

describe('Add Player Use Case', () => {
  it('should successfully add a player', () => {
    const addPlayerUseCase = makeAddPlayerUseCase();

    const success = addPlayerUseCase.execute({
      name: 'Any Other Name',
      age: 23,
      position: 'FORWARD',
      marketValue: 75
    });

    expect(success).toBeTruthy();
  });

  it('should fail to add a player', () => {
    const addPlayerUseCase = makeAddPlayerUseCase();

    const success = addPlayerUseCase.execute({
      name: 'Erling Haaland',
      age: 23,
      position: 'FORWARD',
      marketValue: 0
    });

    expect(success).toBeFalsy();
  });
});
