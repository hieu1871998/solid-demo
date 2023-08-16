import { Motion, Presence } from '@motionone/solid'
import { Button } from '@ui/components'
import { VsTrash } from 'solid-icons/vs'
import { For } from 'solid-js'

interface ConsolePanelProps {
  messages: string[],
  clearLogs: () => void
}

export const ConsolePanel = (props: ConsolePanelProps) => {
  return (
    <section class='w-[600px] h-96 bg-white bg-opacity-20 text-white border border-white flex flex-col'>
      <div class='flex p-4 justify-between items-center border-2123 border-white'>
        <div class='text-lg font-bold'>
          Console panel
        </div>
        <Button
          color='white'
          icon
          onClick={props.clearLogs}
        >
          <VsTrash size={14} />
        </Button>
      </div>
      <div class='h-full px-4 overflow-auto font-mono relative'>
        <For each={props.messages}>
          {(message, index) => (
            <Presence>
              <Motion.div
                class='text-base mb-2 absolute'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: index() * 30 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, easing: 'linear' }}
              >
                {message}
              </Motion.div>
            </Presence>
          )}
        </For>
      </div>
    </section>
  )
}
