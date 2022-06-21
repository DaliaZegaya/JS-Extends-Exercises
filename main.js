//תרגיל 1
class Student {
    constructor (sName, sClass, sId) {
        this.sName= sName;
        this.sClass= sClass;
        this.sId= sId;
    }
    printToLog () {
        console.log(this.sName, this.sClass, this.sId);
    }
}
//תרגיל 2
const dalia= new Student ("dalia","5", 58965)
const batel= new Student ("batel", "4", 22545)

//תרגיל 3
class College extends Student {

}
//תרגיל 4 
const will= new College ("will", "3", 5545)
console.log(will);

//תרגיל 5
class HighSchool extends Student {
    constructor (sName, sClass, sId, age, email) {
        super (sName, sClass, sId)
        this.age= age;
        this.email= email;
    }
    printToLog () {
        super.printToLog()
        console.log("hello");
    }

}
const dan= new HighSchool ("dan", 2, 65656)
console.log(dan);
const dona= new HighSchool ("dona", "4", 5566, 15, "dona@gmail.com")
console.log(dona);

//תרגיל 9
class MidSchool extends Student {
}
const jaden= new MidSchool ("jaden", 4, 54545)
console.log(jaden);
//תרגיל 11
jaden.printToLog()



