<template>
  <div>
    <div class="flex gap-x-4 mb-8">
      <button 
        class="text-[#FFFF] bg-[#1f1f20] rounded-xl w-12 h-12 text-2xl px-2 py-1"
        @click="moveWeek(-1)"
      >
        {{ '<' }}
      </button>
      <button
        class="text-[#FFFF] bg-[#1f1f20] rounded-xl w-12 h-12 text-2xl px-2 py-1"
        @click="moveWeek(1)"
      >
        {{ '>' }}
      </button>
      <button 
        class="text-[#FFFF] bg-[#1f1f20] rounded-xl h-12 text-2xl px-2 py-1" 
        @click="moveToToday"
      >
        Today
      </button>
    </div>

    <ul class="flex">
      <li
      v-for="date in dates"
      :key="date"
      class="border px-4 py-2 font-bold"
    >
      {{ date }}
    </li>
    </ul>
  </div>
</template>

<script>
import { getDates } from '../utils/functions';

export default {
  name: 'BookingCalendar',
  data() {
    return {
      offset: 0,
      dates: getDates(0),
    };
  },
  methods: {
    moveWeek(step) {
      this.offset += step;
      this.dates = getDates(this.offset);
    },
    moveToToday() {
      this.offset = 0;
      this.dates = getDates(0);
    }
  }
};
</script>