import { Button } from '@ui/components'
import { createSignal, createEffect } from 'solid-js'
import { VsAdd, VsRemove, VsChromeMaximize, VsChromeRestore } from 'solid-icons/vs'
import { createLogger } from '@utils/logger'
import { ConsolePanel, ContentPanel } from '@components'

interface CountObject {
  count: number;
  updated?: Date;
}

const CreateSignalPage = () => {
  const [count, setCount] = createSignal(0, { name: 'count' })

  const { logger, clearLogs, messages } = createLogger()

  const onSetCount = (type: 'add' | 'subtract') => {
    if (type === 'add') {
      setCount(count() + 1)
    } else {
      setCount(count() - 1)
    }
  }

  logger(`count log in top level: ${count()}`)

  createEffect(
    () => {
      logger(`count log in effect: ${count()}`)
    }
  )

  const [equals, setEquals] = createSignal<false>()
  const [object, setObject] = createSignal<CountObject>({ count: 0 }, { equals: false })
  const [objectEquals, setObjectEquals] = createSignal<CountObject>({ count: 0 })

  const onSetObject = (type: 'success' | 'fail') => {
    if (type === 'fail') {
      setObject((current) => {
        current.count += 1
        current.updated = new Date()
        return current
      })
    } else {
      setObject(current => ({
        count: current.count + 1,
        updated: new Date()
      }))
    }
  }

  const onSetObjectEquals = (type: 'success' | 'fail') => {
    if (type === 'fail') {
      setObjectEquals((current) => {
        current.count += 1
        current.updated = new Date()
        return current
      })
    } else {
      setObjectEquals(current => ({
        count: current.count + 1,
        updated: new Date()
      }))
    }
  }

  const onSetEquals = () => {
    setObject({ count: 0})
    setObjectEquals({ count: 0 })
    setEquals(prev => prev === false ? undefined : false)
  }

  createEffect(
    () => {
      if (equals() === false) {
        logger(`effect: count: ${object().count}, time: ${object().updated?.valueOf()}`)
      } else {
        logger(`effect: count: ${objectEquals().count}, time: ${objectEquals().updated?.valueOf()}`)
      }
    }
  )

  return (
    <div class='w-full text-neon-cyan-500 flex gap-4'>
      <ConsolePanel messages={messages} clearLogs={clearLogs} />
      <ContentPanel>
        <div class='text-lg border-b border-neon-cyan-500'>
          <div class='p-4 w-full flex items-center justify-between'>
            <div>
              <p>Current count:</p>
              <p class='text-4xl mt-2'>{count()}</p>
            </div>
            <div class='flex flex-col gap-2'>
              <Button
                color='cyan'
                onClick={() => onSetCount('add')}
                icon
              >
                <VsAdd />
              </Button>
              <Button
                color='cyan'
                onClick={() => onSetCount('subtract')}
                icon
              >
                <VsRemove />
              </Button>
            </div>
          </div>
        </div>
        <div class='text-lg'>
          <div class='p-4 w-full flex items-center justify-between'>
            <div>
              <p>Count:</p>
              <p class='text-4xl my-2'>
                {equals() === false
                  ? object().count
                  : objectEquals().count}
              </p>
              <p>Updated:</p>
              <p class='text-4xl mt-2'>
                {equals() === false
                  ? object().updated?.valueOf() ?? 'none'
                  : objectEquals().updated?.valueOf() ?? 'none'}
              </p>
            </div>
            <div class='flex flex-col gap-2'>
              <Button
                color='cyan'
                onClick={() => equals() === false
                  ? onSetObject('success')
                  : onSetObjectEquals('success')}
                icon
              >
                <VsAdd />
              </Button>
              <Button
                color='red'
                onClick={() => equals() === false
                  ? onSetObject('fail')
                  : onSetObjectEquals('fail')}
                icon
              >
                <VsAdd />
              </Button>
            </div>
          </div>
          <div class='w-full px-4'>
            <div class='w-full pt-4 flex items-center justify-between border-t border-neon-cyan-500'>
              <p>Equals: {equals() === false ? (
                <span class='text-neon-yellow-500 font-bold'>false</span>
              ) : (
                <span class='text-neon-green-500 font-bold'>unset</span>
              )}
              </p>
              <Button
                color={equals() === false ? 'yellow' : 'green'}
                onClick={onSetEquals}
                icon
              >
                {equals() === false ? (
                  <VsChromeRestore />
                ) : (
                  <VsChromeMaximize />
                )}
              </Button>
            </div>
          </div>
        </div>
      </ContentPanel>
    </div>

  )
}

export default CreateSignalPage
