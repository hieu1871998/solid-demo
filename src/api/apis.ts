import { CatFactResponse, GithubUser } from '@types'
import { Endpoint } from './endpoints'
import { fetcher } from './fetcher'
import { ResourceFetcher } from 'solid-js'

export const fetchGithubUser: ResourceFetcher<string, GithubUser> = (
  username,
  { value, refetching }
) => {
  console.log('value: ', value)
  console.log('refetching: ', refetching)

  return fetcher<GithubUser>(`${Endpoint.GithubUser}/${username}`)
}

export const fetchCatFacts = () =>
  fetcher<CatFactResponse>(Endpoint.CatFacts)
