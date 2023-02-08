<template>
  <div>
    <strong> Actions Test: computeStudentUsername(1550316): </strong>
    <br />
    {{ studentsStore.computeStudentUsername(1550316) }}
    <br />
    <br />
    <strong> Test: getStudentsList: </strong>
    <div>{{ studentsStore.getStudentsList }}</div>
    <br />
    <br />
    <strong> with Parameter Test: getStudentForStudentId(1550316): </strong>
    <div>{{ studentsStore.getStudentForStudentId(1550316) }}</div>
  </div>
</template>

<script>
  import { useStudentStore } from "@/stores/StudentStore";
  import { useEventStore } from "@/stores/EventStore";

  import { mapStores } from "pinia";

  export default {
    name: "HomeComponent",
    computed: {
      ...mapStores(useStudentStore, useEventStore),
    },
  };
</script>
