import { defineStore } from "pinia";

export const useStudentStore = defineStore("students", {
  state: () => ({
    studentsList: [
      {
        studentId: "1550316",
        firstName: "Ethan",
        lastName: "Mooney",
        email: "ethan.mooney@eagles.oc.edu",
      },
      {
        studentId: "1547552",
        firstName: "Nathan",
        lastName: "Lalli",
        email: "nathan.lalli@eagles.oc.edu",
      },
    ],
  }),
  getters: {
    getStudentForStudentId: (state) => {
      return (studentId) => {
        return state.studentsList.find(
          (student) => student.studentId === studentId
        );
      };
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
      this.studentsList
        .find((student) => student.studentId === studentId)
        .email.split("@")[0];
    },
  },
});
