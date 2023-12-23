import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button/Buttons";

const FormRegister = () => {
  const handleRegister = (event) => {
    localStorage.setItem("email", event.target.email.value)
    localStorage.setItem("name", event.target.name.name)
    localStorage.setItem("password", event.target.password.value)
    localStorage.setItem("retypepassword", event.target.retypepassword.value)
    event.preventDefault()
    window.location.href = "/login"
  }
    return (
        <form onSubmit={handleRegister}>
          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email..."
          /> 
          <InputForm
            label="Fullname"
            type="text"
            name="fullname"
            placeholder="Enter your Fullname..."
          /> 
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password..."
          /> 
          <InputForm
            label="Retype Password"
            type="password"
            name="retypepassword"
            placeholder="Retype your password..."
          /> 
          <Button  variant="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister