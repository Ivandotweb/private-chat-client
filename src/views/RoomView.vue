<template>
  <div class="room">Your room id is {{ roomId }}</div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const route = useRoute();
    const roomId = route.params.id;

    return {
      roomId,
    };
  },
});
</script>
