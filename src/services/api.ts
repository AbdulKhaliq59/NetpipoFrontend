import { ApolloClient, gql, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
})

export const GET_EPISODES = gql`
query GetEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }`;