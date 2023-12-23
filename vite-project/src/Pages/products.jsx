import Button from "../components/Elements/Button/Buttons"
import CardProduct from "../components/Fragments/CardProduct"

const products = [
    {
        id: 1, 
        title: "Sepatu Baru", 
        price: "Rp 2.000.000",
        image: "/images/sepatu.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta saepe quibusdam voluptatum laudantium ex omnis vitae consequatur, pariatur adipisci inventore est fuga, at iure quia optio magnam, enim aspernatur assumenda."
    },
    {
        id: 2, 
        title: "Sepatu lama", 
        price: "Rp 1.000.000",
        image: "/images/sepatu.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta saepe quibusdam voluptatum laudantium ex omnis vitae consequatur"
    },
    {
        id: 3, 
        title: "Sepatu Adadong", 
        price: "Rp 5.000.000",
        image: "/images/sepatu.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta saepe quibusdam voluptatum laudantium ex omnis ."
    },
]



const ProductPage   = () => {

    const email = localStorage.getItem("email")
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    return(
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white px-10 items-center">
                {email}
                <Button variant="bg-slate-600 ml-5" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="f w-2/3">
                {products.map(product => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image}/>
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                        </CardProduct>
                ))}
                </div>
                <div className="w-2/3 bg-red-200">
                    tes
                </div>

            </div>
        </>
    )
}

export default ProductPage