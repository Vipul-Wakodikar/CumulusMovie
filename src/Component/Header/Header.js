import React from 'react'
import styles from './Header.modules.css'
const Header = () => {
    return (
        <div className = {styles.headerTitle} style = {{backgroundColor: "#000"}} >
            <h4>Credit: Cumulus</h4>
            <p>please click on Card to display Information</p>
        </div>
    )
}

export default Header
