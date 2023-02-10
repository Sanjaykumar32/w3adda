// import React from 'react'
// import Leftmenu from '../LeftMenu/leftmenu'
// import { client } from '../../lib/apollo';
// import { gql } from "@apollo/client";

// export const PostDetailsPage = ({ post, categories }) => {



//   return (
//     <>
//       <main-content className="main-content">
//         <div className="split_box">
//           <aside className="aside_nav">
//             <button
//               className="navbar-toggler center d-lg-none"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#asideNavbarContent"
//               aria-controls="asideNavbarContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="#ffffff"
//                 className="bi bi-list"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//                 ></path>
//               </svg>
//               Index
//             </button>
//             <nav className="navbar navbar-expand-lg navbar-light">
//               <div className="collapse navbar-collapse" id="asideNavbarContent">
//                 <div className="py-2 px-3 d-lg-none">
//                   <button
//                     className="navbar-toggler ms-auto"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#asideNavbarContent"
//                     aria-controls="asideNavbarContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                   >
//                     <img
//                       src="./assets/images/close.svg"
//                       alt="Sidebar Close Icon"
//                       width="15"
//                     />
//                   </button>
//                 </div>

//                 {
//                   categories.edges.map((cat, kk) => {
//                     return (
//                       <Leftmenu key={kk} cat={cat} />

//                     )
//                   })
//                 }
//                 {/* <div className="accordion" id="accordionExample">
//                 <div className="accordion-item">
//                   <h2 className="accordion-header" id="headingOne">
//                     <button
//                       className="accordion-button"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#collapseOne"
//                       aria-expanded="true"
//                       aria-controls="collapseOne"
//                     >
//                       WEB DEVELOPMENT
//                     </button>
//                   </h2>
//                   <div
//                     id="collapseOne"
//                     className="accordion-collapse collapse show"
//                     aria-labelledby="headingOne"
//                     data-bs-parent="#accordionExample"
//                   >
//                     <div className="accordion-body">
//                       <ul className="navbar-nav">
//                         <li className="nav-item">
//                           <a className="nav-link active" href="javascript:void(0)">
//                             HTML Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             CSS Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >AJAX Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             PHP Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >MySql Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >XML Tutorial</a
//                           >
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header" id="headingTwo">
//                     <button
//                       className="accordion-button collapsed"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#collapseTwo"
//                       aria-expanded="false"
//                       aria-controls="collapseTwo"
//                     >
//                       WEB DEVELOPMENT
//                     </button>
//                   </h2>
//                   <div
//                     id="collapseTwo"
//                     className="accordion-collapse collapse"
//                     aria-labelledby="headingTwo"
//                     data-bs-parent="#accordionExample"
//                   >
//                     <div className="accordion-body">
//                       <ul className="navbar-nav">
//                         <li className="nav-item">
//                           <a className="nav-link active" href="javascript:void(0)">
//                             HTML Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             CSS Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >AJAX Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             PHP Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >MySql Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >XML Tutorial</a
//                           >
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="accordion-item">
//                   <h2 className="accordion-header" id="headingThree">
//                     <button
//                       className="accordion-button collapsed"
//                       type="button"
//                       data-bs-toggle="collapse"
//                       data-bs-target="#collapseThree"
//                       aria-expanded="false"
//                       aria-controls="collapseThree"
//                     >
//                       WEB DEVELOPMENT
//                     </button>
//                   </h2>
//                   <div
//                     id="collapseThree"
//                     className="accordion-collapse collapse"
//                     aria-labelledby="headingThree"
//                     data-bs-parent="#accordionExample"
//                   >
//                     <div className="accordion-body">
//                       <ul className="navbar-nav">
//                         <li className="nav-item">
//                           <a className="nav-link active" href="javascript:void(0)">
//                             HTML Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             CSS Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >AJAX Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)">
//                             PHP Tutorial
//                           </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >MySql Tutorial</a
//                           >
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="javascript:void(0)"
//                             >XML Tutorial</a
//                           >
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//               </div>
//             </nav>
//           </aside>

//           <div className="middle_content">
//             <div className="top_heading">
//               <h1>Operators in C++</h1>
//             </div>

//             <div className="category_content">
//               <p>Operators are special type of <a href="javascript:void(0)" target="_blank">functions</a>, that takes one or more arguments and produces a new value. For example : addition (+), substraction (-), multiplication (*) etc, are all operators. Operators are used to perform various operations on variables and constants.</p>

//               <h2>Types of operators</h2>
//               <ol className="order_list">
//                 <li>Assignment Operator</li>
//                 <li>Mathematical Operators</li>
//                 <li>Relational Operators</li>
//                 <li>Logical Operators</li>
//                 <li>Bitwise Operators</li>
//                 <li>Shift Operators</li>
//                 <li>Unary Operators</li>
//                 <li>Ternary Operator</li>
//                 <li>Comma Operator</li>
//               </ol>

//               <h3>Assignment Operator (<code>=</code>)</h3>
//               <p>Operates '=' is used for assignment, it takes the right-hand side (called rvalue) and copy it into the left-hand side (called lvalue). Assignment operator is the only operator which can be overloaded but cannot be inherited.</p>
//               <hr />

//               <h3>Mathematical Operators</h3>
//               <p>There are operators used to perform basic mathematical operations. Addition (+) , subtraction (-) , diversion (/) multiplication (*) and modulus (%) are the basic mathematical operators. Modulus operator cannot be used with floating-point numbers.</p>
//               <p>C++ and <a href="javascript:void(0)" target="_blank">C</a> also use a shorthand notation to perform an operation and assignment at same type. Example,</p>

//               <div className="code_example_box">
//                 <div className="code_example">
//                   <p>int x=<span className="number">10</span>;</p>
//                   <p>x += <span className="token number">4</span><span className="comment">// will add 4 to 10, and hence assign 14 to X.</span></p>
//                   <p>x -= <span className="token number">5</span><span className="comment">// will subtract 5 from 10 and assign 5 to X.</span></p>
//                 </div>
//                 <div className="text_copy_btn">
//                   <button className="copy_btn" type="button" data-copy-state="copy">Copy</button>
//                 </div>
//               </div>
//               <hr />

//               <h3>Relational Operators</h3>
//               <p>These operators establish a relationship between operands. The relational operators are : less than {('(<)')} , grater thatn {('(>)')} , less than or equal to {('(<=)')}, greater than equal to {('(>=)')}, equivalent (==) and not equivalent (!=).</p>
//               <p>You must notice that assignment operator is (=) and there is a relational operator, for equivalent (==). These two are different from each other, the assignment operator assigns the value to any <a href="javascript:void(0)" target="_blank">Variables</a>, whereas equivalent operator is used to compare values, like in if-else conditions, Example</p>
//               <div className="code_example_box">
//                 <div className="code_example">
//                   <p>int x = <span className="number">10</span>;<span className="comment">//assignment operator</span></p>
//                   <p>x=<span className="token number">5</span>;<span className="comment">// again assignment operator</span></p>
//                   <p><span className="keyword">if</span>(x == <span className="token number">5</span>)<span className="comment">// here we have used equivalent relational operator, for comparison</span></p>
//                   <p>
//                     <span>{('{')}</span>
//                     <br />
//                     <span className="space"> {('cout <<')} </span>
//                     <span className="string">"Successfully compared"</span>;
//                     <br />
//                     <span>{('}')}</span>
//                   </p>
//                 </div>
//                 <div className="text_copy_btn">
//                   <button className="copy_btn" type="button" data-copy-state="copy">Copy</button>
//                 </div>
//               </div>
//               <hr />

//               <h2>Table Formate Informations</h2>
//               <div className="table-responsive">
//                 <table className="table table-striped border">
//                   <thead>
//                     <tr>
//                       <th>Sr.</th>
//                       <th>First Name</th>
//                       <th>Last Name</th>
//                       <th>Contact</th>
//                       <th>E-mail</th>
//                       <th>Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                     <tr>
//                       <td>1</td>
//                       <td>John</td>
//                       <td>Doe</td>
//                       <td>9876543210</td>
//                       <td>johndoe778@gmail.com</td>
//                       <td>Active</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>

//               <h2>Logical Operators</h2>
//               <p>The logical operators are AND (&&) and OR (||). They are used to combine two different expressions together.</p>
//               <p>If two statement are connected using AND operator, the validity of both statements will be considered, but if they are connected using OR operator, then either one of them must be valid. These operators are mostly used in <a href="javascript:void(0)" target="_blank">loops</a> (especially <code>while</code> loop) and in Decision making.</p>

//               <h2>Bitwise Operators</h2>
//               <p>There are used to change individual bits into a number. They work with only integral <a href="javascript:void(0)" target="_blank">data types</a> like <code>char</code>, <code>int</code> and <code>long</code> and not with floating point values.</p>
//               <ul>
//                 <li>Bitwise AND operators <code>&amp;</code> </li>
//                 <li>Bitwise OR operator <code>|</code> </li>
//                 <li>And bitwise XOR operator <code>^</code></li>
//                 <li>And, bitwise NOT operator <code>~</code></li>
//               </ul>
//               <p>They can be used as shorthand notation too, <code>&amp; =</code> , <code>|=</code> , <code>^=</code> , <code>~=</code> etc.</p>
//             </div>
//           </div>

//           <div className="right_content d-none d-xl-block">
//             <div className="content_box mt-2 border-danger">
//               <a href="javascript:void(0)">
//                 <h4>
//                   <img alt="Cpp"
//                     src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg"
//                     width="25px"
//                     height="28px"
//                   />&nbsp; STL Tutorial
//                 </h4>
//                 <div className="mt-2 text-dark">Standard Template Library in C++.</div>
//                 <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
//               </a>
//             </div>
//             <div className="content_box border-primary">
//               <a href="javascript:void(0)">
//                 <h4>
//                   <img
//                     alt="Cpp"
//                     src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-ds.svg"
//                     width="25px"
//                     height="28px"
//                   />&nbsp; Data Structures &amp; Algo
//                 </h4>
//                 <div className="mt-2 text-dark">Learn DSA in C++.</div>
//                 <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
//               </a>
//             </div>
//             <div className="content_box border-warning">
//               <a href="javascript:void(0)">
//                 <h4><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-ui-checks-grid text-danger" viewBox="0 0 18 18">
//                   <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
//                 </svg>&nbsp; C++ MCQ Tests</h4>
//                 <div className="mt-2 text-dark">Prepare for TCS, Infosys, etc.</div>
//                 <div className="mt-3 text-dark"><button className="btn primary_btn">Explore</button></div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </main-content>
//     </>
//   )
// }

// export async function getServerSideProps({ params }) {

//   console.log(params)
//   const GET_POST = gql`
//     query GetPostByURI($id: ID!) {
//       post(id: $id, idType: SLUG) {
//         title
//         content
//         date
//         author {
//           node {
//             firstName
//             lastName
//           }
//         }
//         categories(where: {parent: 0}) {
//           nodes {
//             name
//             databaseId
//           }
//         }
//       }
//     }
//   `
//   //  the params argument for this function corresponds to the dynamic URL segments
//   //  we included in our page-based route. So, in this case, the `params` object will have
//   //  a property named `uri` that contains that route segment when a user hits the page
//   const response = await client.query({
//     query: GET_POST,
//     variables: {
//       id: params.slug[1]
//     }
//   })
//   const post = response?.data?.post

//   // Get sidebar menu
//   const GET_SIDEBAR_MENU = gql`
//     query GetSidebarMenuByCategory($id: Int) {
//       categories(where: {parent: $id}) {
//         edges {
//           node {
//             id
//             name
//             posts {
//               edges {
//                 node {
//                   id
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `
//   const sbm_response = await client.query({
//     query: GET_SIDEBAR_MENU,
//     variables: {
//       id: response?.data?.post?.categories?.nodes[0]?.databaseId
//     }
//   })
//   const categories = sbm_response?.data?.categories
//   console.log(sbm_response)

//   return {
//     props: {
//       post,
//       categories
//     }
//   }
// }
