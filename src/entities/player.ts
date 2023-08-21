export interface Player {
  id?: string;
  name: string;
  age: number;
  position: 'GOALKEEPER' | 'DEFENDER' | 'MIDFIELDER' | 'FORWARD';
  marketValue: number;
}
