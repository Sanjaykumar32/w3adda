import React from 'react'

export const CategoryDetails = () => {
    return (
        <>
            <main-content className="main-content">
                <section className="banner multy_category_banner">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-md-7">
                                <div className="banner_text">
                                    <h1 className="text_prog">W3adda</h1>
                                    <h1 className="text_edu">Library</h1>
                                    <p>
                                        <mark>6000+</mark> Free resources - Programming Language
                                        tutorials, tests, technology articles, and a lot more.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 d-none d-md-block">
                                <figure className="image">
                                    <img
                                        src="./assets/images/banner-img2.png"
                                        alt="Banner Image"
                                        className="img-fluid"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tutorials">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-4">
                                <h2
                                    className="heading d-flex align-items-center justify-content-center"
                                >
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            fill="#4535aa"
                                            className="bi bi-journal-code text-primary"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
                                            ></path>
                                            <path
                                                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                                            ></path>
                                            <path
                                                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                                            ></path>
                                        </svg>
                                    </span>
                                    TUTORIALS
                                </h2>
                                <p className="text_simplified">
                                    Simplified and detailed tutorials for programming languges.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="category_box">
                                    <h1>
                                        <figure>
                                            <img
                                                alt="Foundation"
                                                className="blur-up ls-is-cached lazyloaded"
                                                src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-intro-to-programming.svg"
                                                width="45px"
                                                height="45px"
                                            />
                                        </figure>
                                        Programming
                                    </h1>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <a href="javascript:void(0)" alt="C Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                                alt="C Lang"
                                                                className="blur-up ls-is-cached lazyloaded"
                                                                src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c.svg"
                                                                width="25px"
                                                                height="25px"
                                                        />&nbsp;&nbsp;C Langugage
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" alt="C Programs Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                            className="blur-up lazyloaded  "
                                                            src="https://static.studytonight.com/include/core/icons/purple_icons/icon_c_language.png"
                                                            style={{maxWidth: '25px'}}
                                                        />&nbsp;&nbsp;100+ C Programs
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-sm-6">
                                            <a href="javascript:void(0)" alt="C++ Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                      
                                                        <img
                                                                alt="Cpp"
                                                                className="blur-up ls-is-cached lazyloaded"
                                                                src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-c-plus-plus.svg"
                                                                width="25px"
                                                                height="25px"
                                                        />&nbsp;&nbsp;C++ Language
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" alt="C++ STL Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                            className="blur-up lazyloaded"
                                                            src="https://static.studytonight.com/include/core/icons/purple_icons/icon_c_plus_plus.png"
                                                            style={{maxWidth: '25px'}}
                                                        />&nbsp;&nbsp;STL
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" alt="C++ Programs Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                            className="blur-up lazyloaded"
                                                            src="https://static.studytonight.com/include/core/icons/purple_icons/icon_c_plus_plus.png"
                                                              style={{maxWidth: '25px'}}
                                                        />&nbsp;&nbsp;100+ C++ Programs
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" alt="Data Structure Tutorial">
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                            className="blur-up lazyloaded"
                                                            src="https://static.studytonight.com/include/core/icons/purple_icons/icon_data_structures.png"
                                                              style={{maxWidth: '25px'}}
                                                        />&nbsp;&nbsp;Data Structures &amp; Algorithm
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                href="javascript:void(0)"
                                                alt="Advanced Data Structures Tutorial"
                                            >
                                                <div
                                                    className="category_info"
                                                >
                                                    <div className="">
                                                        <img
                                                            className="blur-up lazyloaded"
                                                            src="https://static.studytonight.com/include/core/icons/purple_icons/icon_data_structures.png"
                                                              style={{maxWidth: '25px'}}
                                                        />&nbsp;&nbsp;Advanced Data Structures
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="category_box">
                                    <h1>
                                        <figure>
                                        <img
                                            alt="Web Dev"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-html-5.svg"
                                            width="45px"
                                            height="45px"
                                            
                                        />
                                    </figure>
                                    Web Development
                                </h1>
                                <div className="row flex-row">
                                    <div className="col-sm-12">
                                        <a
                                            href="javascript:void(0)"
                                            target="_blank"
                                            alt="Web Development Course"
                                        >
                                            <div
                                                className="bg-primary p-3 mt-2 mb-3 text-white rounded-3 border border-warning border-5"
                                            >
                                                <h3 className="fw-light">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="25"
                                                        height="25"
                                                        fill="currentColor"
                                                        className="bi bi-code-slash"
                                                        viewBox="0 0 18 18"
                                                    >
                                                        <path
                                                            d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                                                        ></path>
                                                    </svg>
                                                    Learn Web Development in 60 days
                                                </h3>
                                                <div className="fw-light mt-3">
                                                    20 Live classNamees, 350+ online guided coding labs, 20+
                                                    projects, and you become a web developer.
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="HTML Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_html.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;HTML Tags
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="CSS Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                
                                                    <img
                                                            alt="CSS"
                                                            className="blur-up ls-is-cached lazyloaded"
                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-css.svg"
                                                            width="25px"
                                                            height="25px"
                                                    />&nbsp;&nbsp;CSS
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Sass Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_css.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;SASS/SCSS
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="javascript Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    
                                                    <img
                                                            alt="Javascript"
                                                            className="blur-up ls-is-cached lazyloaded"
                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-javascript.svg"
                                                            width="25px"
                                                            height="25px"
                                                    />&nbsp;&nbsp;JavaScript
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="php Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <span
                                                    ><img
                                                            alt="PHP"
                                                            className="blur-up lazyloaded"
                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-php.svg"
                                                            width="25px"
                                                            height="25px"
                                                           /></span>
                                                           &nbsp;&nbsp;PHP
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Python"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-python.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Python
                                </h1>
                                <div className="row flex-row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Python Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Python Core
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            alt="Python Library Functions"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Python Library Functions
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            alt="Network Programming"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Network Programming
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Web Scraping Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Web Scraping
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Numpy Library">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;NumPy
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Matplotlib Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Matplotlib
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Tkinter Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Tkinter
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="pandas Library">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_python.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Pandas
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Java"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Java
                                </h1>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Core Java Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Core Java
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java Programs Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;100+ Java Programs
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java Examples">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;100+ Java Examples
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Servlet Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Servlet
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="JSP Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;JSP
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            alt="Java Type Conversion Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java Type Conversion
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            alt="Java Wrapper className Functions"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java Wrapper className
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Java 8 Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java 8
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java 9 Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java 9
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java 10 Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java 10
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java 11 Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java 11
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Java Util Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java Util Library
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            alt="Java File input-output function Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Java File I/O
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Game Dev"
                                            className="lazyload blur-up"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-game-design.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Game Dev
                                </h1>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="javascript:void(0)"
                                            alt="3d-game-engineering-with-unity Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="lazyload blur-up"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_unity_3d.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Game Dev using Unity 3D
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Spring"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-java-spring.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Spring
                                </h1>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a
                                            href="javascript:void(0)"
                                            alt="spring-framework Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Spring Framework
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Spring-boot Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Spring Boot
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Mobile"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-android.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Mobile App
                                </h1>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Android Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_android.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Android
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="apache-cordova Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_apache_cordova.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Apache Cordova
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="kotlin Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_kotlin.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Kotlin
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="CAO"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-computer.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Computer Sci.
                                </h1>
                                <div className="row flex-row">
                                    <div className="col-sm-6">
                                        <a
                                            href="javascript:void(0)"
                                            alt="Operating System Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_operating_system.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Operating System
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="CAO Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_computer_architecture.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Computer Architecture
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a
                                            href="javascript:void(0)"
                                            alt="Computer Networks Tutorial"
                                        >
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_computer_networks.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Computer Network
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="DBMS"
                                            className="blur-up ls-is-cached lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-sql.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Databases
                                </h1>
                                <div className="row flex-row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="DBMS Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_dbms.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;DBMS
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="SQL Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_dbms.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;SQL
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="MongoDB Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_mongo_db.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;MongoDB
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="PL/SQL Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_dbms.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;PL/SQL
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <figure>
                                        <img
                                            alt="Linux"
                                            className="blur-up lazyloaded"
                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-linux-system-administration.svg"
                                            width="45px"
                                            height="45px"
                                        />
                                    </figure>
                                    Linux
                                </h1>
                                <div className="row flex-row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Linux Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="bi bi-terminal text-primary"
                                                        viewBox="0 0 18 18"
                                                    >
                                                        <path
                                                            d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"
                                                        ></path>
                                                        <path
                                                            d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"
                                                        ></path>
                                                    </svg>
                                                    Linux
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Docker Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_docker.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Docker
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Elasticsearch Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <span
                                                    ><img
                                                            alt="Elastic Search"
                                                            className="blur-up ls-is-cached lazyloaded"
                                                            src="https://static.studytonight.com/css/resource.v3/icons/subject/logo-elastic-search.svg"
                                                            width="25px"
                                                            height="25px"
                                                        /></span>
                                                    Elasticsearch
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="category_box">
                                <h1>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        fill="currentColor"
                                        className="bi bi-stack"
                                        viewBox="0 0 16 18"
                                    >
                                        <path
                                            d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"
                                        ></path>
                                        <path
                                            d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"
                                        ></path>
                                    </svg>
                                    Misc.
                                </h1>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="Github Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_github.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Git/Github
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Scrum Framework Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_scrum_framework.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;SCRUM
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="maven Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_core_java.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Maven
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-sm-6">
                                        <a href="javascript:void(0)" alt="jenkins Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_jenkins.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Jenkins
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="drools Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_drools.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Drools
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" alt="Ruby Tutorial">
                                            <div
                                                className="category_info"
                                            >
                                                <div className="">
                                                    <img
                                                        className="blur-up ls-is-cached lazyloaded"
                                                        src="https://static.studytonight.com/include/core/icons/purple_icons/icon_ruby.png"
                                                          style={{maxWidth: '25px'}}
                                                    />&nbsp;&nbsp;Ruby
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main-content>
    </>
  )
}
