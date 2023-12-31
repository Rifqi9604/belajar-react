import Button from "../components/Elements/Button/Buttons"
import CardProduct from "../components/Fragments/CardProduct"
import { useState, useEffect, useRef } from "react"
import { getProduct } from "../services/products.service"





const ProductPage   = () => {

    
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    
    const [cart, setCart] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const [products, setProducts] = useState([])


    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
    }, [])

    useEffect(() => {
        getUsername(token)
    })

    useEffect(() => {
        if (products.length > 0 && cart.length > 0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)
            setTotalPrice(sum)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart, products])

    const handleAddCart = (id) => {
            if(cart.find(item => item.id === id)){
                setCart(
                    cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item
                    ))
            }else{
                setCart([...cart, {id, qty: 1}])
            }
    }

    const totalPriceRef = useRef(null)

    useEffect(() => {
        if(cart.length > 0){
            totalPriceRef.current.style.display = "table-row"
        } else{
            totalPriceRef.current.style.display = "none"

        }
    }, [cart])

    useEffect(() => {
        getProduct((data) => {
            setProducts(data)
        })
    }, [])



    return(
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
                {email}
                <Button variant="bg-slate-600 ml-5" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="flex flex-wrap w-2/3">
                {products.length > 0 &&
                    products.map(product => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image}/>
                                <CardProduct.Body title={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                            <CardProduct.Footer price={product.price} handleAddCart={handleAddCart} id={product.id}/>
                            </CardProduct>
                    ))}
                    </div>  
                <div className="w-1/3">
                    <div className="text-3xl font-bold text-blue-600 ml-5 mb-2">
                        Cart    
                    </div>
                    <table className="table-auto text-left border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className="my-6">
                            { products.length > 0 &&
                            cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return(
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0, 20)}...</td>
                                        <td>${(product.price).toLocaleString('id-ID', ({styles: 'currency', currency: "USD"}))}
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>${(product.price * item.qty).toLocaleString('id-ID', ({styles: 'currency', currency: "USD"}))}
                                        </td>
                                    </tr>
                                )
                            })}

                            <tr ref={totalPriceRef}>
                                <td colSpan={3}>
                                    <b>
                                        Total Price
                                    </b>
                                </td>
                                <td>
                                    <b>
                                        ${(totalPrice).toLocaleString('id-ID', ({styles: 'currency', currency: "USD"}))}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductPage