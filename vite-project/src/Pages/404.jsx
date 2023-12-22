import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    return(
        <div>
            <p>
               {error.StatusText || error.message} 
            </p>
        </div>
    )
}

export default ErrorPage