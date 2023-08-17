import { ContentPanel } from '@components'
import { Button, Input } from '@ui/components'
import { VsRefresh } from 'solid-icons/vs'
import { createSignal, createMemo, JSX } from 'solid-js'

const CreateMemoPage = () => {
  const [valueA, setValueA] = createSignal(0)
  const [valueB, setValueB] = createSignal(0)
  const [valueC, setValueC] = createSignal(0)

  const sumA = createMemo<number>(
    () => valueA() + valueB()
  )

  const sumB = createMemo<number>(
    (prev) => valueC() + prev,
    0
  )

  const codeBlockA = createMemo(
    () => `const sumA = createMemo(() => valueA() + valueB())

// read sum value
sumA(): ${sumA()}`
  )

  const codeBlockB = createMemo(
    () => `const sumB = createMemo((prev) => valueC() + prev)

// read sum value
sumB(): ${sumB()}`
  )

  const onInputA: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const value = event.currentTarget.value
    if (value) {
      setValueA(parseInt(value))
    } else {
      setValueA(0)
    }
  }

  const onInputB: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const value = event.currentTarget.value
    if (value) {
      setValueB(parseInt(value))
    } else {
      setValueB(0)
    }
  }

  const onInputC: JSX.EventHandler<HTMLInputElement, InputEvent> = (event) => {
    const value = event.currentTarget.value
    if (value) {
      setValueC(parseInt(value))
    } else {
      setValueC(0)
    }
  }

  return (
    <div class='w-full text-neon-cyan-500 flex gap-4'>
      <ContentPanel>
        <div>
          <div class='p-4 flex gap-4 items-end'>
            <div>
              <label>setValueA</label>
              <Input
                type='number'
                onInput={onInputA}
                value={valueA()}
              />
            </div>
            <div>
              <label>setValueB</label>
              <Input
                type='number'
                onInput={onInputB}
                value={valueB()}
              />
            </div>
            <Button icon onClick={() => {
              setValueA(0)
              setValueB(0)
            }}>
              <VsRefresh size={26} />
            </Button>
          </div>
          <div class='p-4'>
            <pre>
              <code>
                {codeBlockA()}
              </code>
            </pre>
          </div>
        </div>
        <div class='border-t border-neon-cyan-500'>
          <div class='w-full p-4 flex flex-row items-end gap-4'>
            <div>
              <label>setValueA</label>
              <Input
                type='number'
                onInput={onInputC}
                value={valueC()}
                min={0}
              />
            </div>
            <Button icon onClick={() => setValueC(0)}>
              <VsRefresh size={26} />
            </Button>
          </div>
          <div class='p-4'>
            <pre>
              <code>
                {codeBlockB()}
              </code>
            </pre>
          </div>
        </div>
      </ContentPanel>
    </div>
  )
}

export default CreateMemoPage
