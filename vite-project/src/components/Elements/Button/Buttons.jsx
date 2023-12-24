const Button = (props) => {
    const { children, variant = "bg-black", onClick =() => {}, type = "button"} = props
    return (
      <button 
      className={`${variant} text-white font-bold py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
      >
        {children}
      </button>
    )
  }

export default Button