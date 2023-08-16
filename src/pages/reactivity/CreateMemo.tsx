import { ContentPanel } from '@components'
import { Input } from '@ui/components'
import { createSignal, createMemo } from 'solid-js'

const CreateMemoPage = () => {
  const [valueA, setValueA] = createSignal(0)
  const [valueB, setValueB] = createSignal(0)

  const sum = createMemo(
    () => valueA() + valueB()
  )

  const code = createMemo(
    () => `const sum = createMemo(() => valueA() + valueB())

// read sum value
sum(): ${sum()}`
  )

  return (
    <div class='w-full text-neon-cyan-500 flex gap-4'>
      <ContentPanel>
        <div class='p-4 flex gap-4'>
          <div>
            <label>setValueA</label>
            <Input
              type='number'
              onInput={event => setValueA(parseInt(event.currentTarget.value))}
              value={valueA()}
            />
          </div>
          <div>
            <label>setValueB</label>
            <Input
              type='number'
              onInput={event => setValueB(parseInt(event.currentTarget.value))}
              value={valueB()}
            />
          </div>
        </div>
        <div class='p-4'>
          <pre>
            <code>
              {code()}
            </code>
          </pre>
        </div>
      </ContentPanel>
    </div>
  )
}

export default CreateMemoPage
