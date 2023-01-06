let energyConsumption = 0;
function Gadget (name, power) {
  this.name = name,
  this.power = power,
  this.isConnected = false;
}

Gadget.prototype.connect = function() {
  console.log(this.name + " is connected");
  this.isConnected = true;
}

Gadget.prototype.getEnergyConsumption = function() {
  return this.isConnected ? this.power : 0;
}

function MyGadget (brand, color) {
  this.brand = brand,
  this.color = color
}

const iron = new Gadget("iron", 1500);
const microwave = new Gadget("microwave", 1000);

iron.prototype = new MyGadget("Phillips", "white");
microwave.prototype = new MyGadget("Samsung", "silver");

iron.connect();
console.log(`Energy consumption is ${iron.getEnergyConsumption()}`);
microwave.connect();
console.log(`Energy consumption is ${microwave.getEnergyConsumption() + iron.getEnergyConsumption()}`);