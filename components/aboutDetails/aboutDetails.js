import React from 'react'

export default function AboutDetails() {
    return (
        <>
            <main-content className="main-content">
                <div className="static_page about_page">
                    <div className="static_page_banner">
                        <div className="banner_img_box">
                            <img
                                src="./assets/images/aboutus.png"
                                alt="About Us"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="static_page_content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="static_heading">
                                        <h1>About Us</h1>
                                    </div>
                                    <div className="static_content">
                                        <h5>
                                            Online Software Training Lessons That Works, Available 24/7
                                            Learn Almost Anything for Free.
                                        </h5>
                                        <p>
                                            w3adda.com registered and it is a popular online tutorial
                                            website from many years. Over these years of journey,
                                            w3adda.com has been able to win its users' trust.
                                        </p>
                                        <p>
                                            w3adda.com provides online teaching materials for beginners
                                            interested in web and software application development. To
                                            provide better service, w3adda.com, offers a large number of
                                            online examples that are also verified and through which the
                                            correct way to create a website can be learned.
                                        </p>
                                        <p>
                                            We are a team of professional experts in various fields of
                                            designing and software application development. Our primary
                                            focus is to provide the best content to our readers. This
                                            website is an example of the endless efforts we have spent
                                            to develop good content and improve its representation, and
                                            we are continually working on it.
                                        </p>
                                        <ul>
                                            <li>
                                                We are developing several tutorials on different topics,
                                                and they will be available soon.
                                            </li>
                                            <li>
                                                The Website content is updated in real-time based on
                                                changes in current technology trends.
                                            </li>
                                        </ul>
                                        <p className="text_note">
                                            Note: "w3adda.com" is an independent website with no
                                            connection to other websites with the same name or domain
                                            extension. The website is entirely free and always will be.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="img_box">
                                        <img
                                            src="./assets/images/aboutus-img.png"
                                            alt="About Us"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main-content>

        </>

    )
}
