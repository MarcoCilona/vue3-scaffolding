<template>
  <el-button>Test</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * Base button component
 *
 * @displayName BaseButton
 */
export default defineComponent({
  name: 'BaseButton',
  props: {
    /**
     * Props used to define the button action
     */
    title: { default: 'Test', type: String }
  }
});
</script>
