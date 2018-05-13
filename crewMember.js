class CrewMember {
  constructor(position) {
    this.currentShip = "Looking for a Rig";
    switch(position) {
      case "Pilot":
        this.engageWarpDrive = "had no effect"
        break;
      case "Defender":
        this.setsInvisibility = "had no effect"
        break;
      case "Gunner":
        this.chargePhasers = "had no effect"
        break;
      default:
        null
    }
  }
}
