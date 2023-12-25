import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Button/Buttons"
import { useRef, useEffect } from "react"
import { login } from "../../services/Auth.service"

const FormLogin = () => {

  const handleLogin = (event) => {
    // localStorage.setItem("email", event.target.email.value)
    // localStorage.setItem("password", event.target.password.value)
    event.preventDefault()
    // window.location.href = "/products"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    login(data, ((status, res) => {
      if(status){
        localStorage.setItem("token", res)
      }else{
        console.log(res.response.data)
      }
    }))
  }

  const usernameRef = useRef(null)
  
  
  useEffect(() => {
    usernameRef.current.focus()
}, [])
    return (
        <form onSubmit={handleLogin}>
          <InputForm
            label="username"
            type="text"
            name="username"
            placeholder="Enter your username..."
            ref={usernameRef}
          /> 
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password..."
          /> 
          <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin