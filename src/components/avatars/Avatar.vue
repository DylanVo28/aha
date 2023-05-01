<template>
  <span onclick="onClick" class="inline-block h-12 w-12  ring-2 ring-white overflow-hidden relative " :class="classes">
      <span class=" object-cover  bg-colors-gray600 w-full h-full absolute z-0 "></span>
        <img v-if="src" :src="src" alt="" class="object-cover w-full h-full absolute " :class="styledImg"/>
        <span v-else class="z-10 absolute left w-full h-full flex justify-center align-center items-center" :class="color">{{text}}</span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import {NormalColors, NormalSizes} from "@/constants/constants";

const props = withDefaults(defineProps<{
  classes: string
  /**
   * size of the avatar
   */
  size: NormalSizes,
  /**
   * src image
   */
  src: string ,
  /**
   * text image
   */
  text: string,
  /**
   * color background
   */
  color: NormalColors,

  squared: boolean,

  bordered: boolean,

  zoomed: boolean
}>(), { });
const size={
  'xs': 'w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]',
  'sm': 'w-7 h-7 min-w-[1.75rem] min-h-[1.75rem]',
  'md': 'w-10 h-10 min-w-[2.5rem] min-h-[2.5rem]',
  'lg': 'w-16 h-16 min-w-[4rem] min-h-[4rem]',
  'xl': 'w-20 h-20 min-w-[5rem] min-h-[5rem]',
}
const fontSize={
  'xs': 'text-xs',
  'sm': 'text-sm',
  'md': 'text-md',
  'lg': 'text-lg',
  'xl': 'text-xl',
}

const bgColor={
  'default': 'bg-colors-gray600',
  'primary': 'bg-colors-blue600',
  'secondary': 'bg-colors-purple600',
  'success': 'bg-colors-green600',
  'warning': 'bg-colors-yellow600',
  'error': 'bg-colors-red600',
  'gradient': 'bg-gradient-to-r from-sky-500 to-indigo-500'
}

const borderColor={
  'default': 'border-colors-gray600',
  'primary': 'border-colors-blue600',
  'secondary': 'border-colors-purple600',
  'success': 'border-colors-green600',
  'warning': 'border-colors-yellow600',
  'error': 'border-colors-red600',
  'gradient': 'bg-gradient-to-r from-sky-500 to-indigo-500'
}

const color=computed(()=>({
  [`${bgColor[props.color]} text-white`]:true
}))


const classes = computed(() => ({
  //custom size avatar
  [`${size[props.size]}`]: props.size,
  //custom classes
  [`${props.classes}`]:true,
  //custom font size
  [`${fontSize[props.size]}`]:true,

  [`${props.squared ? 'rounded-md': 'rounded-full'}`]:true,

  [`${props.bordered ? `${borderColor[props.color]} border-2 border-solid `: ''}`]: true
}));

const styledImg=computed(()=>({
  [`${props.bordered ?`${props.squared ? '':'rounded-full'}  border border-solid border-white`: ''}`]:true,
  [`${props.zoomed ? 'hover:scale-125 ease-in-out duration-300':''}`]:true
}))

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();
const onClick = () => {
  emit("click", 1)
};
</script>

<style scoped>

</style>
