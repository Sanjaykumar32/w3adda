import React from 'react'
import Headerdropdown from '../mega_dropdown/dropdown'

export default function Header() {
    return (
        <>
            <header className="header" id="header">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-8 col-md-4 col-sm-4">
                            <div className="d-flex align-items-center">
                                <div className="d-lg-none">
                                    <button className="btn p-0 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                                        </svg>
                                    </button>
                                </div>

                                <a className="navbar-brand" href="https://www.w3adda.com/">
                                    <img src="/assets/images/logo.png" alt="Logo" className="img-fluid" />
                                </a>

                                <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
                                    <div className="collapse navbar-collapse" id="topNavbarContent">
                                        <div
                                            className="d-flex align-items-center justify-content-between px-3 d-lg-none"
                                        >
                                            <a className="navbar-brand" href="https://www.w3adda.com/"><img src="./assets/images/logo.png" alt="Logo Image" className="img-fluid" /></a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <img src="./assets/images/close.svg" alt="Sidebar Close Icon" width="15" />
                                            </button>
                                        </div>
                                        <ul className="navbar-nav me-auto">
                                            <li className="nav-item dropdown mega-dropdown">
                                                <a className="nav-link" href="javascript:void(0)">
                                                    Learn
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                                    </svg>
                                                </a>
                                                {/* <div className="menu container">
                                                    <div className="main_dropdown">
                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)" className="">
                                                                    <span><img alt="C Lang" className="blur-up ls-is-cached lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c.svg" width="25px" height="25px" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c.svg" /></span>
                                                                    <span className="cat_text">C Language</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew active">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" alt="C Tutorial" className="mega-link"><h3>C TUTORIAL</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Overview of C Language</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Compile &amp; Run C Code</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">What are Variables?</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">C Operators (with Examples)</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" alt="C programs" className="mega-link"><h3>C PROGRAMS</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Armstrong Number Program</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Check Number is Odd/Even</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">First n Prime Numbers</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Reverse String using Pointer</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all Programs (100+) →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 18 18">
                                                                                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                                                                                </svg>
                                                                                INTERVIEW TESTS
                                                                            </h3>
                                                                            <p className="text-muted"><small>MCQs to test your C language knowledge.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-warning text-dark">C Tests →</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code" viewBox="0 0 18 18">
                                                                                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                                                                                </svg>
                                                                                EXECUTE CODE
                                                                            </h3>
                                                                            <p className="text-muted"><small>Run C programs and code examples online.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-danger">C Compiler →</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span>
                                                                        <img 
                                                                        alt="Cpp"
                                                                         className="blur-up ls-is-cached lazyloaded" 
                                                                         src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg"
                                                                          width="23px" 
                                                                          height="25px"
                                                                            />
                                                                            </span>
                                                                    <span className="cat_text">C++ Language</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>

                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>C++ TUTORIAL</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">C++ Datatypes and Modifiers</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><code>sizeof</code> and <code>typedef</code></a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Create ClassNclassName and Object</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>C++ PROGRAMS</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Check if Number is Positive/Negative</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Half Pyramid with Numbers</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Floyd's Triangle</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all Programs (100+) →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row border-bottom border-top">
                                                                    <div className="col-md-12">
                                                                        <div className="p-3">
                                                                            <div>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Data Structures →</a>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Standard Template Library →</a>
                                                                            </div>
                                                                            <div className="mt-3">
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Advanced Data Structures →</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 18 18">
                                                                                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                                                                                </svg>
                                                                                INTERVIEW TESTS
                                                                            </h3>
                                                                            <p className="text-muted"><small>MCQs to test your C++ language knowledge.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-warning text-dark">C++ Tests →</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code" viewBox="0 0 18 18">
                                                                                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                                                                                </svg>
                                                                                EXECUTE CODE
                                                                            </h3>
                                                                            <p className="text-muted"><small>Run C++ programs and code examples online.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-danger">C++ Compiler →</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span>
                                                                        <img 
                                                                        alt="Python"
                                                                         className="blur-up ls-is-cached lazyloaded"
                                                                          src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-python.svg"
                                                                           width="25px" 
                                                                           height="25px"
                                                                            />
                                                                            </span>
                                                                    <span className="cat_text">Python</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>PYTHON TUTORIAL</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Python Installation &amp; Setup</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Concept of OOP &amp; ClassNclassName</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Access Modifiers</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>Python Projects →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>PYTHON HOW TOS</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Print Colored Text in Python</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Remove Numbers from String</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Compare two Dates</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all How Tos (80+) →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row border-bottom border-top">
                                                                    <div className="col-md-12">
                                                                        <div className="p-3">
                                                                            <div>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Tkinter →</a>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Matplotlib →</a>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">NumPy →</a>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Python Programs →</a>
                                                                            </div>
                                                                            <div className="mt-3">
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Network Programming →</a>
                                                                                <a href="javascript:void(0)" className="mega-link-pill">Web Scraping →</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 18 18">
                                                                                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                                                                                </svg>
                                                                                INTERVIEW TESTS
                                                                            </h3>
                                                                            <p className="text-muted"><small>MCQs to test your Python knowledge.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-warning text-dark">Python Tests →</a></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code" viewBox="0 0 18 18">
                                                                                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                                                                                </svg>
                                                                                EXECUTE CODE
                                                                            </h3>
                                                                            <p className="text-muted"><small>Run Python code examples in browser.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-danger">Python Compiler →</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span>
                                                                        <img
                                                                            alt="Java"
                                                                            className="blur-up ls-is-cached lazyloaded"
                                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java.svg"
                                                                            width="20"
                                                                            height="37"
                                                                        /></span>
                                                                    <span className="cat_text">Core Java</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6" id="mega-dropdown-topfixed-lopt">
                                                                        <a href="javascript:void(0)">
                                                                            <div className="px-3 py-2">
                                                                                <div className="row mega-dropdown-topfixed">
                                                                                    <div className="col-md-2 align-self-center">
                                                                                        <div className="mega-link-iconbox">
                                                                                            <span>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-ui-checks-grid" viewBox="0 0 18 18">
                                                                                                    <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"></path>
                                                                                                </svg>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <div className="ms-2 text-muted">
                                                                                            <div className="mega-link-text">JAVA TESTS</div>
                                                                                            <div><small>MCQs to test your Java knowledge.</small></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-6" id="mega-dropdown-topfixed-ropt">
                                                                        <a href="javascript:void(0)">
                                                                            <div className="px-3 py-2">
                                                                                <div className="row mega-dropdown-topfixed">
                                                                                    <div className="col-md-2 text-center">
                                                                                        <div className="mega-link-iconbox">
                                                                                            <span>
                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code" viewBox="0 0 18 18">
                                                                                                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                                                                                                </svg>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <div className="ms-2 text-muted">
                                                                                            <div className="mega-link-text">EXECUTE JAVA CODE</div>
                                                                                            <div><small>Run Java code in browser.</small></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-6 mt-1">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>JAVA TUTORIAL</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Setting Java Environment</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Concept of Constructor</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-1">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link"><h3>JAVA CODE EXAMPLES</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Running a JAR File</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Serialization and Deserialization</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all Examples (80+) →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="Spring Framework" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java-spring.svg" width="20" height="20" />
                                                                                        SPRING TUTORIAL
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Spring Framework</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Spring Boot</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Spring Security</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" alt="Core Java Tutorial" className="mega-link"><h3>MORE IN JAVA</h3></a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Java Library Functions</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Type Conversion Examples</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Java 11 Features</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span>
                                                                        <img
                                                                            alt="Computer Science"
                                                                            className="blur-up ls-is-cached lazyloaded"
                                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer.svg"
                                                                            width="20px"
                                                                            height="37px"
                                                                        />
                                                                    </span>
                                                                    <span className="cat_text">Computer Science</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3 className="text-muted fs-6">
                                                                                        <img alt="CAO" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer.svg" width="20" height="20" />
                                                                                        COMPUTER ARCHITECTURE
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Basics Of Digital Components</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Different type of Logic gates</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Memory organization</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3 className="text-muted fs-6">
                                                                                        <img alt="Computer Network" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer-network.svg" width="20" height="20" />
                                                                                        COMPUTER NETWORK
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Types of Computer Networks</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Transmission Mediums</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">ISO/OSI model</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3 className="text-muted fs-6">
                                                                                        <img alt="Operating System" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-operating-system.svg" width="20" height="20" />
                                                                                        OPERATING SYSTEM
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Types of Operating System</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Process Scheduling</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">CPU Scheduling</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">First come First Serve</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Shortest Job First</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">ClassNclassNameical Synchronization Problem</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">What are Semaphores?</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">What are Deadlocks?</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span><img alt="DBMS"
                                                                        className="blur-up ls-is-cached lazyloaded"
                                                                        src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-sql.svg"
                                                                        width="25px"
                                                                        height="25px"
                                                                    />
                                                                    </span>
                                                                    <span>Database</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>DBMS &amp; SQL</h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">ER Model</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Relational Algebra &amp; Calculus</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Types of DBMS Keys</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Database Normalization</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>PL/SQL</h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">Datatypes in PL/SQL</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">PL/SQL Procedures</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">How to create Cursor?</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="p-3">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" alt="C Tutorial" className="mega-link">
                                                                                    <h3>MongoDB</h3>
                                                                                </a>
                                                                            </div>
                                                                            <div className="mega-url-list">
                                                                                <p><a className="mega-link" href="javascript:void(0)">MongoDB vs. RDBMS</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Installing MongoDB</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)">Using MongoDB with Java</a></p>
                                                                                <p><a className="mega-link" href="javascript:void(0)"><b>See all →</b></a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="p-3">
                                                                            <h3>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-code" viewBox="0 0 18 18">
                                                                                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"></path>
                                                                                </svg>
                                                                                EXECUTE SQL</h3>
                                                                            <p className="text-muted"><small>Practice SQL Query in browser with sample Dataset.</small></p>
                                                                            <div><a href="javascript:void(0)" className="btn btn-danger">Run SQL Query →</a></div>
                                                                            <div className="mt-3"><a className="mega-link" href="javascript:void(0)">(Learn SQL Queries)</a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="tutorial_section">
                                                            <div className="toggle">
                                                                <a href="javascript:void(0)">
                                                                    <span className="cat_text">More...</span>
                                                                    <span className="float-end">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ed639e" viewBox="0 0 16 16">
                                                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <div className="slidenew">
                                                                <div className="row">
                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="px-3 pt-3 pb-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="Android" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-android.svg" width="24" height="24" />
                                                                                        <span className="ms-2">ANDROID DEVELOPMENT</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="GO" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-golang.svg" width="24" height="24" />
                                                                                        <span className="ms-2">GO LANGUAGE</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="linux" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-linux-system-administration.svg" width="24" height="24" />
                                                                                        <span className="ms-2">LINUX</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="docker" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-docker.svg" width="24" height="24" />
                                                                                        <span className="ms-2">DOCKER</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="HTML" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-html-5.svg" width="24" height="24" />
                                                                                        <span className="ms-2">HTML TAGS (A to Z)</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="css" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg" width="24" height="24" />
                                                                                        <span className="ms-2">CSS REFERENCES</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3 className="text-muted fs-6">
                                                                                        <img alt="sass" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg" width="24" height="24" />
                                                                                        <span className="ms-2">SASS/SCSS</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-6 mt-2">
                                                                        <div className="px-3 pt-3 pb-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="kotlin" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-kotlin.svg" width="24" height="24" />
                                                                                        <span className="ms-2">KOTLIN</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="unity 3d" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-game-design.svg" width="24" height="24" />
                                                                                        <span className="ms-2">GAME DEVELOPMENT</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="php" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-php.svg" width="24" height="24" />
                                                                                        <span className="ms-2">PHP</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="git" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-git.svg" width="24" height="24" />
                                                                                        <span className="ms-2">GIT GUIDE</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3>
                                                                                        <img alt="javascript" className="lazyload blur-up" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-javascript.svg" width="24" height="24" />
                                                                                        <span className="ms-2">JAVASCRIPT</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="px-3 py-2">
                                                                            <div className="mb-3">
                                                                                <a href="javascript:void(0)" className="mega-link">
                                                                                    <h3 className="text-muted fs-6">
                                                                                        <img alt="dsa" className="lazyload blur-up" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-ds.svg" width="24" height="24" />
                                                                                        <span className="ms-2">ADVANCED DSA</span>
                                                                                    </h3>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div >
                                                    <Headerdropdown/>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0)">Tests</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0)">Forum</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0)">Curious</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="javascript:void(0)">
                                                    Learn Web Dev
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                                    </svg>
                                                </a>
                                                <div className="menu">
                                                    <ul>
                                                        <li className="info">Interactive Courses, where you Learn by doing. Available for FREE!</li>
                                                        <li><a href="javascript:void(0)"><img alt="HTML" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-html-5.svg" />HTML</a></li>
                                                        <li><a href="javascript:void(0)"><img alt="CSS" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg" />CSS</a></li>
                                                        <li><a href="javascript:void(0)"><img alt="Javascript" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-javascript.svg" />JavaScript</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="search_box d-none d-md-block">
                                <input type="text" className="form-control" name="q" value="" placeholder="Search topics, tutorials, questions and answers..." id="s" />
                                <button type="submit" className="btn" id="searchsubmit" value="Submit">
                                    <img src="/assets/images/search.svg" alt="Search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel" className="mb-0">
                            <a className="navbar-brand" href="https://www.w3adda.com/">
                                <img src="./assets/images/logo.png" alt="Logo" className="img-fluid" />
                            </a>
                        </h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseInteractive" role="button" aria-expanded="false" aria-controls="collapseInteractive" className="collapsed">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="Interactive Learning" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-intro-to-programming.svg" width="25" height="25" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-intro-to-programming.svg" /></span>
                                <span>Interactive Learning</span>
                            </a>
                            <div className="my-2 collapse" id="collapseInteractive">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Learn HTML</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Learn CSS</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Learn JavaScript</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseC" role="button" aria-expanded="false" aria-controls="collapseC">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="C Lang" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c.svg" width="25" height="25" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c.svg" /></span><span>C Language</span>
                            </a>
                            <div className="collapse my-2" id="collapseC">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">C Tutorial</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">C Programs (100+)</a>
                                    </div>
                                    <div className="mt-3 rounded bg-warning p-2">
                                        <a href="javascript:void(0)">
                                            <div>C Compiler</div>
                                            <div><small>Execute C programs online.</small></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseCpp" role="button" aria-expanded="false" aria-controls="collapseCpp">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="Cpp" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg" width="25" height="28" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg" /></span><span>C++ Language</span>
                            </a>
                            <div className="collapse my-2" id="collapseCpp">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">C++ Tutorial</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Standard Template Library</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">C++ Programs (100+)</a>
                                    </div>
                                    <div className="mt-3 rounded bg-primary-light p-2">
                                        <a href="javascript:void(0)">
                                            <div>C++ Compiler</div>
                                            <div><small>Execute C++ programs online.</small></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapsePython" role="button" aria-expanded="false" aria-controls="collapsePython">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="Python" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-python.svg" width="25" height="25" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-python.svg" /></span><span>Python</span>
                            </a>
                            <div className="collapse my-2" id="collapsePython">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Python Tutorial</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Python Projects</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Python Programs</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Python How Tos</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Numpy Module</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Matplotlib Module</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Tkinter Module</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Network Programming with Python</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Learn Web Scraping</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">More in Python...</a>
                                    </div>
                                    <div className="mt-3 rounded bg-warning p-2">
                                        <a href="javascript:void(0)">
                                            <div>Python Compiler</div>
                                            <div><small>Execute Python code online.</small></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseJava" role="button" aria-expanded="false" aria-controls="collapseJava">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="Java" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java.svg" width="22" height="27" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java.svg" /></span>
                                <span className="ms-2 ">Java</span>
                            </a>
                            <div className="collapse my-2" id="collapseJava">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Core Java Tutorial</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Java Programs (100+)</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Java Code Examples (100+)</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Servlet</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">JSP - Java Server Pages</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Java Type Conversion Examples</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Java Wrapper ClassNclassName</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Spring Framework</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Java 11</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">More in Java...</a>
                                    </div>
                                    <div className="mt-3 rounded bg-primary-light p-2">
                                        <a href="javascript:void(0)">
                                            <div>Java Compiler</div>
                                            <div><small>Execute Java code online.</small></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseCS" role="button" aria-expanded="false" aria-controls="collapseCS">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="CAO" className="blur-up ls-is-cached lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer.svg" width="20px" height="37px" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer.svg" /></span>
                                <span className="ms-2 ">Computer Sci. (GATE)</span>
                            </a>
                            <div className="collapse my-2" id="collapseCS">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Operating System</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Computer Architecture</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Computer Network</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseDB" role="button" aria-expanded="false" aria-controls="collapseDB">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span><img alt="DB" className="blur-up lazyloaded" data-src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-sql.svg" width="25" height="25" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-sql.svg" /></span>
                                <span className="ms-2 ">Database</span>
                            </a>
                            <div className="collapse my-2" id="collapseDB">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">DBMS</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">Learn SQL</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">MongoDB</a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">PL/SQL</a>
                                    </div>
                                    <div className="mt-3 rounded bg-primary-light p-2">
                                        <a href="javascript:void(0)">
                                            <div>Practice SQL</div>
                                            <div><small>Execute SQL Queries online.</small></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tutorial_link">
                            <a data-bs-toggle="collapse" href="#collapseMore" role="button" aria-expanded="false" aria-controls="collapseMore">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrow" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                </svg>
                                <span className="ms-2 ">More Tutorials...</span>
                            </a>
                            <div className="collapse my-2" id="collapseMore">
                                <div className="ms-4">
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Android" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-android.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Android</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Kotlin" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-kotlin.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Kotlin</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Game Dev" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-unity.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Game Development</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="GO Language" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-golang.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">GO Language</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="GIT Guide" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-git.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">GIT Guide</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Linux Guide" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-linux-system-administration.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Linux Guide</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Docker" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-docker.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Docker</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Spring Framework" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java-spring.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">Spring Boot</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="PHP" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-php.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">PHP</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="HTML Tags" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-html-5.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">HTML Tags (A to Z)</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="CSS" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">CSS</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="Javascript" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-javascript.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">JavaScript</span>
                                        </a>
                                    </div>
                                    <div className="mt-3">
                                        <a href="javascript:void(0)">
                                            <span><img alt="SASS" className="lazyload blur-up" src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg" width="25" height="25" /></span>
                                            <span className="ms-2 ">SASS/SCSS</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
