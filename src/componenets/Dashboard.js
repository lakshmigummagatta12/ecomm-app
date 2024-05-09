import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllProducts } from "../apiCalls"
import { toast } from "react-toastify"

export const Dashboard = () => {
    const navigate = useNavigate()

    const [products, setProducts]= useState([])

    const loadProducts = async()=>{
        try{
            const response = await getAllProducts()
            if (response.status===200){
                setProducts(response.data)
            }
        }catch(error){
            toast.error("unable to load products")
        }
    }

    useEffect(()=> {
        loadProducts()
    }, [])

    const handleLogout = () =>{
        localStorage.removeItem("ecom-token")
        navigate("/login")
    }
    return (
        <>
            <div>
                <h1>My Ecom Project</h1>
            </div>
            <div className="logout-btn">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>

           <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}} >
                {
                    products.map((product,index)=>{
                        return(
                            
                            <div className="card " style={{width: "18rem"}} key= {index}>
                                <div>
                                    <img className="card-img-top" src={product.image} alt="" style= {{maxHeight:"250px"}}/>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">₹ {product.price}/-</p>
                                </div>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                            
                        )
                    })
                }
           </div>
        </>
    )
}