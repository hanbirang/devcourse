// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드 

class Employee {
    empName : string;
    age : number;
    empJob : string;

    constructor(empName : string, age? : number, empJob? : string) {
        this.empName = empName;
        this.age = age;
        this.empJob = empJob;
    }

    printEmp = () : void => {
        console.log(`${this.empName}의 나이는 ${this.age}이고, 직업은 ${this.empJob}입니다.`);
    }
}

let employee1 = new Employee('lim', 21, 'developer');
employee1.printEmp();
