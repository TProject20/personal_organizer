import React from 'react'

export default function Signup() {
    return (
        <div>
            <h1 style={{color :'white'}}>Signup</h1>
            <input type='text' placeholder='name'/>
            <br/>
            <input type='text' placeholder='surname'/>
            <br/>
            <input type='password' placeholder='password'/>
            <br/>
            <input type='submit'/>
        </div>
    )
}
