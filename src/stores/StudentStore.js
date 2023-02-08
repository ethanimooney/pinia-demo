import { defineStore } from "pinia";

export const useStudentStore = defineStore("students", {
  state: () => {
    return {
      studentsList: [
        {
          studentId: 1550316,
          firstName: "Ethan",
          lastName: "Mooney",
          email: "ethan.mooney@eagles.oc.edu",
        },
        {
          studentId: 1547552,
          firstName: "Nathan",
          lastName: "Lalli",
          email: "nathan.lalli@eagles.oc.edu",
        },
      ],
    };
  },
  getters: {
    getStudentForStudentId: (state) => {
      return (studentId) => {
        return state.studentsList.find(
          (student) => student.studentId === studentId
        );
      };
    },
    getStudentsList: (state) => {
      return state.studentsList;
    },
  },
  actions: {
    addStudent(student) {
      this.studentsList.push(student);
    },
    removeStudent(studentId) {
      this.studentsList = this.studentsList.filter(
        (student) => student.studentId !== studentId
      );
    },
    computeStudentUsername(studentId) {
      return this.studentsList
        .find((student) => student.studentId === studentId)
        .email.split("@")[0];
    },
    findStudentForStudentId(studentId) {
      return this.studentsList.find(
        (student) => student.studentId === studentId
      );
    },
  },
});
