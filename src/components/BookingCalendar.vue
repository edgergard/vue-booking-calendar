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

    <div>
      <ul class="flex pl-64">
        <li
          v-for="date in dates"
          :key="date"
          class="w-32 border px-4 py-2 font-bold text-center"
        >
          {{ date }}
        </li>
      </ul>

      <ul class="text-[#85b771] text-2xl font-bold">
        <li
          v-for="room in rooms"
          :key="room"
          class="flex items-center"
        >
          <p class="border h-24 w-64 flex justify-center items-center text-center">{{ room }}</p>
          
          <ul class="flex gap-x-1">
            <li
              v-for="booking in weeklyBookings.filter(booking => booking.roomDetails.name === room)"
              :key="booking.id"
              :style="{ width: booking.duration * 64 + 'px' }"
              class="flex items-center justify-center bg-[#5191fa] text-[#000] rounded-xl h-16 text-xl"
            >
              {{ booking.name }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getDates, getWeeklyBookings } from '../utils/functions';
import data from '../data/bookings';

const rooms = [
  'Premier Suite',
  'Superior Room',
  'Grand Executive',
  'Suite Luxury',
  'Suite Classic Room',
  'Penthouse Suite',
  'Boutique Room',
  'Serene Retreat Royal Suite',
  'Elegant Suite',
  'Signature Room',
  'Presidential Suite',
];

export default {
  name: 'BookingCalendar',
  data() {
    return {
      offset: 0,
      dates: getDates(0),
      rooms: rooms,
      weeklyBookings: [],
    };
  },
  methods: {
    moveWeek(step) {
      this.offset += step;
      this.dates = getDates(this.offset);
      this.weeklyBookings = getWeeklyBookings(data, this.dates);
      console.log(this.weeklyBookings);
    },
    moveToToday() {
      this.offset = 0;
      this.dates = getDates(0);
      this.weeklyBookings = getWeeklyBookings(data, this.dates);
      console.log(this.weeklyBookings);
    }
  },
  mounted() {
    this.weeklyBookings = getWeeklyBookings(data, this.dates);
    console.log(this.weeklyBookings);
  }
};
</script>