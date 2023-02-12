import { useRouter } from "next/router"
import { useState } from "react"


const Leftmenu = ({ cat, setClose }) => {
    const [data, setData] = useState([])

    const router = useRouter()
    const handleRoute = (link) => {
        setClose(false)
        router.push(`/c-tutorial/${link}`)
    }

    const handleDropDown = (el) => {
        setData(el)
        console.log(el, 'el data')
    }



    return (
        <>
            {/* <ul>
                {cat.node.name}
                {
                    cat.node.posts.edges.map((p) =>
                        <li>{p.node.title}</li>
                    )
                }
            </ul> */}

            {/* < div className="accordion-item" >
                {cat?.edges?.map((el, index) => {
                    //  console.log(el ,'top map ')
                    return (
                        <>
                            <h2 className="accordion-header"  key={index}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle={el.node.id}
                                    data-bs-target={el.node.id}
                                    aria-expanded="true"
                                    aria-controls={el.node.id}
                                    // onClick={()=> handleDropDown(el.node.id)}
                                >
                                    {el?.node?.name}
                                </button>
                            </h2>
                            <div
                                id={el.node.id}
                                className={`accordion-collapse collapse drop show  ${data == el.node.id ? 'show' : ''}`}
                                aria-labelledby={el.node.id}
                                data-bs-parent={el.node.id}
                            >
                                <div className="accordion-body">
                                    <ul className="navbar-nav">

                                        {el?.node?.posts?.edges?.map((item, index) => {
                                          
                                            return (
                                                <li className="nav-item" key={index}>
                                                    <span className="nav-link active" onClick={() => handleRoute(item.node.slug)}>
                                                        {item.node.title}
                                                    </span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                })}


            </div > */}

            <div className="bodys">

                <div class="container">
                    <div class="faq-drawer">
                        {cat?.edges?.map((el, index) => {
                            return (
                                <>
                                    <input class="faq-drawer__trigger" id={el.node.id} type="checkbox" />
                                    <label class="faq-drawer__title" for={el.node.id}>  {el?.node?.name} </label>
                                    <div class="faq-drawer__content-wrapper ">
                                        <div class="faq-drawer__content ">
                                              <ul className="ulpadding">

                                             
                                                    {el?.node?.posts?.edges?.map((item, index) => {

                                                        return (
                                                            <li className="nav-item colorler" key={index}>
                                                                <span className="nav-link white active" onClick={() => handleRoute(item.node.slug)}>
                                                                    {item.node.title}
                                                                </span>
                                                            </li>


                                                        )
                                                    })}
                                                     </ul>
                                            
                                            </div>
                                        </div>
                                    </>
                                    )
                        })}




                                </div>
                </div>
                </div>


            </>
            )
}
            export default Leftmenu





