
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";
import { SingleCategoryLeftMenu } from '../components/LeftMenu/singleCategoryLeftMenu';
import Header from '../components/header/header';
import FooterSection from '../components/footer/footer';

export default function SingleDetails({ post, catIndex, page }) {
  console.log(post, 'post')
  console.log(catIndex, 'catIndex')
  console.log(page, 'page')


  return (
    <div>

      <Header />
      <main-content className="main-content">
        <section className="banner single_category_banner">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-7">
                <div className="banner_text">
                  <h1 className="text_prog">Learn HTML</h1>
                  <p>Best course for beginners to learn HTML, which is the first building block for websites.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 d-none d-md-block">
                <figure className="image">
                  <img
                    src="./assets/images/banner-img3.png"
                    alt="Banner Image"
                    className="img-fluid"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="tutorial_index">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="lessons comn_box">
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-book" viewBox="0 0 18 18">
                      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
                    </svg>
                    Lessons
                  </div>
                  <h4>90 lessons</h4>
                </div>
                <div className="duration comn_box">
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clock" viewBox="0 0 18 18">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                    </svg>
                    Duration
                  </div>
                  <h4>8+ Hours</h4>
                </div>
                <div className="reward comn_box">
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lightning" viewBox="0 0 18 18">
                      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"></path>
                    </svg>
                    Reward
                  </div>
                  <h4>900+ Coins</h4>
                </div>
              </div>
              <div className="col-md-9 mt-5 mt-md-0">
                <h2 className="heading">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4527a4" className="bi bi-grid text-primary" viewBox="0 0 18 18">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                  </svg>
                  CURRICULUM
                </h2>
                <SingleCategoryLeftMenu post={post} catIndex={catIndex} page={page} />


              </div>
            </div>
          </div>
        </section>
      </main-content>
      <FooterSection />

    </div>
  )
}


// export async function getStaticProps({ params }){
//   const response = await getPostByUri(params.uri)
//   const post = response?.data?.post
//   return {
//     props: {
//       post
//     }
//   }
// }

export async function getServerSideProps({ params }) {
  const GET_POST = gql`
    query GetPostByURI($id: ID!) {
      category(id: $id, idType: URI) {
        name
        categoryId
        slug
      }
    }
  `

  const GET_CAT_PAGE = gql`
  query GetPageByURI($id: ID!) {
    page(id: $id , idType: URI) {
      id
      content
      title
    }
  }
  `
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: "category/" + params.uri
    }
  })
  const post = response?.data?.category
  console.log(post)

  //  Get sidebar menu
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
      id: post.categoryId
    }
  })

  const catIndex = sbm_response?.data?.categories
  //console.log(sbm_response)

  const cat_page_response = await client.query({
    query: GET_CAT_PAGE,
    variables: {
      id: post.slug
    }
  })

  // console.log(cat_page_response)
  const page = cat_page_response.data.page

  return {
    props: {
      post,
      catIndex,
      page
    }
  }
}

export async function getServerSidePaths() {
  const paths = []
  return {
    paths,
    fallback: 'blocking'
  }
}