class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`my name is ${this.name} and im  ${this.age} years old`);
  }
}
export default Person;
