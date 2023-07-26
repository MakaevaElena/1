// Get Coding :)
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, status);
//     //     if(typeof master === 'string'){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.master = master;
//     this.legs = 4;
//     this.species = 'dog';
//     //     }
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }

// const example = new Dog('Vasya', 10, 'Happy', 'Mama');
// const res = example.greetMaster();
// console.log(res);

// class Cube {
//   constructor(length) {
//     this.length = length;
//   }

//   get surfaceArea() {
//     return this.length * 4;
//   }

//   get volume() {
//     return this.length * this.length;
//   }
// }

// const example = new Cube(1);
// const res = Cube.length;
// console.log(res);

class File {
  #lineCounter = 0;
  #charCounter = 0;
  #num = 5;
  num = 6;

  constructor(fullName, contents) {
    this.fullName = fullName;
    this.contents = contents;
    this.filename = fullName.split('.')[0];
    this.extension = fullName.split('.')[1];
  }

  getContents() {
    return this.contents;
  }

  write(str) {
    this.contents += `\n${str}`;
  }
  gets() {
    return this.contents.split('\n')[this.#lineCounter++];
  }
  getc() {
    return this.contents.split('')[this.#charCounter++];
  }

  number() {
    return this.#num;
  }
}

const example = new File('example.txt', 'An example file');
const res = example.number();
console.log(res);
