//일반적인 직업 정보
class Employee {
  constructor(
    private _empName: string,
    private _age: number,
    private _empJob: string
  ) {}

  get empName(): string {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }
  printEmp = (): void => {
    console.log(
      `${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`
    );
  };
}

let emp = new Employee("Kim", 20, "Developer");
emp.printEmp();
