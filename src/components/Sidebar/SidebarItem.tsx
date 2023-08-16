import styles from './Sidebar.module.scss'
import { A } from '@solidjs/router'

interface SidebarItemProps {
  title: string;
  route: string;
}

export const SidebarItem = (props: SidebarItemProps) => {
  return (
    <li class={styles.sidebarItem}>
      <A
        class='block px-4 py-2 text-lg'
        href={props.route}
        activeClass='active'
        end
      >
        {props.title}
      </A>
    </li>
  )
}
