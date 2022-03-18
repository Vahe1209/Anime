import React, { useCallback, useEffect } from 'react'
import { Dispatch } from 'redux'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import animeService from '../../services/animeService'
import { GetAnimePage } from '../../services/animeService/__generated__/GetAnimePage'
import { setAnimePage } from './homePageSlice'
import { HotAnime } from './hotAnime'

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage['Page']) => dispatch(setAnimePage(page)),
})

export function HomePage(props: IHomePageProps) {
  const { setAnimePage } = actionDispatch(useAppDispatch())

  const fetchAnimePage = useCallback(async () => {
    const animePage = await animeService.getAnimePage(0, 200).catch((err) => {
      throw new Error(err)
    })
    if (animePage) setAnimePage(animePage)
  }, [setAnimePage])

  useEffect(() => {
    fetchAnimePage()
  }, [fetchAnimePage])

  return (
    <Container>
      <h1>Hot Anime</h1>
      <HotAnime />
    </Container>
  )
}
