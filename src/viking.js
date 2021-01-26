// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(dmg) {
    this.health = Math.max(0, this.health - dmg)
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(dmg) {
    super.receiveDamage(dmg)
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    super.receiveDamage(dmg)
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// War
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  attack(attacker, victim) {
    return victim.receiveDamage(attacker.attack())
  }

  vikingAttack() {
    const ret = this.attack(random(this.vikingArmy), random(this.saxonArmy))
    this.saxonArmy = this.saxonArmy.filter((x) => x.health > 0)
    return ret
  }

  saxonAttack() {
    const ret = this.attack(random(this.saxonArmy), random(this.vikingArmy))
    this.vikingArmy = this.vikingArmy.filter((x) => x.health > 0)
    return ret
  }

  showStatus() {
    if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!"
    }

    return "Vikings and Saxons are still in the thick of battle."
  }
}
