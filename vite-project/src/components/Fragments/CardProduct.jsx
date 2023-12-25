import Button from "../Elements/Button/Buttons"
const CardProduct = (props) => {
    const { children } = props
    return (
        <div className="w-full max-w-xs max-h-lg bg-gray-800 border border-gray-700 shadow mx-2 my-2 rounded-lg flex flex-col justify-between">
            {children}
        </div>
    )
}

const Header =(props) => {
    const {image} = props
    return (
        <a href="#">
            <img src={image} alt="sepatu" className="p-5 rounded-lg h-80 w-96"/> 
        </a>
    )
}

const Body =(props) => {
    const { children, title } = props
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white pb-5">
                    {title.substring(0, 20)}
                </h5>
                <p className="text-m text-white">
                    {children.substring(0, 100)}    
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const { price, handleAddCart, id } = props
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">${" "} {price.toLocaleString('id-ID', ({styles: 'currency', currency: "USD"}))}</span>
            <Button variant="bg-blue-600" onClick={() =>handleAddCart(id)}>Add to Cart</Button>
        </div>
    )
}


CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct