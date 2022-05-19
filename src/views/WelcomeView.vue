<template>
  <div class="welcome">
    <h2>Welcome to Secret Chat</h2>
    <span>
      Create a room and invite your friend. All messages will be deleted after
      both of you leave a room.
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WelcomeView',
});
</script>
