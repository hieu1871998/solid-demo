import { ConsolePanel, ContentPanel } from '@components'
import { Button } from '@ui/components'
import { createLogger } from '@utils/logger'
import { VsRefresh } from 'solid-icons/vs'
import { createSignal, createEffect } from 'solid-js'

export const CreateEffectPage = () => {
  const { clearLogs, logger, messages } = createLogger()

  const [a, setA] = createSignal(0)
  const [b, setB] = createSignal(0)

  logger(`top level: a()=${a()}`)

  /** Effect that depends on signal `a` */
  createEffect(
    () => {
      logger(`side effect: a()=${a()}`)
    }
  )

  /** Effect that depends on signal `b` */
  createEffect(
    () => {
      logger(`side effect: b()=${b()}`)
    }
  )

  // effect that depends on signal `a`
  createEffect((prevA) => {
    // do something with `a` and `prevA`
    const sum = a() + b()
    if (sum !== prevA) console.log(`sum changed to ${sum}`)
    return sum
  }, 0)
  // ^ the initial value of the effect is 0

  const onSetA = () => {
    setA(prev => prev + 1)
  }

  const onSetB = () => {
    setB(prev => prev + 1)
  }

  const reset = () => {
    setA(0)
    setB(0)
  }

  return (
    <div class='w-full text-neon-cyan-500 flex gap-4'>
      <ConsolePanel clearLogs={clearLogs} messages={messages} />
      <ContentPanel>
        <div class='p-4 flex gap-4'>
          <code>
            const [a, setA] = createSignal(0)<br />
            const [b, setB] = createSignal(0)<br />
            <br />
            a = {a()}<br />
            b = {b()}
          </code>
          <div class=''>
            <Button onClick={reset} icon color='white'>
              <VsRefresh />
            </Button>
          </div>
        </div>
        <div class='flex gap-4 p-4'>
          <Button onClick={onSetA}>
            setA
          </Button>
          <Button onClick={onSetB}>
            setB
          </Button>
        </div>
      </ContentPanel>
    </div>
  )
}
