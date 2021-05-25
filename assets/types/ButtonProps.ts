import { ReactHTML } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  secondary?: boolean
  as?: keyof Pick<ReactHTML, 'a' | 'button' | 'span' | 'div'>
}
