// import React from 'react'

// export const SingleDetails = () => {
//     return (
//         <div>
//             <main-content className="main-content">
//                 <section className="banner single_category_banner">
//                     <div className="container">
//                         <div className="row align-items-center justify-content-center">
//                             <div className="col-lg-6 col-md-7">
//                                 <div className="banner_text">
//                                     <h1 className="text_prog">Learn HTML</h1>
//                                     <p>Best course for beginners to learn HTML, which is the first building block for websites.</p>
//                                 </div>
//                             </div>
//                             <div className="col-lg-4 col-md-5 d-none d-md-block">
//                                 <figure className="image">
//                                     <img
//                                         src="./assets/images/banner-img3.png"
//                                         alt="Banner Image"
//                                         className="img-fluid"
//                                     />
//                                 </figure>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="tutorial_index">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-md-3">
//                                 <div className="lessons comn_box">
//                                     <div className="">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-book" viewBox="0 0 18 18">
//                                             <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"></path>
//                                         </svg>
//                                         Lessons
//                                     </div>
//                                     <h4>90 lessons</h4>
//                                 </div>
//                                 <div className="duration comn_box">
//                                     <div className="">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clock" viewBox="0 0 18 18">
//                                             <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
//                                             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
//                                         </svg>
//                                         Duration
//                                     </div>
//                                     <h4>8+ Hours</h4>
//                                 </div>
//                                 <div className="reward comn_box">
//                                     <div className="">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-lightning" viewBox="0 0 18 18">
//                                             <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"></path>
//                                         </svg>
//                                         Reward
//                                     </div>
//                                     <h4>900+ Coins</h4>
//                                 </div>
//                             </div>
//                             <div className="col-md-9 mt-5 mt-md-0">
//                                 <h2 className="heading">
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4527a4" className="bi bi-grid text-primary" viewBox="0 0 18 18">
//                                         <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
//                                     </svg>
//                                     CURRICULUM
//                                 </h2>
//                                 <div className="accordion" id="accordionSingleCategory">
//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/1.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/1.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         HTML Fundamentals
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 1</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingOne">
//                                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 12 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">Say Hi! to HTML</a>
//                                                 <a href="javascipt:void(0)">Introduction to HTML Tags</a>
//                                                 <a href="javascipt:void(0)">Head and Body tags</a>
//                                                 <a href="javascipt:void(0)">Title Tag aka</a>
//                                                 <a href="javascipt:void(0)">Heading using Header Tag</a>
//                                                 <a href="javascipt:void(0)">Paragraph Tag</a>
//                                                 <a href="javascipt:void(0)">and Comments</a>
//                                                 <a href="javascipt:void(0)">Basic Text Formatting</a>
//                                                 <a href="javascipt:void(0)">Creating Hyperlinks</a>
//                                                 <a href="javascipt:void(0)">Working with Images</a>
//                                                 <a href="javascipt:void(0)">Hyperlinking a Picture</a>
//                                                 <a href="javascipt:void(0)">Quick Revision</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/2.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up ls-is-cached lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/2.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         Creating First Webpage
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 2</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingTwo">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 8 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">Start with Result</a>
//                                                 <a href="javascipt:void(0)">Prepare the Structure</a>
//                                                 <a href="javascipt:void(0)">Add a Heading</a>
//                                                 <a href="javascipt:void(0)">Charm of a Picture</a>
//                                                 <a href="javascipt:void(0)">Description Required!</a>
//                                                 <a href="javascipt:void(0)">Text Formatting</a>
//                                                 <a href="javascipt:void(0)">Link Link Hyperlink</a>
//                                                 <a href="javascipt:void(0)">BOOM! We are done.</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/3.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up ls-is-cached lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/3.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         Learn Basic Styling
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 3</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingThree">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 8 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">Recap:Text Formatting Tags</a>
//                                                 <a href="javascipt:void(0)">Time for some Styling</a>
//                                                 <a href="javascipt:void(0)">Changing Text Color</a>
//                                                 <a href="javascipt:void(0)">Playing with Text Size</a>
//                                                 <a href="javascipt:void(0)">Text Alignment</a>
//                                                 <a href="javascipt:void(0)">New Fonts for your Text</a>
//                                                 <a href="javascipt:void(0)">Changing Background Color</a>
//                                                 <a href="javascipt:void(0)">A Little more...</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/4.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up ls-is-cached lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/4.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         HTML Lists and Tables
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 4</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingFour">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 13 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">Time to Move On</a>
//                                                 <a href="javascipt:void(0)">Listifying the Content</a>
//                                                 <a href="javascipt:void(0)">Ordered Lists</a>
//                                                 <a href="javascipt:void(0)">Customizations in List</a>
//                                                 <a href="javascipt:void(0)">List inside List</a>
//                                                 <a href="javascipt:void(0)">Introduction to Tables</a>
//                                                 <a href="javascipt:void(0)">Rows in a Table</a>
//                                                 <a href="javascipt:void(0)">Column in a Row</a>
//                                                 <a href="javascipt:void(0)">More Rows and Columns</a>
//                                                 <a href="javascipt:void(0)">Table Body and Head</a>
//                                                 <a href="javascipt:void(0)">Adding Heading to Columns</a>
//                                                 <a href="javascipt:void(0)">Customizing your Table</a>
//                                                 <a href="javascipt:void(0)">Time for some Exercise</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/5.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up ls-is-cached lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/5.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         Create a Web Portfolio
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 5</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingFive">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 10 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">My Web Portfolio</a>
//                                                 <a href="javascipt:void(0)">Lay down the Structure</a>
//                                                 <a href="javascipt:void(0)">Start from the Top</a>
//                                                 <a href="javascipt:void(0)">Name the King!</a>
//                                                 <a href="javascipt:void(0)">Small Tagline about yout</a>
//                                                 <a href="javascipt:void(0)">A Little more about you</a>
//                                                 <a href="javascipt:void(0)">Showcase your Hobbies</a>
//                                                 <a href="javascipt:void(0)">A Table for something</a>
//                                                 <a href="javascipt:void(0)">Stuff the Table up</a>
//                                                 <a href="javascipt:void(0)">Wow! It looks great</a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="accordion-item">
//                                         <div className="row align-items-center">
//                                             <div className="col-md-2 col-3">
//                                                 <img
//                                                     data-src="https://static.studytonight.com/code/html-course/resources/6.png"
//                                                     alt="Level 1"
//                                                     className="img-fluid blur-up ls-is-cached lazyloaded"
//                                                     height="100px"
//                                                     width="100px"
//                                                     src="https://static.studytonight.com/code/html-course/resources/6.png"
//                                                 />
//                                             </div>
//                                             <div className="col-md-10 col-9">
//                                                 <div className="top_heading">
//                                                     <h2>
//                                                         HTML Primes: div and span
//                                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDD" className="bi bi-check-circle-fill text-success" viewBox="0 0 18 18">
//                                                             <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
//                                                         </svg>
//                                                     </h2>
//                                                     <span className="">LEVEL 6</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <h2 className="accordion-header" id="headingSix">
//                                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#4f4f4f" className="bi bi-list" viewBox="0 0 18 16">
//                                                     <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
//                                                 </svg>
//                                                 5 Lessons
//                                             </button>
//                                         </h2>
//                                         <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionSingleCategory">
//                                             <div className="accordion-body">
//                                                 <a href="javascipt:void(0)">Divine Separation</a>
//                                                 <a href="javascipt:void(0)">Deep Dive into </a>
//                                                 <a href="javascipt:void(0)">What the SPAN!</a>
//                                                 <a href="javascipt:void(0)">DIV vs SPAN</a>
//                                                 <a href="javascipt:void(0)">The End</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main-content>
//         </div>
//     )
// }
