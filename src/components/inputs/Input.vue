<!-- Author: Dinh Vo-->
<template>
  <div class="input">
    <div class="input__container" :class="inputContainerModifier">
      <label class="input__placeholder" :class="inputPlaceholderModifier">{{label}}</label>
      <div class="input__wrapper">
        <input :type="type" :id="id" class="input__control"
               :placeholder="labelAnimation ? '' : placeholder"
               :disabled="disabled"
               :readonly="readOnly"
               :value="state.inputValue"
               :class="inputControlModifier"
               @input="handleInput"
               @focus="handleAnimationLabel(true)"
               @blur="handleAnimationLabel(state.inputValue.length!==0)"
        >
        <button class="input__clear-button" v-if="props.clearable" @click="handleClear">
          <span class="input__clear-icon">
            <x-circle/>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive} from "vue";
import XCircle from "@/icons/XCircle.vue";

const props = withDefaults(defineProps<{
  id: string,

  placeholder: string,

  disabled: boolean,

  readOnly: boolean,

  initialValue: string,

  label: string,

  underlined: boolean,

  clearable:boolean,

  labelAnimation: boolean,

  type: 'text' | 'password'
}>(), {
  id: 'abcxyz-1',
  placeholder: 'Author Dinh Vo',
  disabled: false,
  readOnly: false,
  initialValue: 'Author Dinh Vo',
  label: 'Label',
  underlined: false,
  clearable: false,
  labelAnimation: false,
  type: 'text'
});

const inputControlModifier=computed(()=>({
  [`${props.underlined? 'underlined' : ''}`]:true
}))

const inputContainerModifier=computed(()=>({
  [`${props.labelAnimation ? 'relative':''}`]:true
}))

const inputPlaceholderModifier=computed(()=>({
  [`${props.labelAnimation ? 'label-animation':''}`]:true,
  [`${props.labelAnimation && state.isAnimationLabel? 'label-animation-out': ''}`]:true
}))

//init state
const state=reactive({
  inputValue: props.initialValue,
  isAnimationLabel: false
})

function handleAnimationLabel(isAnimationLabel: boolean){
  state.isAnimationLabel=isAnimationLabel
}

function handleInput(event: Event){
  state.inputValue= (event.target as HTMLInputElement).value
}

function handleClear(){
  state.inputValue=""
}
</script>

<style scoped>
input:focus::placeholder {
  color: transparent;
}
.input__placeholder{
  @apply text-sm
}
.input__control{
  @apply bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none
}

.underlined{
  @apply bg-transparent bg-none border-b-2 border-colors-gray600 rounded-none
}

.input__clear-button{
  @apply w-4 absolute right-0 top-1/3
}

.input__wrapper{
  @apply relative flex
}

.label-animation{
  @apply absolute top-1/4 left-2 z-10 duration-300
}

.label-animation-out{
  @apply top-[-50%] left-0
}
</style>
