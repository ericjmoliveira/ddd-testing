import { describe, it, expect } from 'vitest';

import { InMemoryRepository } from './in-memory';

describe('In Memory Repository', () => {
  it('should list the players', () => {
    const inMemoryRepository = new InMemoryRepository();
    const players = inMemoryRepository.listPlayers();

    expect(players).toBeTruthy();
  });

  it('should add a new player to the list', () => {
    const inMemoryRepository = new InMemoryRepository();
    const success = inMemoryRepository.addPlayer({
      name: 'Any Other Name',
      age: 26,
      position: 'MIDFIELDER',
      marketValue: 40
    });

    expect(success).toBeTruthy();
  });

  it('should fail to add a new player to the list', () => {
    const inMemoryRepository = new InMemoryRepository();
    const success = inMemoryRepository.addPlayer({
      name: 'Any Other Name',
      age: 26,
      position: 'MIDFIELDER',
      marketValue: 0
    });

    expect(success).toBeFalsy();
  });

  it('should update a player in the list', () => {
    const inMemoryRepository = new InMemoryRepository();
    const success = inMemoryRepository.updatePlayer('any_id', {
      name: 'Another Name',
      age: 26,
      position: 'DEFENDER',
      marketValue: 45
    });

    expect(success).toBeTruthy();
  });

  it('should remove a player from the list', () => {
    const inMemoryRepository = new InMemoryRepository();
    const success = inMemoryRepository.removePlayer('any_id');

    expect(success).toBeTruthy();
  });
});
