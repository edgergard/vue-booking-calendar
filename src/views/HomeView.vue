<template>
  <main>
    <div
      class="mx-auto min-h-screen max-w-screen-2xl py-8 px-8 lg:px-4"
    >
      <BookingCalendar />
    </div>
  </main>
</template>

<script>
import { BookingCalendar } from '../components';

export default {
  name: 'HomeView',
  components: {
    BookingCalendar,
  }
}
</script>