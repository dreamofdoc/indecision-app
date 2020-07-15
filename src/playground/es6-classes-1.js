class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDesc() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDesc() {
        let desc = super.getDesc()
        if (this.hasMajor()) {
            desc += ` Their major is ${this.major}`
        }
        return desc
    }
}

class Traveler extends Person {
    constructor(name, homeLocation) {
        super(name)
        this.homeLocation = homeLocation 
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Student('Serg', 17, 'NPUA')
// console.log(me.getDesc())

const other = new Student()
// console.log(other.getDesc())

const trav = new Traveler('Serg', 'Yerevan')
console.log(trav.getGreeting())

const otherTrav = new Traveler()
console.log(otherTrav.getGreeting())