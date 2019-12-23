import React from 'react'
import RepoList from './RepoList'
import Gallery from './Gallery'
import styled from '@emotion/styled'


const Title = styled.div`
    font-size: 30px;
    margin: 20 10px;
    padding: 10px;
    border-radius: 4px;
    color: white;
    background-color: cadetblue;
    width: fit-content;
  `
const Content = styled.div`
  margin-left: 30px;
  `

const App = () => {
  return (
    <>
      <>
        <Title>Github Repo</Title>
        <Content>
          <RepoList />
        </Content>
      </>
      <>
        <Title>Infinite Scroll</Title>
        <Content>
          <Gallery />
        </Content>
      </>
    </>
  )
}
export default App