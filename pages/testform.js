import axios from "axios";
import { useState } from "react"

const testform = () => {
    const [name,setname] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = {
            name : name,
        }
        axios.post('https://sheet.best/api/sheets/9a963e18-cfce-4ccd-8626-97a568dfe958', data).then((response)=>{
            console.log(response)
            setname('')
        })
    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>name</label>
                <input onChange={(e)=>{setname(e.target.value)}} value={name}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default testform