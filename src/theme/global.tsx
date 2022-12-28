import { css, Global } from '@emotion/react'
import resetStyles from './reset'

const fixedStyles = css`
  html,
  body {
    min-height: 100%;
  }
`
export const globalStyles = <Global styles={[resetStyles, fixedStyles]} />
