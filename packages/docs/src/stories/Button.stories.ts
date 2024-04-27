import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@quad-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Default',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    children: 'Big Button',
    size: 'big',
  },
}
