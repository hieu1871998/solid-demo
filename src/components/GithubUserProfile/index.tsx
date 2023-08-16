import { fetchCatFacts, fetchGithubUser } from '@api'
import { LoadingIndicator } from '@components/LoadingIndicator'
import { Button } from '@ui/components'
import { For, Suspense, SuspenseList, createResource, createSignal } from 'solid-js'
import styles from './GihubUserProfile.module.scss'
import { VsRefresh, VsError, VsWindow, VsDiffIgnored, VsDiffModified, VsDiffRemoved } from 'solid-icons/vs'

export const GithubUserProfile = () => {
  const [username, setUsername] = createSignal('hieu1871998')
  const [profile, { refetch: refetchUser, mutate: mutateUser }] = createResource(username, fetchGithubUser)

  const [catFacts, { refetch: refetchCatFacts, mutate: mutateCatFacts }] = createResource(fetchCatFacts)

  return (
    <div class={`container mx-auto max-w-3xl ${styles.profile}`}>
      <div class='flex justify-end gap-4 p-4 -mx-4'>
        <Button
          color='cyan'
          onClick={() => {
            refetchCatFacts()
            refetchUser()
          }}
          loading={profile.loading}
          icon
        >
          <VsRefresh />
        </Button>
        <Button
          color='yellow'
          onClick={() => {
            mutateCatFacts(prev => undefined)
            refetchUser()
          }}
          loading={profile.loading}
        >
          <VsDiffModified />
        </Button>
        <Button
          color='red'
          onClick={() => {
            mutateCatFacts(prev => undefined)
            refetchUser()
          }}
          loading={profile.loading}
        >
          <VsDiffRemoved />
        </Button>
      </div>
      <div
        class={`
          bg-neon-cyan-500 bg-opacity-20 border border-neon-cyan-500
          transition-all
        `}
      >
        <SuspenseList revealOrder='forwards' tail='collapsed'>
          <div class='text-lg text-neon-cyan-500 border-b border-neon-cyan-500 p-4 h-20 flex flex-col justify-center'>
            <Suspense
              fallback={(
                <div class='w-full h-full flex justify-center items-center'>
                  <LoadingIndicator />
                </div>
              )}
            >
              <div>
                {profile()?.name}
              </div>
              <div>
                {profile()?.html_url}
              </div>
            </Suspense>
          </div>
          <div class='p-4 h-96 overflow-auto'>
            <Suspense
              fallback={(
                <div class='w-full h-full flex justify-center items-center'>
                  <LoadingIndicator />
                </div>
              )}
            >
              <For each={catFacts()?.data}>
                {item => (
                  <li class='text-lg text-neon-cyan-500 mb-2'>
                    {item.fact}
                  </li>
                )}
              </For>
            </Suspense>
          </div>
        </SuspenseList>
      </div>
    </div>
  )
}
