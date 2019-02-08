class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = 'Looking for a rig'
  }

  engageWarpDrive() {
    if (this.currentShip === `Looking for a rig`) {
      return `had no effect`
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged';
    }
  }

  chargePhasers() {
    if (this.currentShip === `Looking for a rig`) {
      return `had no effect`
    } else if (this.position === "Gunner"){
      this.currentShip.phasersCharge = 'charged';
    }
  }

  setsInvisibility() {
    if (this.currentShip === `Looking for a rig`) {
      return `had no effect`
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true;
    }
  }

  setCurrentShip(currentShip) {
    this.currentShip = currentShip;
  }

}
