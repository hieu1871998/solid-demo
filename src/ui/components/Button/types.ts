import { JSXElement } from 'solid-js'

export interface ButtonProps {
  children: JSXElement
  onClick?: (event: MouseEvent & {
    currentTarget: HTMLButtonElement;
    target: Element;
  }) => void
  color?: 'cyan' | 'green' | 'purple' | 'red' | 'yellow' | 'white' | 'dark'
  loading?: boolean;
  disabled?: boolean;
  icon?: boolean;
}
