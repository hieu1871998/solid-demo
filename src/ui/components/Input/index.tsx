import styles from './Input.module.scss'
import { JSX, createMemo, Component } from 'solid-js'

interface InputProps {
  onChange?: JSX.EventHandler<HTMLInputElement, Event>
  onInput?: JSX.EventHandler<HTMLInputElement, InputEvent>
  type?: string;
  color?: 'cyan' | 'green' | 'purple' | 'red' | 'yellow' | 'white' | 'dark'
  value?: string | number | string[]
  disabled?: boolean
  min?: number
  max?: number
}

export const Input: Component<InputProps> = (props: InputProps) => {
  const typeClass = createMemo(
    () => {
      switch (props.color) {
      case 'cyan': return styles.inputCyan
      case 'green': return styles.inputGreen
      case 'purple': return styles.inputPurple
      case 'red': return styles.inputRed
      case 'yellow': return styles.inputYellow
      case 'dark': return styles.inputDark
      case 'white': return styles.inputWhite
      default: return styles.inputCyan
      }
    }
  )

  const changeHandler: JSX.EventHandler<HTMLInputElement, Event> = (event) => {
    props.onChange?.(event)
  }

  const inputHandler: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    props.onInput?.(event)
  }

  return (
    <input
      class={`${styles.input} ${typeClass()}`}
      type={props.type}
      onChange={changeHandler}
      onInput={inputHandler}
      value={props.value}
      disabled={props.disabled}
      min={props.min}
      max={props.max}
    />
  )
}
