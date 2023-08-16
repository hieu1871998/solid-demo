import { Component, createMemo } from 'solid-js'
import { ButtonProps } from './types'
import styles from './Button.module.scss'

export const Button: Component<ButtonProps> = (props) => {
  const typeClass = createMemo(
    () => {
      switch (props.color) {
      case 'cyan': return styles.buttonCyan
      case 'green': return styles.buttonGreen
      case 'purple': return styles.buttonPurple
      case 'red': return styles.buttonRed
      case 'yellow': return styles.buttonYellow
      case 'dark': return styles.buttonDark
      case 'white': return styles.buttonWhite
      default: return styles.buttonCyan
      }
    }
  )

  return (
    <button
      class={`${styles.button} ${typeClass()} ${props.icon ? styles.iconOnly : ''}`}
      onClick={(event) => props.onClick?.(event)}
      disabled={props.disabled}
    >
      <span class='label'>{props.children}</span>
    </button>
  )
}
