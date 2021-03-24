import styled from 'styled-components'
import Button from '@omariosouto/modulo-comum/components/Button'

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Button />
      <Title>Nosso site que usa a lib de componentes local</Title>
    </div>
  )
}
