import { type Component } from 'solid-js'
import styles from './App.module.scss'
import { Routes, Route } from '@solidjs/router'
import HomePage from '@pages/Home'
import SuspensePage from '@pages/control-flow/Suspense'
import { Header, Sidebar } from '@components'
import CreateSignalPage from '@pages/reactivity/CreateSignal'
import { CreateEffectPage } from '@pages/reactivity/CreateEffect'
import CreateMemoPage from '@pages/reactivity/CreateMemo'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
      <div class='container mx-auto h-full flex flex-row gap-4 relative'>
        <Sidebar />
        <main class='w-full'>
          <Routes>
            <Route path='/' component={HomePage} />
            <Route path='/reactivity/create-signal' component={CreateSignalPage} />
            <Route path='/reactivity/create-effect' component={CreateEffectPage} />
            <Route path='/reactivity/create-memo' component={CreateMemoPage} />
            <Route path='/control-flow/suspense' component={SuspensePage} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
