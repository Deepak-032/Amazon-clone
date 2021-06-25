import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

const Header = () => {
    const [{basket, user}] = useStateValue()
    const login = () => {
        if (user){
            auth.signOut()
        }
    }
    console.log(basket)

    return <nav className="header">
        <Link to="/">
            <img 
                className="header_logo"
                // src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                src='/images/amazon-i.png'
                alt="logo"
            />
        </Link>
        <div className="header_search">
            <input className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
        </div>

        {/* 3 links */}
        <div className="header_nav">
            {/* link 1 */}
            <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
                    <span>Hello {user?.email}</span>
                    <span>{user ? 'Sign Out': 'Sign In'}</span>
                </div>
            </Link>

            {/* link 2 */}
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span>Returns</span>
                    <span>& Orders</span>
                </div>
            </Link>
            
            {/* link 3 */}
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span>Your</span>
                    <span>Prime</span>
                </div>
            </Link>
            
            {/* link 3 */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    {/* icon */}
                    <ShoppingBasketIcon/>
                    {/* Number of items in the basket */}
                    <span>{basket?.length}</span>
                </div>
            </Link>

        </div>
    </nav>
}

export default Header


// href will refresh the page vs link will not refresh the page