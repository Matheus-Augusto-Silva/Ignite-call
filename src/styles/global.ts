import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
  },
  body: {
    backgroundColor: '$gray900',
    padding: '6rem 0 6rem 6rem',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    'margin-left': '7.5rem',
  },
})
