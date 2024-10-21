import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'


const Dynamic = () => {
    const [jdata, setJData] = useState([]);
    const [pdata, setPdata] = useState([]);

    useEffect(() => {
        const fetchdata = axios.get('./src/data.json').then(res => setJData(res.data.data));

    }, [])

    const checkboxhandler = (e, index) => {
        const activecheckbox = document.getElementById(index).checked;
        if (activecheckbox == true) {

            setPdata((olddata) => [...olddata, e.target.value]);


        } else {

            setPdata(pdata.filter(values => values !== e.target.value))

        }

    }




    return (
        <div className='checkbox-container'>
            <div className='checkbox'>
                <h1>Dynamic Checkbox</h1>

                {jdata.map((data, i) => (
                    <div key={data.id}>
                        <input type="checkbox" id={i} value={data.name} onChange={(e) => checkboxhandler(e, i)} />
                        <label>{data.name}</label><br /><br />

                    </div>

                ))}

                {pdata.map((a, i) => <div key={i}>{a}</div>)}


            </div>
        </div>
    )
}

export default Dynamic