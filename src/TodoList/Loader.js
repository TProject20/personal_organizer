import React from 'react'

export const Loader = () => {
    return (
        <div className = 'text-center'>
            <div className='spiner-border' role='status'>
                <span className='sr=only'> Loadin...</span>
            </div>
        </div>
    )

}
