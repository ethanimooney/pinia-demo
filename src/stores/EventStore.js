import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: () => ({
    loginUser: "1550316",
    eventsList: [
      {
        eventId: "00001",
        eventType: "Recital Hearing",
        eventDate: "02/12/2023",
        eventTimes: ["10:00", "11:00", "12:00"],
      },
      {
        eventId: "00002",
        eventType: "Jury",
        eventDate: "04/17/2023",
        eventTimes: ["10:00", "10:05", "10:10", "10:15", "10:20"],
      },
    ],
  }),
  getters: {
    getEventForEventId: (state) => {
      return (eventId) => {
        return state.eventsList.find((event) => event.eventId === eventId);
      };
    },
  },
  actions: {
    addEvent(event) {
      this.eventsList.push(event);
    },
    removeEvent(eventId) {
      this.eventsList = this.eventsList.filter(
        (event) => event.eventId !== eventId
      );
    },
  },
});
