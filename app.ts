let stdId: number = 1111;
let stdName: string = "Shin";
let age: number = 20;
let gender: string = "male";
let course: string = "TypeScript";
let completed: boolean = false;

enum GentderType {
  Male = "male",
  Female = "female",
  GenderNeutral = "neutral",
}

interface Student {
  stdId: number;
  stdName?: string;
  age?: number;
  gender?: "male" | "female";
  course?: string;
  completed?: boolean;
  // setName(name: string): void;
  setName?: (name: string) => void;
  getName?: () => string;
}

class MyStudent implements Student {
  stdId = 91011;
  stdName = "abc";
  age = 25;
  gender: "male";
  course = "TypeScript";
  completed = true;

  setName(name: string): void {
    this.stdName = name;
    console.log("이름 설정 : " + this.stdName);
  }
  getName() {
    return this.stdName;
  }
}

let student = new MyStudent();
student.setName("Kim");

function getInfo(id: number): Student {
  return {
    stdId: id,
    stdName: "Shin",
    age: 20,
    gender: "male",
    course: "TypeScript",
    completed: true,
  };
}

console.log(getInfo(1234));

let std: Student = {
  stdId: 91011,
  stdName: "park",
  age: 30,
  gender: "male",
  course: "node.js",
  completed: true,
};

function setInfo(student: Student): void {
  console.log(student);
}

setInfo(std);

// let numbers: number[] = [1, 2, 3, 4, 5];

// let fruits: string[] = ["apple", "banana", "orange"];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// let mixedArray: (number | string)[] = [1, "two", 3, "four"];
// for (let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }

// let infer = [1, 2, 3];
// for (let i = 0; i < infer.length; i++) {
//   console.log(infer[i]);
// }

// let readOnlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// //튜플 : 타입의 순사가 정해져 있다.
// let greeting: [number, string, boolean] = [1, "hello", true];

//Spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let conmbinedArray = [...firstArray, ...secondArray];

for (let i = 0; i < conmbinedArray.length; i++) {
  console.log(conmbinedArray[i]);
}
