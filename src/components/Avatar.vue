<template>
  <span onclick="onClick" class="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden" :class="classes">
      <span class="avatar-bg"></span>
        <img v-if="src" :src="src" alt="" />
        <span v-else>{{text}}</span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  classes: string
  /**
   * size of the avatar
   */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  /**
   * src image
   */
  src: string ,
  /**
   * text image
   */
  text: string,
}>(), { });
const size={
  'xs': 'w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]',
  'sm': 'w-7 h-7 min-w-[1.75rem] min-h-[1.75rem]',
  'md': 'w-10 h-10 min-w-[2.5rem] min-h-[2.5rem]',
  'lg': 'w-16 h-16 min-w-[4rem] min-h-[4rem]',
  'xl': 'w-20 h-20 min-w-[5rem] min-h-[5rem]',
}
const classes = computed(() => ({
  [`${size[props.size]}`]: props.size,
  [`${props.classes}`]:true,

}));
const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();
const onClick = () => {
  emit("click", 1)
};
</script>

<style scoped>

</style>
