import { useRouter } from "next/router"
import { useState } from "react"


const Leftmenu = ({ cat , setClose }) => {
    const [data , setData ] = useState([])

    const router = useRouter()
    const handleRoute = (link) => {
        setClose(false)
        router.push(`/c-tutorial/${link}`)
    }

    const handleDropDown = (el)=> {
        setData(el)
         console.log(el , 'el data')
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
            < div className="accordion-item" >
                {cat?.edges?.map((el, index) => {
                    //  console.log(el ,'top map ')
                    return (
                        <>
                            <h2 className="accordion-header"  key={index}>
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    // aria-expanded="true"
                                    aria-controls="collapseOne"
                                    onClick={()=> handleDropDown(el.node.id)}
                                >
                                    {el?.node?.name}
                                </button>
                            </h2>
                            <div
                                // id="collapseOne"
                                className={`accordion-collapse collapse drop ${data == el.node.id ? 'show' : ''}`}
                                aria-labelledby="headingOne"
                                // data-bs-parent="#accordionExample"
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


            </div >

        </>
    )
}
export default Leftmenu





