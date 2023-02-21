var h1 = document.createElement('h1');
h1.innerHTML = "Hello child";
document.getElementById("root").appendChild(h1);

const Pi = Math.PI;

function doublePI() {
    return Pi * 2;
}

function definePI(param){

    return Pi * param;
}

export default Pi;
export {doublePI};

// When importing
import Pi, {doublePI} from "";
import * as ALL from ""

{Pi}
{ALL.default} // We will get Pi
{ALL.doublePI()}
{ALL.doublePI(2)}

Pi > 2 && "the value to get if true"

const [name, setName] = useState("")
setName("Some text")


// 
import {useEffect, useState} from "react"

function App({name, phone, ...props}){

    const [username, setUsername] = useState("");
    const [userList, setUserList] = useState([]);

        // UseEffect with no dependecy
        useEffect(() => {
            console.log("Each single time when the component is re-rendered")
        })

        /* UseEffect with some dependecies, it's similar wiht
            - componentDidUpdate(prevProps) {} in class-based component
            - Watch function in Vue.js
        */
        useEffect(() => {
            console.log("Each single time when the component is re-rendered")
        }, [username])

        /* This action happens before the the component be unmounted
            - componentWillUnmount() {} in class-based component
        */
        useEffect(() => {

            return () => {
                console.log("We mounted the cmp before re-rendering that (before udpadating the username var")
            }
         }, [username])

    return (
        <div>
            <h1>My username is : {username}</h1>
            <h2>My name from propos is : {name}</h2>
        </div>
    )
}

/*

UseEffet Defnition: it performs side Effects on a functional component
Basically 'do something' when a specific change occurs in a component
*/


<div class="alert alert-danger alert-dismissible fade show" role="alert">
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
<p>
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
</p>
<p>
  <button type="button" class="btn btn-danger">Take this action</button>
  <button type="button" class="btn btn-primary">Or do this</button>
</p>
</div>