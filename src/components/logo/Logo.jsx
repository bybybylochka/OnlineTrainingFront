import React from 'react';
import logo from '../../assets/logo.png'
import logoLight from '../../assets/logoLight.png'

const Logo = ({color}) => {
    return (
        <a className='logo' href='#'>
            <img className={'logo__image'} src={color==='light'?logoLight:logo} alt={'Logo'}/>
            <span className={'logo__text'}>Onlinetutor.</span>
        </a>
    )
}

export default Logo;