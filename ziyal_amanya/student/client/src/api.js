import axios from 'axios';
//import students from "../../server/models/students";
const studentsUrl = '/api/students';
const studentUrl = '/api/student';

export default class API{

    //Fetch students
    static async getAllStudents() {
        const res = await axios.get(studentsUrl);
        return res.data;
    }
    //Fetch single student
    static async getStudentByID(id) {
        const res = await axios.get(`${studentUrl}/${id}`);
        return res.data;
    }
    //Register Student
    static async addStudent(student) {
        const res = await axios.post(studentUrl, student);
        return res.data;
    }
    //In case I get to update student
    static async updateStudent(id, student) {
        const res = await axios.patch(`${studentUrl}/${id}`, student);
        return res.data;
    }
    //Delete student record
    static async deleteStudent(id) {
        const res = await axios.delete(`${studentUrl}/${id}`);
        return res.data;
    }
}