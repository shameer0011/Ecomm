import React from 'react'
import logostyles from './Logo.module.css';
import img from './black.png'

export const Logo = () => {
    return (
        <>

            <a className={ logostyles.navbar_brand } href="#">
                <img src={ img } alt="logo" />
            </a>

        </>
    )
}
