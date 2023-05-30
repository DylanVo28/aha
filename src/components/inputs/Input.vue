<!-- Author: Dinh Vo-->
<template>
  <div class="input">
    <div class="input__container" :class="{ relative: shouldAnimateLabel }">
      <label class="input__placeholder"
             :class="{ 'label-animation': shouldAnimateLabel,
             'label-animation-out': shouldAnimateLabel && state.animateLabel,
              [`text-${color}`] : true
              }">{{label}}</label>
      <div class="input__wrapper">
        <input :type="type" :id="id" class="input__control"
               :placeholder="shouldAnimateLabel ? '' : placeholder"
               :disabled="disabled"
               :readonly="readOnly"
               :value="state.inputValue"
               :class="{
                 underlined: underlined,
                 'bordered': bordered,
                 [`border-${color}`]: true,
                 [`bg-${status}`]:true,
                 [`text-${status}`] : true
               }"
               @input="handleInput"
               @focus="handleAnimationLabel(true)"
               @blur="handleAnimationLabel(state.inputValue.length!==0)"
        >
          <button class="input__clear-button" v-if="clearable" @click="handleClear">
          <span class="input__clear-icon">
            <x-circle/>
          </span>
          </button>

      </div>
      <div class="input__helper-text" v-if="helperText">
        <p class="text-xs pl-2"
           :class="{[`text-${helperColor}`]: true}">{{helperText}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive} from "vue";
import XCircle from "@/icons/XCircle.vue";
import {NormalColors} from "@/constants/constants";
import {debounce} from "lodash"
import AhaButton from "@/components/buttons/AhaButton.vue";
const props = withDefaults(defineProps<{
  id: string,

  placeholder: string,

  disabled: boolean,

  readOnly: boolean,

  initialValue: string,

  label: string,

  underlined: boolean,

  clearable:boolean,

  shouldAnimateLabel: boolean,

  type: 'text' | 'password',

  bordered: boolean,

  color: NormalColors,

  status: NormalColors,

  helperText: string,

  helperColor: NormalColors,

  onChange: (value: string)=>void,

  onFocus: (value: string)=>void,

  onBlur: (value: string)=>void,
}>(), {
  id: 'abcxyz-1',
  placeholder: 'Author Dinh Vo',
  disabled: false,
  readOnly: false,
  initialValue: 'Author Dinh Vo',
  label: 'Label',
  underlined: false,
  clearable: false,
  shouldAnimateLabel: false,
  type: 'text',
  bordered: false,
  color: 'default',
  status: 'default',
  helperText: 'Author Dinh Vo',
  helperColor: 'default',
  onChange: (value: string)=>{},
  onFocus: (value: string)=>{},
  onBlur: (value: string)=>{}

});

//init state
const state=reactive({
  inputValue: props.initialValue,
  animateLabel: false
})

function handleAnimationLabel(animateLabel: boolean){
  state.animateLabel=animateLabel
}


const handleInput= debounce((event: Event)=>{
  state.inputValue= (event.target as HTMLInputElement).value
  props.onChange((event.target as HTMLInputElement).value)
},1000)


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

.bordered{
  @apply border border-2 border-colors-gray600 duration-300
}
.input__container:hover .border-default{
  @apply border-colors-gray600
}
.input__container:hover .border-primary{
  @apply border-colors-blue600
}
.input__container:hover .border-secondary{
  @apply border-colors-purple600
}
.input__container:hover .border-success{
  @apply border-colors-green600
}
.input__container:hover .border-warning{
  @apply border-colors-yellow600
}
.input__container:hover .border-error{
  @apply border-colors-red600
}


.text-primary{
  @apply text-colors-blue600
}
.text-secondary{
  @apply text-colors-purple600
}
.text-success{
  @apply text-colors-green600
}
.text-warning{
  @apply text-colors-yellow600
}
.text-error{
  @apply text-colors-red600
}

.bg-primary{
  @apply bg-colors-blue600/30
}
.bg-secondary{
  @apply bg-colors-purple600/30
}
.bg-success{
  @apply bg-colors-green600/30
}
.bg-warning{
  @apply bg-colors-yellow600/30
}
.bg-error{
  @apply bg-colors-red600/30
}
</style>
