import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  height: '',
})

export function index() {
  return <Button>Test my button</Button>
}
