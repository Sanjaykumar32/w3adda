import React from 'react'
import FooterSection from '../../components/footer/footer'
import Header from '../../components/header/header'
import PostDetailsPage from '../[...slug]'

const Post_page = () => {
  return (
    <div>

   <Header/>
   <PostDetailsPage/>
   <FooterSection/>

    </div>
  )
}

export default Post_page
