import Character from '../Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attackPoint = 25;
    this.defencePoint = 25;
  }
}
