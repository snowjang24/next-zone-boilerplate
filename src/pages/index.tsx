import { css } from '@emotion/react'

export default function HomePage() {
  return <div css={PageTitle}>Home Page</div>
}

const PageTitle = css`
  font-size: 32px;
  font-weight: bold;
`
