<!--Author: Dinh Vo-->
<template>
  <button
    class="button"
    type="button" :class="{
      'button--disabled':disabled,
      [`bg-${color}`]:color && !bordered,
      [`shadow-${color}`]:shadow,
      'bordered':bordered,
      [`border-${color}`]:color && bordered,
    }"
    :disabled="disabled"
    @click="onClick" >
    <span

      class="button__text"
      :class="{
        [`text-${color}`]: color && bordered
      }"><slot>Default</slot></span>
  </button>
</template>

<script lang="ts" setup>
import './Button.sass'
import '../../classes/Background.sass'
import '../../classes/Shadow.sass'
import '../../classes/Border.sass'
import '../../classes/Text.sass'
import { computed } from 'vue';
import {NormalColors} from "@/constants/constants";

const props = withDefaults(defineProps<{
  /**
   * primary or secondary button
   */
  primary?: boolean,
  /**
   * size of the button
   */
  size?: 'small' | 'medium' | 'large',

  disabled?: boolean,

  color?: NormalColors,

  shadow?: boolean,

  bordered?: boolean,


}>(), { primary: false });

const emit = defineEmits<{
  (e: 'click', id: number): void;
}>();



const onClick = () => {
  emit("click", 1)
};

</script>
