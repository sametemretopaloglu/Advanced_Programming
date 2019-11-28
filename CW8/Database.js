
class Student {
    constructor (id, name, gpa, courses) 
{
        this.id = id;
        this.name = name;
        this.gpa = gpa;
  
    }
    toString () 
    {
        return this.id+'';
    }

}

class Database{
    constructor () 
{
        this.studentList=new Array();
        this.students = new Map()
        this.readSData()


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
    	  
    const std = new Student (id, name, gpa);
    this.students.set(std.id, std);
    this.studentList.push(std);
    }
      
	 
      
}



}





