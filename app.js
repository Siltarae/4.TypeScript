var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = 1111;
var stdName = "Shin";
var age = 20;
var gender = "male";
var course = "TypeScript";
var completed = false;
var GentderType;
(function (GentderType) {
    GentderType["Male"] = "male";
    GentderType["Female"] = "female";
    GentderType["GenderNeutral"] = "neutral";
})(GentderType || (GentderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "abc";
        this.age = 25;
        this.course = "TypeScript";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    MyStudent.prototype.getName = function () {
        return this.stdName;
    };
    return MyStudent;
}());
var student = new MyStudent();
student.setName("Kim");
function getInfo(id) {
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
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: "male",
    course: "node.js",
    completed: true,
};
function setInfo(student) {
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
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var conmbinedArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < conmbinedArray.length; i++) {
    console.log(conmbinedArray[i]);
}
