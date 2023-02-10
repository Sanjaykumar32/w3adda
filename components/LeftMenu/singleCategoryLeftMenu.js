import React, { useState } from 'react'
import { useRouter } from "next/router"

export const SingleCategoryLeftMenu = ({ catIndex, post, page }) => {
  const router = useRouter()
  const [open, setOpen] = useState([])

  const handleRoute = (link) => {
    router.push(`/c-tutorial/${link}`)
  }

  const handleOpen = (id) => {
    setOpen(id)
  }

  console.log(open, 'open')
  return (
    <>
      {catIndex.edges.map((el, index) => {
        return (

          <div className="accordion" id="accordionSingleCategory" key={index}>
            <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/1.png"
                    alt="Level 1"
                    className="img-fluid blur-up lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/1.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      {el.node.name}
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL {index} </span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingOne">
                <button onClick={() => handleOpen(el.node.id)}
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  // aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  12 Lessons
                </button>
              </h2>

              <div
                // id="collapseOne"
                className={`accordion-collapse collapse drop ${open == el.node.id ? 'show' : ''}`}
                aria-labelledby="headingOne"
              // data-bs-parent="#accordionSingleCategory"
              >
                <div className="accordion-body ">
                  {el?.node?.posts?.edges?.map((item, index) => {

                    return (
                      <a className="nav-item " key={index}>
                        <span className="nav-link active" onClick={() => handleRoute(item.node.slug)}>
                          {item.node.title}
                        </span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/2.png"
                    alt="Level 1"
                    className="img-fluid blur-up ls-is-cached lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/2.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      Creating First Webpage
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL 2</span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  8 Lessons
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSingleCategory">
                <div className="accordion-body">
                  <a href="javascipt:void(0)">Start with Result</a>
                  <a href="javascipt:void(0)">Prepare the Structure</a>
                  <a href="javascipt:void(0)">Add a Heading</a>
                  <a href="javascipt:void(0)">Charm of a Picture</a>
                  <a href="javascipt:void(0)">Description Required!</a>
                  <a href="javascipt:void(0)">Text Formatting</a>
                  <a href="javascipt:void(0)">Link Link Hyperlink</a>
                  <a href="javascipt:void(0)">BOOM! We are done.</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/3.png"
                    alt="Level 1"
                    className="img-fluid blur-up ls-is-cached lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/3.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      Learn Basic Styling
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL 3</span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  8 Lessons
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSingleCategory">
                <div className="accordion-body">
                  <a href="javascipt:void(0)">Recap:Text Formatting Tags</a>
                  <a href="javascipt:void(0)">Time for some Styling</a>
                  <a href="javascipt:void(0)">Changing Text Color</a>
                  <a href="javascipt:void(0)">Playing with Text Size</a>
                  <a href="javascipt:void(0)">Text Alignment</a>
                  <a href="javascipt:void(0)">New Fonts for your Text</a>
                  <a href="javascipt:void(0)">Changing Background Color</a>
                  <a href="javascipt:void(0)">A Little more...</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/4.png"
                    alt="Level 1"
                    className="img-fluid blur-up ls-is-cached lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/4.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      HTML Lists and Tables
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL 4</span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  13 Lessons
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionSingleCategory">
                <div className="accordion-body">
                  <a href="javascipt:void(0)">Time to Move On</a>
                  <a href="javascipt:void(0)">Listifying the Content</a>
                  <a href="javascipt:void(0)">Ordered Lists</a>
                  <a href="javascipt:void(0)">Customizations in List</a>
                  <a href="javascipt:void(0)">List inside List</a>
                  <a href="javascipt:void(0)">Introduction to Tables</a>
                  <a href="javascipt:void(0)">Rows in a Table</a>
                  <a href="javascipt:void(0)">Column in a Row</a>
                  <a href="javascipt:void(0)">More Rows and Columns</a>
                  <a href="javascipt:void(0)">Table Body and Head</a>
                  <a href="javascipt:void(0)">Adding Heading to Columns</a>
                  <a href="javascipt:void(0)">Customizing your Table</a>
                  <a href="javascipt:void(0)">Time for some Exercise</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/5.png"
                    alt="Level 1"
                    className="img-fluid blur-up ls-is-cached lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/5.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      Create a Web Portfolio
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL 5</span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  10 Lessons
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionSingleCategory">
                <div className="accordion-body">
                  <a href="javascipt:void(0)">My Web Portfolio</a>
                  <a href="javascipt:void(0)">Lay down the Structure</a>
                  <a href="javascipt:void(0)">Start from the Top</a>
                  <a href="javascipt:void(0)">Name the King!</a>
                  <a href="javascipt:void(0)">Small Tagline about yout</a>
                  <a href="javascipt:void(0)">A Little more about you</a>
                  <a href="javascipt:void(0)">Showcase your Hobbies</a>
                  <a href="javascipt:void(0)">A Table for something</a>
                  <a href="javascipt:void(0)">Stuff the Table up</a>
                  <a href="javascipt:void(0)">Wow! It looks great</a>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="row align-items-center">
                <div className="col-md-2 col-3">
                  <img
                    data-src="https://static.studytonight.com/code/html-course/resources/6.png"
                    alt="Level 1"
                    className="img-fluid blur-up ls-is-cached lazyloaded"
                    height="100px"
                    width="100px"
                    src="https://static.studytonight.com/code/html-course/resources/6.png"
                  />
                </div>
                <div className="col-md-10 col-9">
                  <div className="top_heading">
                    <h2>
                      HTML Primes: div and span
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                      </svg>
                    </h2>
                    <span className="">LEVEL 6</span>
                  </div>
                </div>
              </div>
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                  5 Lessons
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionSingleCategory">
                <div className="accordion-body">
                  <a href="javascipt:void(0)">Divine Separation</a>
                  <a href="javascipt:void(0)">Deep Dive into </a>
                  <a href="javascipt:void(0)">What the SPAN!</a>
                  <a href="javascipt:void(0)">DIV vs SPAN</a>
                  <a href="javascipt:void(0)">The End</a>
                </div>
              </div>
            </div> */}


          </div>
        )
      })}



    </>
  )
}
