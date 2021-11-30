import React from 'react'
import { useState } from "react"
import { useHistory } from "react-router";

export const Create = () => {

    const [title, setTitle] = useState('');
    const [preface, setPreface] = useState('');
    const [content, setContent] = useState('');
    const [idb_rating, setIdbrating] = useState('1');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const newEntry = {
            title, idb_rating, preface, content
        }
        console.log(newEntry);
        setisPending(true)

        fetch('http://localhost:8000/Shows',
        {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newEntry)
        })
        .then(() =>
        {
            console.log('Entered the data')
            setisPending(false)
            history.go(-1)
            history.push('/')
        })
    }
    return (
        <div className="create">
            <h1> Add new blog</h1><br/><br/>

            <form onSubmit={handleSubmit} method="POST">
                <label style={{color: '#91032e'}}>Movies/Shows :</label><br/>
                <input type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/><br/><br/>
                
                <label style={{color: '#91032e'}}>Movie/show preface:</label><br/>
                <textarea required
                value={preface}
                onChange={(e)=> setPreface(e.target.value)}></textarea><br/><br/>
                
                <label style={{color: '#91032e'}}> Content: </label><br/>
                <textarea requiredvalue={content}
                onChange={(e)=> setContent(e.target.value)}></textarea><br/><br/>

                <label style={{color: '#91032e'}}>IDMB rating:</label><br/>
                <select
                value={idb_rating}
                onChange={(e) => setIdbrating(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                </select><br/><br/>
                { !isPending && <button style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' }}> Add Blog </button>}
                { isPending && <button style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }} disabled> Adding a Blog...</button>}

            </form>
            
        </div>
    )
}
