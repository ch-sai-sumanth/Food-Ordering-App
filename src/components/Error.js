import { useRouteError } from "react-router-dom"
const Error=()=>{

    const actualError=useRouteError();
    console.log(actualError);
    return(
        <div>
            <h1>OOPS...!!!</h1>
            <h4>Something went wrong</h4>
            <h3> Actual Error is : {actualError.error.message}</h3>
        </div>
    )
}

export default Error;