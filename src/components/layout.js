import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLink, navLinkItem, navLinkText } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLink}>
                    <li className={navLinkItem}><Link to="/" className={navLink}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLink}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

export default Layout