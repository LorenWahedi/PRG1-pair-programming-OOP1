class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
    
  }

  class AdaStudent extends Person {
  
    _company;
    _pathway;
    _yearStarted; 

    constructor (name, dateOfBirth, placeOfBirth, company, pathway) {

    super(name, dateOfBirth, placeOfBirth);
    this._company = company;
    this._pathway = pathway;
    this._yearStarted = 2024;
    }
  
    get company() {
      return this.company;
    }

    set company(company) {
      this._company = company; 
    }

    get pathway() {
      return this.pathway;
    }

    set pathway(pathway) {
      this._pathway = pathway; 
    }

    get yearStarted() {
      return this.yearStarted;
    }

    talk() {
      return `Hi my name is ${this._name}. I work for ${this._company}, I am on the ${this._pathway} and I started in ${this._yearStarted}.`;
    }
}

class Cohort {

  _cohortCode;
    
    constructor(cohortCode){
  
      this._cohortCode = cohortCode;
      this.cohort = [];
  
    }

    add(student) {
      this.cohort.push(student)
      return this.cohort.length;
    }
    studentList() {
      for (let i = 0; i < this.cohort.length; i++) {
        console.log(this.cohort[i].name);
      }
    }
    
}
  
  
  

  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  // const loren = new AdaStudent("Loren Wahedi", "01/01/2000", "Liverpool", "Bank of America", "Data Analyst");

  const april24 = new Cohort("24-04-LDN-MCR");
  april24.add(new AdaStudent("Loren Wahedi", "01/01/2000", "Liverpool", "Bank of America", "Data Analyst"));
  april24.add(new AdaStudent("Woody", "20/4/2020", "Toy Story", "BoA", "Andys Toy"));

  console.log(april24);
  
  
  // console.log(steve);
  // console.log(aqil);
  // console.log(steve.talk());
  // console.log(aqil.talk());
  // console.log(steve.name);
  // console.log(loren.talk());