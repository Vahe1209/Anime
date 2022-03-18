import { apolloClient } from '../../graphql'
import { GET_ANIME_PAGE } from './queries'
import { GetAnimePage } from './__generated__/GetAnimePage'

class AnimeService {
  async getAnimePage(page: number, perPage = 5): Promise<GetAnimePage['Page']> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      })

      if (!response || !response.data) throw new Error('Cannot get anime list!')

      return response.data.Page
    } catch (err) {
      throw err
    }
  }
}

export default new AnimeService()
