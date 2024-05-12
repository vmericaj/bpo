import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        navbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            backgroundColor: '#fff',
            flexDirection: isOpen || window.innerWidth >= 768 ? 'column' : 'row',
            height: isOpen || window.innerWidth >= 768 ? '100vh' : 'auto'
        },
        logo: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        menu: {
            fontSize: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: window.innerWidth >= 768 ? 'none' : 'block'
        },
        nav: {
            display: isOpen ? 'block' : 'none',
            width: window.innerWidth >= 768 ? '100%' : 'auto'
        },
        link: {
            display: 'block',
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            padding: window.innerWidth >= 768 ? '15px 20px' : '10px'
        }
    };

    return (
        <div style={styles.navbar}>
            <div style={styles.logo}>
                LOGO
            </div>
            <button style={styles.menu} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '☰'}
            </button>
            <nav style={styles.nav}>
                <a href="#home" style={styles.link}>Home</a>
                <a href="#services" style={styles.link}>Services</a>
                <a href="#about" style={styles.link}>About</a>
                <a href="#contact" style={styles.link}>Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;
