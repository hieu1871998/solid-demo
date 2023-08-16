import { JSX, JSXElement } from 'solid-js'

interface ContentPanelProps {
  class?: JSX.HTMLAttributes<HTMLElement>['class']
  children: JSXElement
}

export const ContentPanel = (props: ContentPanelProps) => {
  return (
    <section
      class={`
        ${props.class}
        w-full bg-neon-cyan-500 bg-opacity-20 border border-neon-cyan-500
      `}
    >
      {props.children}
    </section>
  )
}
