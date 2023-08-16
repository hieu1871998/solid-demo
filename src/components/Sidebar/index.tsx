import { ControlFlowRoute, ReactivityRoute, RootRoute, RouteName } from '@constants'
import { For } from 'solid-js'
import { SidebarItem } from './SidebarItem'
import styles from './Sidebar.module.scss'

const navMenu = [
  {
    title: RouteName.Home,
    route: RootRoute.Home,
  },
  {
    title: RouteName.CreateSignal,
    route: `${RootRoute.Reactivity}${ReactivityRoute.CreateSignal}`,
  },
  {
    title: RouteName.CreateEffect,
    route: `${RootRoute.Reactivity}${ReactivityRoute.CreateEffect}`,
  },
  {
    title: RouteName.CreateMemo,
    route: `${RootRoute.Reactivity}${ReactivityRoute.CreateMemo}`,
  },
  {
    title: RouteName.CreateResource,
    route: `${RootRoute.Reactivity}${ReactivityRoute.CreateResource}`,
  },
  {
    title: RouteName.Suspense,
    route: `${RootRoute.ControlFlow}${ControlFlowRoute.Suspense}`
  }
]

export const Sidebar = () => {
  return (
    <div class={styles.sidebar}>
      <nav class='w-60 h-full'>
        <ul class='w-full'>
          <For each={navMenu}>
            {item => (
              <SidebarItem
                title={item.title}
                route={item.route}
              />
            )}
          </For>
        </ul>
      </nav>
    </div>
  )
}
