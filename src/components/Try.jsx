import {  useParams  } from "react-router-dom"

const Try = () => {
    let { id  } = useParams()

    return <h1>Hello { `ID ROUTE : ${id}` }</h1>
}

export default Try;