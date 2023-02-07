<template>
  <div>Student name: {{ eventsStore.getEventForEventId("1550316") }}</div>
</template>

<script>
  import { useStudentStore } from "@/stores/StudentStore";
  import { useEventStore } from "@/stores/EventStore";

  import { mapStores } from "pinia";

  export default {
    name: "HomeComponent",
    props: {
      studentStore: mapStores(useStudentStore()),
      eventsStore: mapStores(useEventStore()),
    },
    computed: {},
  };
</script>
