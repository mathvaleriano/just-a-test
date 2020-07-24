import styled, { css } from 'styled-components'

type Props = {
  readonly alignItems?: string,
  readonly direction?: string,
  readonly justifyContent?: string,
  readonly wrap?: string
}

export default styled.div`
  display: flex;
  ${({
  alignItems = 'flex-start',
  direction = 'flex-start',
  justifyContent = 'flex-start',
  wrap = 'wrap'
}: Props) => css`
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `}
`
