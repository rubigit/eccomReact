
import React from 'react'
import logo from 'img/logo-landscape-light-03.svg'

const Header = () => {

    return (
        <>
            <header className="page-header">

                {/* <!-- grid area 1 --> */}

                <a href="index.html" className="logo">

                    <img src={logo} alt="Lilights logo" height="55" />
                </a>
                {/* 
<!-- Navigation menu and toggle button (non-functional) 
grid area 4--> */}
                <button type="button" value="nav-toggle" className="nav-toggle openMenuBtn">
                    {/* <!-- <span className="material-icons">menu</span> --> */}
                </button>

                <nav aria-label="Primary" className="navigation">
                    <ul className="menu hide">
                        <li className="light"><a href="#"><span>Lightning</span><span>▾</span></a>
                            <ul className="submenu">
                                <li>
                                    <a href="#">Desk &amp; Table</a>
                                </li>
                                <li><a href="#">Floor</a></li>
                                <li><a href="#">Wall</a></li>
                                <li><a href="#">Chandelier</a></li>
                            </ul>
                        </li>
                        <li className="shop">
                            <a href="#"><span>Shop</span><span>▾</span></a>
                            <ul className="submenu">
                                <li><a href="#">By style</a></li>
                                <li><a href="#">By room</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Contact</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </nav>

                {/* <!-- Search for a product (non-functional) -->
<!-- grid area 2 --> */}
                <form className="search">
                    <label><span>Search</span>
                        <input className="ibox-srch" type="search" name="find" id="find" placeholder="Type to search.." />
                    </label>
                    <button id="btnSearch" type="button"><span className="material-icons">⨂</span></button>

                </form>

                {/* <!-- grid area 3 --> */}
                <ul className="your-products">
                    <li><a href="#"><span className="material-icons" aria-label="Favourites">♥</span></a></li>
                    <li><a href="#"><span className="material-icons" aria-label="Items in your cart">¢</span></a>
                    </li>
                </ul>

            </header>
        </>
    )
}


console.log(`Test7: Header.js`,)
export default Header