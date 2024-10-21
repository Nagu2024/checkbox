import React from 'react'
import { Link } from "react-router-dom";


const home = () => {
    return (
        <div>
            <p>CHECKBOX AND RADIO BUTTON</p>

            <Link to="/dynamic">Dynamic Checkbox</Link>
            <Link to="/optiond">Optiond</Link>

        </div>
    )
}

export default home