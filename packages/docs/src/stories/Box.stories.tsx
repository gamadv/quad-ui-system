import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@quad-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    // RESOLVER -> Problema ao passar JSX para o children
    children: <div>Testando o elemento Box</div>,
    // children: 'Box here',
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
