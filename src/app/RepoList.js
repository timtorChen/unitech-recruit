import React, { useEffect } from 'react'
import github from '../network/github'
import { useLocalStore, useObserver } from 'mobx-react'
import styled from '@emotion/styled'



const Card = styled.div`
  padding: 15px;
  margin: 10px;
  border-radius: 5px;
  max-width: 600px;
  border: 1px solid lightgray;
  `

const Url = styled.div`
  color: slategray;
  font-size: 14px;
  `

const Name = styled.div`
  font-size: 20px;
  color: cornflowerblue;
  font-weight: 800;
  `

const Description = styled.div`
  color: darkslategray;
  padding-top: 8px;
  `

const RepoList = () => {
  const list = useLocalStore(() => {
    return {
      data: [],
      async init() {
        this.data = await github.getRepos({ username: 'timtorChen' })
      }
    }
  })

  useEffect(() => { list.init() }, [])

  return useObserver(() => (
    <div>
      {list.data.map((e, index) =>
        <Card key={index}>
          <Name>{e.name}</Name>
          <Url>{e.html_url}</Url>
          <Description>{e.description}</Description>
          {/* <div>{e.archived}</div> */}
          {/* <div>{e.fork}</div> */}
          {/* <div>{e.updated_at}</div> */}
        </Card>
      )}
    </div>
  ))
}

export default RepoList