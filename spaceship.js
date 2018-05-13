class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";
    crew.length === 0 ? this.docked = true : this.docked = false
    crew.forEach( (e) => { e.currentShip = this })
    this.crew = crew
  }
}
