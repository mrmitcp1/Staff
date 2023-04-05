class Staff {
   public name : string;
   public email : string;
   public age : number;
    constructor(name : string, email : string, age : number) {
        this.name = name;
        this.email= email;
        this.age = age;
    }
    getName(){
        return this.name
    }
    setName(name : string){
        this.name = name
    }
    getEmail(){
        return this.email
    }
    setEmail( email : string){
        this.email = email
    }
    getAge (){
        return  this.age
    }
    setAge(age:number){
        this.age = age
    }
}
let staff = new Staff('viet','viet@gmail.com',30)
console.log(staff.age)
staff.setName('mun')
console.log(staff.name)