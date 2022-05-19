<template>
  <div class="welcome">
    <div>
      <h2>Welcome to Secret Chat</h2>
      <span>
        Create a room and invite your friend. All messages will be deleted after
        both of you leave a room.
      </span>
    </div>
    <router-link :to="`/room/${roomId}`" class="welcome--enter-room">
      <a-button type="primary"> Enter room </a-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { nanoid } from 'nanoid';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WelcomeView',
  setup() {
    return {
      roomId: nanoid(),
    };
  },
});
</script>

<style lang="scss" scoped>
.welcome {
  &--enter-room {
    display: block;
    margin-top: 32px;
  }
}
</style>
