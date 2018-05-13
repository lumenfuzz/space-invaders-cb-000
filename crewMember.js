class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
    this.engageWarpDrive = () => {return "had no effect"}
    this.setsInvisibility = () => {return "had no effect"}
    this.chargePhasers = () => {return "had no effect"}
    switch(position) {
      case "Pilot":
        
        break;
      case "Defender":
        
        break;
      case "Gunner":
        
        break;
      default:
        null
    }
  }
}
