import { createStore } from 'solid-js/store'

export const createLogger = () => {
  const [messages, setMessages] = createStore<string[]>([])

  const logger = console.log = (
    (message: string) => setMessages(messages => [message, ...messages])
  )

  const clearLogs = () => {
    setMessages([])
  }

  return {
    messages,
    logger,
    clearLogs
  }
}
