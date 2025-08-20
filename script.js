class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a positive number.");
        }
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person {
    constructor(name, age) {
        super(name, age);
    }

    teach() {
        console.log(`${this.name} is teaching.`);
    }
}

window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
