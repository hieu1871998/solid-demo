import LogoGlow from '@assets/solidjs-logo-glow.svg'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header class={styles.header}>
      <div class='container mx-auto py-4'>
        <a class='flex flex-row gap-4 items-center'>
          <img
            class='w-16 h-16'
            src={LogoGlow}
          />
          <h1 class='text-3xl text-neon-cyan-500'>
            demo
          </h1>
        </a>
      </div>
    </header>
  )
}
