import React, { useState } from 'react'
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";
import Leftmenu from '../components/LeftMenu/leftmenu';
import FooterSection from '../components/footer/footer';
import Header from '../components/header/header';

const PostDetailsPage = ({ post, categories }) => {
  const [dataClose, setClose] = useState(false)
  console.log(dataClose, 'dataClose')

  const handleCloseManu = () => {
    setClose(false)
  }
  const handleShowManu = () => {
    setClose(true)
  }
  return (
    <div className=''>
      <Header />
      <main-content className="main-content margin-nav">
        <div className="split_box">
          <aside className="aside_nav">
            <button
              className="navbar-toggler center d-lg-none my-3 mx-3"
              type="button"
              data-bs-toggle="collapse"
              // data-bs-target="#asideNavbarContent"
              aria-controls="asideNavbarContent"
              // aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleShowManu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
              {/* Index */}
            </button>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className={`collapse navbar-collapse ${dataClose ? 'show' : ''}`} id="asideNavbarContent">
                <div className="py-2 px-3 d-lg-none">
                  <button
                    onClick={handleCloseManu}
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    // data-bs-target="#asideNavbarContent"
                    aria-controls="asideNavbarContent"
                    // aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <img
                      src="/assets/images/close.svg"
                      alt="Sidebar Close Icon"
                      width="15"
                    />
                  </button>
                </div>


                <div className="accordion" id="accordionExample">
                  <Leftmenu cat={categories} setClose={setClose} />

                </div>



              </div>
            </nav>
          </aside>

          <div className="middle_content">
            <div className="top_heading">
              <h1>{post.title}</h1>
            </div>
            <div className="category_content " >
              <article dangerouslySetInnerHTML={{ __html: post.content }} >
              </article>

            </div>
          </div>

          <div className="right_content d-none d-xl-block">
            <div className="content_box mt-2 border-danger">
              <a href="javascript:void(0)">
                <h4>
                  <img alt="Cpp"
                    src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg"
                    width="25px"
                    height="28px"
                  />&nbsp; STL Tutorial
                </h4>
                <div className="mt-2 text-dark">Standard Template Library in C++.</div>
                <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
              </a>
            </div>
            <div className="content_box border-primary">
              <a href="javascript:void(0)">
                <h4>
                  <img
                    alt="Cpp"
                    src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-ds.svg"
                    width="25px"
                    height="28px"
                  />&nbsp; Data Structures &amp; Algo
                </h4>
                <div className="mt-2 text-dark">Learn DSA in C++.</div>
                <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
              </a>
            </div>
            <div className="content_box border-warning">
              <a href="javascript:void(0)">
                <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-ui-checks-grid text-danger" viewBox="0 0 18 18">
                  <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                </svg>&nbsp; C++ MCQ Tests</h4>
                <div className="mt-2 text-dark">Prepare for TCS, Infosys, etc.</div>
                <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
              </a>
            </div>
          </div>
        </div>
      </main-content>
      <FooterSection />
    </div>
  )
}

export default PostDetailsPage


export const getServerSideProps = async ({ params }) => {
  console.log(params)
  const GET_POST = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      content
      date
      author {
        node {
          firstName
          lastName
        }
      }
      categories(where: {parent: 0}) {
        nodes {
          name
          databaseId
        }
      }
    }
  }
`
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.slug[1]
    }
  })
  const post = response?.data?.post

  // Get sidebar menu
  const GET_SIDEBAR_MENU = gql`
  query GetSidebarMenuByCategory($id: Int) {
    categories(where: {parent: $id}) {
      edges {
        node {
          id
          name
          posts {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`
  const sbm_response = await client.query({
    query: GET_SIDEBAR_MENU,
    variables: {
      id: response?.data?.post?.categories?.nodes[0]?.databaseId
    }
  })
  const categories = sbm_response?.data?.categories
  console.log(sbm_response)

  return {
    props: {
      post,
      categories
    }
  }
}





