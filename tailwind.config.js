/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //grays
        'colors-gray50': '#eeeeef',
        'colors-gray100': '#dddedf',
        'colors-gray200': '#cdcdce',
        'colors-gray300': '#bcbdbe',
        'colors-gray400': '#abacae',
        'colors-gray500': '#9a9b9e',
        'colors-gray600': '#898b8e',
        'colors-gray700': '#797a7d',
        'colors-gray800': '#686a6d',
        'colors-gray900': '#57595d',

        //blues
        'colors-blue50': '#5EA2EF',
        'colors-blue100': '#CCE3FD',
        'colors-blue200': '#99C7FB',
        'colors-blue300': '#66AAF9',
        'colors-blue400': '#338EF7',
        'colors-blue500': '#0072F5',
        'colors-blue600': '#005BC4',
        'colors-blue700': '#004493',
        'colors-blue800': '#002E62',
        'colors-blue900': '#001731',


        //purples
        'colors-purple50': '#F2EAFA',
        'colors-purple100': '#E4D4F4',
        'colors-purple200': '#C9A9E9',
        'colors-purple300': '#AE7EDE',
        'colors-purple400': '#9353D3',
        'colors-purple500': '#7828C8',
        'colors-purple600': '#6020A0',
        'colors-purple700': '#481878',
        'colors-purple800': '#301050',
        'colors-purple900': '#180828',

        //greens
        'colors-green50': '#E8FAF0',
        'colors-green100': '#D1F4E0',
        'colors-green200': '#A2E9C1',
        'colors-green300': '#74DFA2',
        'colors-green400': '#45D483',
        'colors-green500': '#17C964',
        'colors-green600': '#12A150',
        'colors-green700': '#0E793C',
        'colors-green800': '#095028',
        'colors-green900': '#052814',

        //yellows
        'colors-yellow50': '#FEF6E9',
        'colors-yellow100': '#FDEDD3',
        'colors-yellow200': '#FBDBA7',
        'colors-yellow300': '#F9C97C',
        'colors-yellow400': '#F7B750',
        'colors-yellow500': '#F5A524',
        'colors-yellow600': '#C4841D',
        'colors-yellow700': '#936316',
        'colors-yellow800': '#62420E',
        'colors-yellow900': '#312107',


        //red
        'colors-red50':'#FEE7EF',
        'colors-red100':'#FDD0DF',
        'colors-red200':'#FAA0BF',
        'colors-red300':'#F871A0',
        'colors-red400':'#F54180',
        'colors-red500':'#F31260',
        'colors-red600':'#C20E4D',
        'colors-red700':'#920B3A',
        'colors-red800':'#610726',
        'colors-red900':'#310413',

        //pinks
        'colors-pink50': '#FFEDFA',
        'colors-pink100': '#FFDCF5',
        'colors-pink200': '#FFB8EB',
        'colors-pink300': '#FF95E1',
        'colors-pink400': '#FF71D7',
        'colors-pink500': '#FF4ECD',
        'colors-pink600': '#CC3EA4',
        'colors-pink700': '#992F7B',
        'colors-pink800': '#661F52',
        'colors-pink900': '#331029',


      },
      fontSize:{
        'xs': '0.6rem',
        'sm': '0.8rem',
        'md': '1.25rem',
        'lg': '1.563rem',
        'xl': '1.953rem',
      }
    },
  },
  plugins: [],
}

