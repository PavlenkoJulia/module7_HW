const obj = {
  breed: "Siberian husky",
  name: "Diva",
  age: 6
};
for (let key in obj) {
    console.log(key);
}
for (let value of Object.values(obj)) {
  console.log(value);
}