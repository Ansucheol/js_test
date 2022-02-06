
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
/*
const btnEL = document.querySelector('#btn_test');

btnEL.addEventListener('click',function(){
    alert('테스트 시작')
})



const result='Hello world!'.indexOf('Heropy')
console.log(result)*/

/*2월 5일*/

//const str ='0123'
//console.log(str.length)

//const str ='Hello world!'
//console.log(str.indexOf('world'))
//----------------------------------------------------
// .length

//const numbers = [1, 2, 3, 4]
//const fruits = ['Apple', 'Banana', 'Cherry']

//console.log(numbers.length)
//console.log(fruits.length)
//console.log([1, 2].length)

//console.log([].length)
//-------------------------------------------------------------
// .concat() 원본의 배열을 수정되지 않고 새로운 배열을 만들어 병합하는것

//const numbers = [1, 2, 3, 4]
//const fruits = ['Apple', 'Banana', 'Cherry']

//console.log(numbers.concat(fruits))
//console.log(numbers)
//console.log(fruits)
//----------------------------------------------------------

// .forEach() :배열 데이터의 아이템 갯수만큼 특정한 콜백함수를 반복적으로 실행하는 메서드
//const numbers = [1, 2, 3, 4]
//const fruits = ['Apple', 'Banana', 'Cherry']

//메소드의 인수로 사용하는 함수를 "콜백함수라 지칭"
//fruits.forEach(function(element, index,array){
  //  console.log(element,index,array)
//})

//-----------------------------------------------------------------

// .map `(백틱) - 보관을 이용하는 문자 데이터
//const numbers = [1, 2, 3, 4]
//const fruits = ['Apple', 'Banana', 'Cherry']

//forEach 는 콜백함수로 아이템의 갯수만큼 콜백만큼 반복하는데 따로 반환
//값은 없다 == undefined
//const a = fruits.forEach(function(fruit,index){
//    console.log(`${fruit}-${index}`)
//})
//console.log(a)

//map 은 forEach와 동일한데 return 값으로 반환 할 수도 있고 객체데이터로
//도 반환이 가능함
//const b = fruits.map(function(fruit,index){
//    return `${fruit}-${index}`
//})
//console.log(b)
//----------------------------------------------------------------

// .filter()
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number =>{
    return number <3
})
console.log(a)

const b =numbers.filter(number =>{
    return number < 3
})
console.log(b)*/
//------------------------------------------------------------------

// .find() .findIndex()
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a =fruits.find(fruit =>/^B/.test(fruit))
console.log(a)

const b =fruits.findIndex(fruit =>/^C/.test(fruit))
console.log(b)

*/
//-------------------------------------------------------------------

// .includes() 배열데이터에 인수로 사용된게 포함되어 있는가?
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.includes(3)
console.log(a)

const b = fruits.includes('HEROPY')
console.log(b)*/

//------------------------------------------------------------------
/*
// .push() .unshift()
// 원본 수정됨 주의!!!!

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5) //배열데이터 맨뒤에 item 삽입
console.log(numbers)

numbers.unshift(0) // 배열데이터 멘 앞에 item 삽입
console.log(numbers)
*/
//--------------------------------------------------------------

// .reverse()
// 원본 수정됨 주의!!
/*
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.reverse() //item 뒤집어서 출력
fruits.reverse()

console.log(numbers)
console.log(fruits)*/

//----------------------------------------------------------

// .splice() - 제로베이스드 2번째 (3에서 아이템 1개를 지워라)
// 3번째 인수로 넣으면 그자리에 item 을 끼워넣어라라는 의미로도 사용가능
// 원본 수정됨 주의!
/*const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana','xxx', 'Cherry']

numbers.splice(2,1)

console.log(numbers)

fruits.splice(2,1,'Orange')
console.log(fruits)*/
//-----------------------------------------------------------
/*
//객체 데이터
const userAge ={
    // key: value
    name: 'Heropy',
    age: 85
}

const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
}

const target = Object.assign(userAge,userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = {k:123}
const b = {k:123}
console.log(a===b)*/

//-------------------------------------------------------------
/*
const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age','email]

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)
*/
//---------------------------------------------------------------
/*
// 구조 분해 할당(Destructuring assignment)
// 비구조화 할당

const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}

const { name,age,email,address} =user
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana','Cherry']
const [a,b,c,d] =fruits
console.log(a,b,c,d)
*/

//--------------------------------------------------------
/*
// 전개 연산자 (Spread)

const fruit = ['Apple', 'Banana', 'Cherry']
console.log(fruit)
console.log(...fruit)
//console.log('Apple', 'Banana','Cherry)

function toObject(a,b,c){
    return {
        a: a,
        b: b,
        c: c
    }

}
console.log(toObject(...fruit))
//--------------------------------------------------------------------- 2/6일 START
*/
/*
//데이터 불변성(Immutablicty)
//원시 데이터 : String, Number, Boolean, undefined, null
//참조형 데이터 : Object, Array, Function

let a =1
let b =4
console.log(a,b, a===b)
b=a
console.log(a,b, a===b)
a =7
console.log(a,b, a===b)
let c =1
console.log(b,c, b===c)
*/

// 얕은복사(Shallow copy) , 깊은복사( Deep copy)
/*
const user = {
    name: "Heropy",
    age: 85,
    emails: ['thesecon@gmail.com']
}

//데이터 복사하는법
//assign 메서드 : Object.assign({},user)
//전개 데이터 : const copyUsser = {...user}
//대상객체 , 출처객체

/*
const copyUser = _.cloneDeep(user) //깊은복사
console.log(copyUser === user)



user.age =22
console.log('user',user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('neo@zillinks.com') // 제일 뒷 쪽에 밀어넣는다
console.log(user.emails === copyUser.emails)

console.log('user', user)
console.log('copyUSer',copyUser)

*/
//-----------------------------------------------------------------------


//import
/*
import _ from 'lodash' //From `node_modules` !
import checkType from './getType' //getType.js
// import {random ,user as heropy}from'./getRandom' //getRamdom.js
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1 , 2, 3]))
// console.log(random(), random())
console.log(R)
*/
//--------------------------------------------------------------------------

//uniq
//lodash!!!
/*
import _ from 'lodash'

const usersA =[
    { userId: 1, name: 'Heropy'},
    { userId: 2, name: 'Neo'}
]

const usersB =[
    { userId: 1, name: 'Heropy'},
    { userId: 3, name: 'Amy'}
]


const usersC = usersA.concat(usersB)//concat 두개의 배열 데이터를 하나로 합침
console.log('concat', usersC)
console.log('uniqBy',_.uniqBy(usersC,'userId'))//uniqBy 중복되는거 제거(배열 데이터 하나일때 사용)

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD) //unionBy( 배열데이터 여러개일때 사용)
*/
//-----------------------------------------------------------------------------
/*
//json : javScript Object Notation (자바스크립트 데이터를 표현하는 포맷)
//비동기 브라우저/서버 통신(AJAX)
// 인터넷에서 자료를 주고/ 받을때
//JSON의 공식 인터넷 미디어 타입은 application/json이며, JSON의 파일 확장자는 .json이다.
//json은 하나의 "문자데이터이다"



//자바스크립트의 객체 표기법
import myData from './myData.json'

console.log(myData)

const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}

console.log('user',user)

const str = JSON.stringify(user) //JSON(전역객체) stringify (문자데이터화)
console.log('str' ,str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
*/
//----------------------------------------------------------

//stroge(데이터 저장소)
//localStorage의 데이터는 만료되지 않고 sessionStorage의 데이터는 페이지 세션이 끝날 때, 
//즉 페이지를 닫을 때 사라지는 점이 다릅니다.

const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}

const str =localStorage.getItem('user')
const obj= JSON.parse(str)
obj.age =22
console.log(obj)

localStorage.setItem('user',JSON.stringify(obj))
