class Course {
    constructor (id, time, date, classList) {
        this.id= id;
        this.time = time;
        this.date = date;
        this.classList = classList;
    }
    toString () {
        return this.id+'';
    }
}
class Student {
    constructor (id, name, gpa, courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString () {
        return this.id+'';
    }
}

class Database{
    constructor () {
        this.courses = new Map()
        this.students = new Map()
        this.readSData()
        this.readCData()

           }


readSData() {
var url = "https://maeyler.github.io/JS/data/Students.txt"
        fetch(url)
        .then(res => res.text())
        .then(res => [
            this.addStudents(res)
        ])
    }

addStudents(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";

    for (let line of a) {
        let b = line.split("\t");
    	   let id = b[0], name = b[1], gpa = b[2];
    	   let list = [];
    	   for (let i=3; i<b.length; i++){ 
       	list.push(b[i]);
        }
    const std = new Student (id, name, gpa, list);
    this.students.set(std.id, std);
    }
      
	 console.log("size:  "+ this.students.size)
      
}


readCData() {
     var url = "https://maeyler.github.io/JS/data/Courses.txt"
        fetch(url)
        .then(res => res.text()) 
        .then(res => [
            this.addCourses(res)
        ])
}

addCourses(txt) {
    let msg = txt.length+" chars, ";
    let a = txt.split("\n");
    msg += a.length+" lines, ";
    for (let line of a) {
         let b = line.split("\t");
         let id = b[0], time = b[1], date = b[2];
         let list = [];
         for (let i=3; i<b.length; i++){
              list.push(b[i]);
              
         }
    const course = new Course (id, time, date, list)

this.courses.set(course.id, course)

    }
    console.log("size:  "+ this.courses.size)
}



randomStd() {
    const keys = Array.from(this.students.keys())
    let key = keys[Math.trunc(keys.length * Math.random())];
    let std = this.students.get(key);
    console.log("Random: "+std.name, std.id);
    return ("Random Ogrenci: "+std.name +" "+ std.id);
}

randomCourse(){
const keys = Array.from(this.courses.keys())
    let key = keys[Math.trunc(keys.length * Math.random())];
    let c = this.courses.get(key);
    console.log("Random Ders: "+c.id );
    return ("Random Ders: "+c.id);


}
 


findBest() {
    const keys = Array.from(this.students.keys())
    let b = this.students.get(keys[0]);
    for (let std of this.students.values()) 
        if (std.gpa > b.gpa) b = std;
    console.log("Best: "+b.name, b.id);
    return ("Best: "+b.id+" "+ b.name+" "+ b.gpa);
}



findGPA(gpa) {
    let b = 0;
    for (let std of this.students.values()) 
        if (std.gpa > gpa) b =b+1;
    console.log("Number of students above a given GPA: "+b);
    return ("GPA>"+gpa+" olan ogrenci sayisi: "+b);
}

findGPA2(gpa) {
    let b = 0;
    for (let std of this.students.values()) 
        if (std.gpa < gpa) b =b+1;
    console.log("Number of students above a given GPA: "+b);
    return ("GPA<"+gpa+" olan ogrenci sayisi: "+b);
}


findCourses(id) {
    let std=this.students.get(id);
    console.log("id: "+std.name);
    console.log("courses: "+std.courses);

            return ("Courses: "+std.courses);

}


 findSinav(id) {
    let dersler;
    
    let std=this.students.get(id);
    let prog=std.id+" "+std.name+" sinav programi: ";
			dersler=std.courses;
			
for (let ders of dersler){
        let c=this.courses.get(ders)
    		
			prog=prog+"\n"+c.id+" "+ c.time+ " "+ c.date+ " "+ c.classList;


}
        console.log(prog)

        return (prog);


}




findStudents(id) {
    let dersler;
    let ogr=id +" dersini alan ogrenciler: ";
    for (let std of this.students.values()) {
    		for (let d of std.courses){ 
			if(d==id){
				ogr=ogr+"\n"+std.id+"  "+std.name;
                 }
           }
    }
console.log(ogr)
return (ogr);

}

findClassList(id){

let ders=this.courses.get(id);
    let r=id +" dersinin sinav yerleri: ";
    for (let c of ders.classList) {
    		r=r+"\n"+c;
    }
    return r;
}


findCourseList(id){
 let list=id+ "  sinifinda sinavi olan dersler listesi";
    
   
    for (let c of this.courses.values()) {
           
    		for (let r of c.classList){ 
			if(r==id){
				list=list+"\n"+c.id;
                 }
           }
    } 
      console.log(list)
      return list;
}


findCourseListCount(id){

 let count=0;
    
   
    for (let c of this.courses.values()) {
           
    		for (let r of c.classList){ 
			if(r==id){
				count=count+1;
                 }
           }
    } 
      console.log(count)
      return "Derslerin sayisi: "+ count;


}




}