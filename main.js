
//this
//일반(Normal) 함수는 호출 위체에서 따라 ths 정의!
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의함!

//******************************* */

//ES6 Classes
/*function User(first,last){
    this.firstName = first
    this.lastName =last
}
User.prototype.getFullName =function(){
    return `${this.firstName} ${this.lastName}`
}*/

/*const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())*/
/********************************************상 속 *****************/
/*
class Vehicle {
    constructor(name,wheel) {
        this.name =name
        this.wheel =wheel
    }
}
const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)


class Bicycle extends Vehicle {
    constructor(name,wheel) {
        super(name,wheel)
    }
}
const myBicycle = new Bicycle('삼천리',2)
const daughtersBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(daughtersBicycle)


class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name,wheel)
        this.license =license
    }
}
const myCar = new Car('벤츠',4, true)
const daughtersCar = new Car('포르쉐',4,false)

console.log(myCar)
console.log(daughtersCar)
*/


