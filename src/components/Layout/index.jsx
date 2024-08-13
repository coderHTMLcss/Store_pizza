import React, { useContext } from 'react'
import HeaderComponent from '../header'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../context'


const LayoutComponent = () => {
    const { theme } = useContext(AppContext);
    return (
        <div className={`wrapper ${theme}`}>
            <HeaderComponent />
            <main className='content'>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutComponent
