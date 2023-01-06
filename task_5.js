let energyConsumption = 0;
class Gadget {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isConnected = false;
  }
  connect() {
    console.log(this.name + " is connected");
    this.isConnected = true;
  }
  getEnergyConsumption() {
    return this.isConnected ? this.power : 0;
  }
}

class MyGadget extends Gadget {
  constructor(brand, color, name, power) {
    super(name, power);
    this.brand = brand;
    this.color = color;
  }
}

const iron = new MyGadget("Phillips", "white", "iron", 1500);
iron.connect();
console.log(`Energy consumption is ${iron.getEnergyConsumption()}`);
const microwave = new MyGadget("Samsung", "silver", "microwave", 1000);
microwave.connect();
console.log(`Energy consumption is ${microwave.getEnergyConsumption() + iron.getEnergyConsumption()}`);