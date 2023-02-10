import React from 'react'

export default function HomeDetails() {
  return (
    <>
        <main-content className="main-content">
      <section className="banner">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-7">
              <div className="banner_text">
                <h1 className="text_prog">Programming</h1>
                <h1 className="text_edu">Education</h1>
                <h1 className="text_simp">Simplified!</h1>
                <p>Enjoy the #rightway to learn coding.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 d-none d-md-block">
              <figure className="image">
                <img
                  src="./assets/images/banner-img.png"
                  alt="Banner Image"
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="everything">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heading d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#4535aa" className="bi bi-stack text-primary" viewBox="0 0 20 14">
                  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"></path>
                  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"></path>
                </svg>
                Everything else, still there!
              </h2>
              <p className="text_free">6000+ resources, with improved content and user-experience, for free.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="content_box">
                <div className="img_box box1">
                  <img src="./assets/images/tutorial-img.png" alt="Tutorials" className="img-fluid" />
                </div>
                  <h4>Tutorials</h4>
                  <p>Free tutorials for all the popular programming languages.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content_box">
                <div className="img_box box2">
                  <img src="./assets/images/interview-img.png" alt="Interview Tests" className="img-fluid" />
                </div>
                <h4>Interview Tests</h4>
                <p>MCQs for interview preparation to get your dream job.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content_box">
                <div className="img_box box3">
                  <img src="./assets/images/discussion-mg.png" alt="Discussion Forum" className="img-fluid" />
                </div>
                <h4>Discussion Forum</h4>
                <p>We try to answer all the Questions asked in our Discussion Forum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="online_practice">
        <div className="container">
          <div className="row mb-4 mb-sm-5">
            <div className="col-12">
              <h2 className="heading">Practice with our Online Compilers</h2>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
              <figure className="img_box">
                <img src="./assets/images/online_practice-img.png" alt="Online Practice" />
              </figure>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="compiler_options_box">
                <a href="javascript:void(0)">
                  <h5>Python Compiler</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding Python</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>SQL Editor</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding SQL</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>C Compiler</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding C</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>C++ Compiler</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding C++</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>Java Compiler</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding Java</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>HTML Editor</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding HTML</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>JS Editor</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding JS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
                <a href="javascript:void(0)">
                  <h5>C# Compiler</h5>
                  <div className="d-flex align-items-center">
                    <span>Start Coding C#</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          </div>
      </section>

      <section className="popular_resources">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="text-muted">
                Here are some of our <mark>popular resources</mark>,
              </h4>
              <p className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 18 18">
                  <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                  <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </p>
            </div>
          </div>

        <div className="row">
          <div className="col-12">
            <div className="resources_content">
              <a href="javascript:void(0)" className="content_box">
                <img src="./assets/images/java.svg" alt="JAVA" className="img-fluid" />
                <p>Core Java</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/python.svg"
                  alt="Python"
                  className="img-fluid"
                />
                <p>Python</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/c-plus-plus.svg"
                  alt="C++"
                  className="img-fluid"
                />
                <p>C++</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/computer-network.svg"
                  alt="Computer Network"
                  className="img-fluid"
                />
                <p>Computer Network</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/operating-system.svg"
                  alt="Operating System"
                  className="img-fluid"
                />
                <p>Operating System</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/c-language.svg"
                  alt="C Language"
                  className="img-fluid"
                />
                <p>C Language</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img src="./assets/images/sql.svg" alt="SQL" className="img-fluid" />
                <p>DBMS</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/javascript.svg"
                  alt="Javascript"
                  className="img-fluid"
                />
                <p>Javascript</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img src="./assets/images/php.svg" alt="PHP" className="img-fluid" />
                <p>PHP</p>
              </a>
              <a href="javascript:void(0)" className="content_box">
                <img
                  src="./assets/images/computer.svg"
                  alt="Computer"
                  className="img-fluid"
                />
                <p>Computer Architecture</p>
              </a>
            </div>
            <div className="text-center mt-4">
              <a href="multi-category.html" className="btn primary_btn btn-lg">
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 18 18">
                  <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main-content>
    </>
  )
}
