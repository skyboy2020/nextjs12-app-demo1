import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
              <li>
                <link href='/'>Home</link>  
              </li>  
              <li>
                <link href='about'>About</link> 
              </li>
            </ul>

        </nav>
    )
}