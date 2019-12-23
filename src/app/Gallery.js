import React, { useEffect } from 'react'
import giphy from '../network/giphy'
import { useLocalStore, useObserver } from 'mobx-react'
import ScrollObserver from './ScrollObserver'
import styled from '@emotion/styled'


const ImageWrapper = styled.div`
  padding: 10px;
  `


const Gallery = () => {
  const gallery = useLocalStore(() => {
    return {
      images: [],
      page: 0,
      perPage: 10,
      async next() {
        this.page++
        const nextImages = await giphy.getTrends({ page: this.page, perPage: this.perPage })
        this.images.push(...nextImages)
      }
    }
  })


  useEffect(() => { gallery.next() }, [])
  
  const isIntersecting = () => {
    console.log('called!')
    gallery.next()
  }

  return useObserver(() => (
    <div>
      {gallery.images.map((e, index) => {
        const obsIndex = gallery.images.length - 5
        return (
          <ImageWrapper key={index}>
            {index === obsIndex
              ? <ScrollObserver isIntersecting={isIntersecting}>
                <video src={e.images.preview.mp4} autoPlay={true} loop={true} muted={true}/>
                </ScrollObserver>
              : <video src={e.images.preview.mp4} autoPlay={true} loop={true} muted={true}/>
            }
          </ImageWrapper>
        )
      })}
    </div>
  ))
}

export default Gallery