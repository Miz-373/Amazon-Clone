import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import Scroll from './scroll';

function Footer() {
    return (
        <div>
            <Scroll />
            <footer>
                <div class="flex container">
                    <div class="footer-quick-links">
                        <h5>Get to Know Us</h5>
                        <ul>
                        <Link><li>Careers</li></Link>
                        <Link><li>Press Releases</li></Link>
                        <Link><li>About us</li></Link>
                        <Link><li>Blog</li></Link>
                        <Link><li>Amazon Logistikblog</li></Link>
                        <Link><li>Imprint</li></Link>
                        </ul>
                    </div>

                    <div class="footer-quick-links">
                        <h5>Make Money with Us</h5>
                        <ul>
                        <Link><li>Sell on Amazon</li></Link>
                        <Link><li>Sell Under Private Brands</li></Link>
                        <Link><li>Sell on Amazon Business</li></Link>
                        <Link><li>Sell on Amazon Handmade</li></Link>
                        <Link><li>Associates Programme</li></Link>
                        <Link><li>Fulfilment by Amazon</li></Link>
                        <Link><li>Seller Fulfilled Prime</li></Link>
                        <Link><li>Advertise Your Products</li></Link>
                        <Link><li>Independently Publish with Us</li></Link>
                        <Link><li>Amazon Pay</li></Link>
                        <Link><li>Host an Amazon Hub</li></Link>
                        <Link><li>›See all</li></Link>
                        </ul>
                    </div>

                    <div class="footer-quick-links">
                        <h5>Amazon Payment Methods</h5>
                        <ul>
                        <Link><li>Amazon.de Visa Card</li></Link>
                        <Link><li>Shop with points</li></Link>
                        <Link><li>Credit Card</li></Link>
                        <Link><li>Gift Cards</li></Link>
                        <Link><li>Payment by Invoice</li></Link>
                        <Link><li>Direct Debit</li></Link>
                        <Link><li>Amazon Currency Converter</li></Link>
                        <Link><li>Top Up Your Account</li></Link>
                        <Link><li>Top Up Your Account in Store</li></Link>
                        </ul>
                    </div>

                    <div class="footer-quick-links">
                        <h5>Let Us Help You</h5>
                        <ul>
                        <Link><li>COVID-19 and Amazon</li></Link>
                        <Link><li>Track Packages or View Orders</li></Link>
                        <Link><li>Delivery Rates &amp; Policies</li></Link>
                        <Link><li>Amazon Prime</li></Link>
                        <Link><li>Returns &amp; Replacements</li></Link>
                        <Link><li>Recycling</li></Link>
                        <Link><li>Manage Your Content and Devices</li></Link>
                        <Link><li>Amazon Mobile App</li></Link>
                        <Link><li>Amazon Assistant</li></Link>
                        <Link><li>Customer Service</li></Link>
                        </ul>
                    </div>
                   
                </div>
                    <div class="flex-container">
                    <div class="footer-quick-links">
                    <Link><h5>Amazon Advertising</h5>
                        <ul>
                        <li>Find, attract, and<br></br>engage customers</li>
                        </ul>
                        </Link>
                        <Link><h5>Book Depository</h5>
                        <ul>
                        <li>Books With Free<br></br>Delivery Worldwide</li>
                        </ul>
                        </Link>
                        <Link><h5>Amazon Warehouse</h5>
                        <ul>
                        <li>Deep Discounts<br></br>Open-Box Products</li>
                        </ul>
                        </Link>
                    </div>

                    <div class="footer-quick-links">
                    <Link><h5>Amazon Music</h5>
                        <ul>
                        <li>Stream millions<br></br>of songs</li>
                        </ul>
                        </Link>
                        <Link><h5>IMDb</h5>
                        <ul>
                        <li>Movies, TV<br></br>&amp; Celebrities</li>
                        </ul>
                        </Link>
                        <Link><h5>ZVAB</h5>
                        <ul>
                        <li>Centralized Directory<br></br>of Antiquarian Books</li>
                        </ul>
                        </Link>
                    </div>

                    <div class="footer-quick-links">
                    <Link><h5>AbeBooks</h5>
                        <ul>
                        <li>Books, art<br></br>&amp; collectables</li>
                        </ul>
                        </Link>
                        <Link><h5>Kindle Direct Publishing</h5>
                        <ul>
                        <li>Indie Digital &amp; Print Publishing<br></br>Made Easy</li>
                        </ul>
                        </Link>
                        <Link><h5>Amazon Business</h5>
                        <ul>
                        <li>Pay by Invoice. PO Numbers.<br></br>For Business</li>
                        </ul>
                        </Link>
                    </div>

                    <div class="footer-quick-links">
                    <Link><h5>Amazon Web Services</h5>
                        <ul>
                        <li>Scalable Cloud<br></br>Computing Services</li>
                        </ul>
                        </Link>
                        <Link><h5>Prime Now</h5>
                        <ul>
                        <li>2-Hour Delivery<br></br>on Everyday Essentials</li>
                        </ul>
                        </Link>
                        <Link><h5>Amazon Second Chance</h5>
                        <ul>
                        <li>Pass it on, trade it in,<br></br>give it a second life</li>
                        </ul>
                        </Link>
                    </div>

                    <div class="footer-quick-links">
                    <Link><h5>Audible</h5>
                        <ul>
                        <li>Download Audiobooks</li>
                        </ul>
                        </Link>
                        <Link><h5>Shopbop</h5>
                        <ul>
                        <li>Designer<br></br>Fashion Brands</li>
                        </ul>
                        </Link>
                    </div>
                </div>
                <div className="flex-container__2">
                <small>
                        Conditions of Use &amp; Sale&nbsp;&nbsp;&nbsp;Privacy Notice&nbsp;&nbsp;&nbsp;Imprint&nbsp;&nbsp;&nbsp;Cookies Notice&nbsp;&nbsp;&nbsp;Interest-Based Ads Notice&nbsp;&nbsp;&nbsp;© 2020-2021, Amazon Clone, Inc. or its affiliates
                        </small>
                        </div>


            </footer>
        </div>
    )
}

export default Footer;