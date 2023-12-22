import InputForm from "../Elements/Input/InputForm"
import Button from "../Elements/Button/Buttons"

const FormLogin = () => {

  const handleLogin = (event) => {
    console.log("login")
    event.preventDefault()
  }
    return (
        <form onSubmit={handleLogin}>
          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email..."
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