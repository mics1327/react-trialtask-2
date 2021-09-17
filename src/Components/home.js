import React from 'react'
import './home.css';
import { useHistory} from "react-router-dom";


function Home() {
    let history=useHistory();
    function handleclick()
    {
        history.push("/main");
    }
    return (
        <div>
            <button className="gotobutton" onClick={handleclick}>To Fortaleza Ituxi</button>
        </div>

    )
}

export default Home
