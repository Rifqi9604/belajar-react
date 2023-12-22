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
    return(
        <div className="flex justify-center py-5">
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
        
    )
}

export default ProductPage