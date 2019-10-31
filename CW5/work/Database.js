class Student {
	constructor(id,name,gpa,courses=[]) 
    {
    	this.id=id;
	    this.name=name;
	    this.gpa=gpa;
	    this.courses=courses;
  	}
	toString()
    {
	    return this.name;
	}
}
class Point 
{
	constructor(x,y) 
    {
    	this.x=x;
	    this.y=y;
  	}
	toString()
    {
		return "( "+this.x+" , "+this.y+" )";
	}
}
class Point3D extends Point {
	constructor(x,y,z) 
    {
	    super(x,y);
    	this.z=z;
  	}
	    toString()
        {
	    return "( "+this.x+" , "+this.y+" , "+this.z+" )";
	    }
}



class Course 
{
  constructor(name,time,date,rooms=[]) 
{
    this.name=name;
	this.time=time;
	this.date=date;
	this.rooms=rooms;

}
	toString()
    {
	return this.name;
	}
}
class CW5 extends Menu{
	constructor() {
    		super();
		this.Course=new Course("BLM101","12.00","31.10.2019",["BLM104,BLM103"]);
		this.Student=new Student("1421221027","Fatih Mehmet Ergin","1,92",["BLM107","BLM108"]);
		this.Point=new Point(58,34);
		this.Point3D=new Point3D(12,24,36);
  	}
}


