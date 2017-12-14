import {Dept,Address} from './Dept';
import Course from './Dept';
class Student{
    callMe():void{
        var dept:Dept = new Dept();
        dept.print();
        var course:Course = new Course();
        course.duration();
    }
}

var studentObject:Student = new Student();
studentObject.callMe();