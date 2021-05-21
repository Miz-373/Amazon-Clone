import React from 'react';
import './Home.css';
import Product from "./Product";


function Home() {
    //Scroll up on refresh
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-83aaace1-3181-47e7-95fd-18a3096a9c6f._CB418072165_QL85_V1_.jpg" alt="" />
            
            <div className="home__row">
            <Product 
                id="126546"
                title="iPhone 12 Pro"
                price={1249.49}
                image='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000'
                rating={5} />
            <Product 
                id="652546"
                title="Samsung Galaxy Note 20 Ultra 5G"
                price={1349.99}
                image='https://m.media-amazon.com/images/I/71VH6X0URML._AC_UL320_.jpg'
                rating={5} />
            </div>

            <div className="home__row">
            <Product 
                id="612546"
                title="Kitchen Machine Stand Mixer Machine 1800 Watts"
                price={289.99}
                image='https://images-eu.ssl-images-amazon.com/images/I/611tNRsIDvL.__AC_SX300_QL70_ML2_.jpg'
                rating={4} />
            
            <Product 
                id="656426"
                title="Hoover H-WASH Washing Dryer 11 kg WLAN [Class A]"
                price={679.99}
                image='https://images-na.ssl-images-amazon.com/images/I/71qdnxuu8CL._AC_SX679_.jpg'
                rating={2} />
            <Product 
                id="126546"
                title="Tefal Ingenio Emotion L948SC04 Set of 12 Induction"
                price={189.49}
                image='https://images-na.ssl-images-amazon.com/images/I/51JcW5E0PKL._AC_SY550_.jpg'
                rating={5} />
            </div>

            <div className="home__row">
            <Product 
                id="656546"
                title="Der neue Echo Dot (4. Generation) Alexa | Weiß"
                price={58.49}
                image='https://images-na.ssl-images-amazon.com/images/I/61yoaHNu9HL._AC_SL1000_.jpg'
                rating={5} />
            <Product 
                id="987987"
                title="Arlo Go - Mobile HD Security Camera"
                price={299.99}
                image='https://i5.walmartimages.com/asr/94b8e601-7211-475b-9c78-c305c0f8972e_1.bc0bc8a0e3287c828cc90a12990fc6e9.jpeg'
                rating={4} />
            <Product 
                id="346546"
                title="Amazon - Fire TV Cube 4K "
                price={79.99}
                image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6301/6301669_sd.jpg'
                rating={4} />
            <Product 
                id="655556"
                title="Bluetooth Speaker JBL Flip 5 Blue"
                price={88.99}
                image='https://www.powerplanetonline.com/cdnassets/altavoz_bluetooth_jbl_flip_5_azul_01_l.jpg'
                rating={3} />
            </div>
            <div className="home__row">
            <Product 
                id="656546"
                title="Microsoft XBOX Series X 1TB"
                price={499.99}
                image='https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg'
                rating={5} />
            <Product 
                id="346546"
                title="AMIRON WIRELESS COPPER"
                price={730.00}
                image='https://cdn.shopify.com/s/files/1/1958/8821/products/BEYERDYNAMIC_AMIRON_WIRELESS_2048x_b281628f-a606-4f25-ace9-5371318b7a2a_740x.jpg?v=1575863980'
                rating={4} />
            <Product 
                id="126546"
                title="Apple iPad Pro (2020)"
                price={949.99}
                image='https://static.digitecgalaxus.ch/Files/3/4/0/1/5/2/7/8/iPad_Pro_12_9-in_Wi-Fi_Space_Gray_2-up_Vertical_US-EN_SCREEN.jpg?impolicy=ProductTileImage&resizeWidth=436&resizeHeight=335&quality=high&cropWidth=436&cropHeight=335'
                rating={5} />
            </div>
            <div className="home__row">
            <Product 
                id="656546"
                title="Cinebar Trios Surround Set 5.1"
                price={1699.99}
                image='https://res.cloudinary.com/lautsprecher-teufel/image/upload/c_fill,f_auto,q_auto,w_800/v1/products/Cinesystem_Trios/cinesystem-trios-51-set-m-main-remote-1300x1300x72-soundbar.jpg'
                rating={5} />
            <Product 
                id="346546"
                title="SAMSUNG Odyssey G9 49Z Gaming"
                price={1369.49}
                image='https://cf2.s3.souqcdn.com/item/2017/08/22/23/87/33/20/item_XL_23873320_34646799.jpg'
                rating={4} />
            <Product 
                id="126546"
                title="LexonElec 680 Keyboard/Mouse Set"
                price={56.99}
                image='https://images-na.ssl-images-amazon.com/images/I/81ilsMHqhkL._AC_SX679_.jpg'
                rating={5} />
            <Product 
                id="126546"
                title="Logitech G27 Racing Wheel"
                price={229.49}
                image='https://images-na.ssl-images-amazon.com/images/I/81XCDKEBFNL._AC_SL1500_.jpg'
                rating={4} />
            </div>
            <div className="home__row">
            <Product 
                id="656546"
                title="Johnnie Walker Double Black Whisky"
                price={29.99}
                image='https://media.real-onlineshop.de/images/items/1024x1024/4986f0ee0bdb3cb541969e3cb61e10e8.jpg'
                rating={5} />
            <Product 
                id="346546"
                title="Abtshof Absinth 66 | 66% vol | 0,5 l"
                price={18.49}
                image='https://media.real-onlineshop.de/images/items/1024x1024/391262dcb7563ce2589a64da6f08d441.jpg'
                rating={4} />
            </div>
            <div className="home__row">
            <Product 
                id="651146"
                title="Samsung RS68 Side-by-Side-Kühlschrank, A++"
                price={2199.00}
                image='https://gzhls.at/i/84/76/1828476-n0.jpg'
                rating={5} />
            </div>
            <div className="home__row">
            <Product 
                id="656546"
                title="Nike React Infinity Running"
                price={118.39}
                image='https://i1.t4s.cz/products/ct2357-600/nike-react-infinity-run-fk-2-314873-ct2357-601.jpeg'
                rating={3} />
            <Product 
                id="346546"
                title="Nike Air Max 1 '07 Men's Shoe"
                price={169.59}
                image='https://upload.wikimedia.org/wikipedia/commons/b/bf/Nike_Air_Max_95.png'
                rating={5} />
            <Product 
                id="346546"
                title="Addidas PHARRELL WILLIAMS Tennis"
                price={100.00}
                image='https://www.monox-store.com/media/image/91/28/e9/B41793-adidas-Pharrell-Williams-Tennis-Hu-MONOX-1.jpg'
                rating={4} />
            <Product 
                id="655556"
                title="Nike Air 1 Mid Chicago"
                price={119.95}
                image='https://images-na.ssl-images-amazon.com/images/I/51SKAYTHtrL._AC_UY395_.jpg'
                rating={4} />
            </div>
           
            </div>
        </div>
    );
}

export default Home;
