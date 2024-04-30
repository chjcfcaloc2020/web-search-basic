import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavBar from './NavBar'

const Layout = () => {
    return (
        <div>
            <Header />
                <Outlet />
            <NavBar />
        </div>
    )
}

export default Layout