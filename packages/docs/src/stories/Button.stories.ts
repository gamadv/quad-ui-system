import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@quad-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Primary',
  },
}
export const Secondary: StoryObj = {
  args: {
    children: 'Secondary',
  },
}
