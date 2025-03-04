// lesson 20
// let age: number = 0;
// if (age) {
//   console.log("check oke");
// } else {
//   console.log("nono");
// }

// lesson 21

// let value: number = 30;

// switch (value) {
//   case 5: {
//     console.log("oke 5");
//     break;
//   }
//   case 10: {
//     console.log("oek 10");
//   }
//   case 20: {
//     console.log("oek 20");
//   }
//   default: {
//     console.log("nono");
//   }
// }

// // lesson 22
// function check(a: number, b: number): number {
//   return a + b;
// }
// console.log("check", check(12, 3));

// rest- lesson 31
// function rest(...numberr: number[]): number {
//   let total = 0;
//   numberr.forEach((number) => (total += number));
//   return total;
// }

// console.log(rest());
// console.log(rest(1, 4));
// console.log(rest(12, 4, 5));

// function multiply(n: number, ...m: number[]) {
//   debugger;
//   return m.map((item) => n * item);
// }

// console.log("checking:", multiply(12, 4, 5));

// overlaoding
// function addNew(a: number, b: number): number;
// function addNew(a: string, b: string): string;

// function addNew(a: any, b: any): any {
//   return a + b;
// }
// console.log("check:", addNew(1, 2), addNew("sy", "dv"));

// class
// class Person {
//   private ssn: string;
//   private names: string;
//   private ages: number;

//   constructor(ssn: string, names: string, ages: number) {
//     this.ssn = ssn;
//     this.names = names;
//     this.ages = ages;
//   }
//   get getSsn() {
//     return this.ssn;
//   }
//   set setNames(names: string) {
//     this.names = names;
//   }
// }
// const person = new Person("1", "a", 10);
// person.setNames = "sydv";
// console.log("check", person.getSsn);
// console.log(person);

// extends
// class Person3 {
//   constructor(private firstName: string, private lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get getFirstName(): string {
//     return this.firstName;
//   }

//   set setFirstName(firstName: string) {
//     this.firstName = firstName;
//   }

//   get getLastName(): string {
//     return this.lastName;
//   }

//   set setLastName(lastName: string) {
//     this.lastName = lastName;
//   }
// }

// class Employee1 extends Person3 {
//   private jobTitle: string;
//   constructor(firstName: string, lastName: string, jobTitle: string) {
//     super(firstName, lastName);
//     this.jobTitle = jobTitle;
//   }
// }
// let empl = new Employee1("sy", "dv", "develop");
// console.log(empl);

// console.log("check", empl.getFirstName);

// static

// class Circle {
//   static pi: number = 3.14;
//   public test: number = 69;
//   static caculateArea(radius: number): number {
//     return this.pi * radius * radius;
//   }
// }
// let t = new Circle();

// console.log("check", Circle.caculateArea(10));

// abstract class
abstract class Employee2 {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getSalary(): number;

  get getName(): string {
    return this.name;
  }
}

class Children1 extends Employee2 {
  private jobName: string;
  constructor(jobName: string, name: string) {
    super(name);
    this.jobName = jobName;
  }
  getSalary(): number {
    return 2;
  }
}
