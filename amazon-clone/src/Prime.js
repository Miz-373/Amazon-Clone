import React from 'react';
import './Prime.css';
import Product from "./Product";

function prime() {
    //Scroll up on refresh
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <div className='prime'>
            <div className="prime__container">
                    <img className="prime__image" src="https://noamkroll.com/wp-content/uploads/2019/02/Why-Amazon-Prime-Could-Be-The-Best-Platform-To-Release-An-Independent-Feature-Film.jpg" alt="" />
  
            <div className="prime__row">
                <Product 
                    id="123546"
                    title="The Hill"
                    price={3.49}
                    image='https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg'
                    rating={4} />
                <Product 
                    id="653546"
                    title="Avatar Movie"
                    price={4.99}
                    image='https://movieposters2.com/images/703197-b.jpg'
                    rating={5} />
                <Product 
                    id="653546"
                    title="Fight Club"
                    price={6.99}
                    image='https://i.pinimg.com/originals/fd/5e/66/fd5e662dce1a3a8cd192a5952fa64f02.jpg'
                    rating={5} />
            </div>
            <div className="prime__row">
                <Product 
                    id="124546"
                    title="Brave Heard"
                    price={3.49}
                    image='https://m.media-amazon.com/images/I/71Cx-rnPQAL._SL1368_.jpg'
                    rating={5} />
                <Product 
                    id="654546"
                    title="The Ant Man"
                    price={4.99}
                    image='https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg'
                    rating={4} />
                <Product 
                    id="654546"
                    title="The PopEye"
                    price={6.99}
                    image='https://2.bp.blogspot.com/-fzLHr4I9FRE/V8hEk82RdPI/AAAAAAAAAiE/86V9z4tFmCojCsWi9f0htQz_2YnBanBiACLcB/s1600/English%2BMovie%2Bposter.jpg'
                    rating={4} />
            </div>
            <div className="prime__row">
                <Product 
                    id="125546"
                    title="Skyfall 1917"
                    price={5.49}
                    image='https://cdn.cinematerial.com/p/297x/haeorwgk/1917-british-movie-poster-md.jpg?v=1579166770'
                    rating={3} />
                <Product 
                    id="655546"
                    title="Star Wars the Last Jedi"
                    price={8.99}
                    image='https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/2017-bestposter-starwarslastjedi.jpg'
                    rating={5} />
                <Product 
                    id="655546"
                    title="IT in IMaX"
                    price={6.99}
                    image='https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/styles/art/rcf/TDF017DOM_Pstr_Excl_1080x1600px_ENG_D_V1_R2_master-rev-1_1.jpg?itok=ON1JoEpi'
                    rating={4} />
            </div>
            <div className="prime__row">
                <Product 
                    id="166546"
                    title="  Joker  "
                    price={7.49}
                    image='https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on'
                    rating={5} />
                <Product 
                    id="656546"
                    title="  FreeDom"
                    price={2.99}
                    image='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130'
                    rating={3} />
                <Product 
                    id="656546"
                    title="The Dark Knight"
                    price={6.99}
                    image='https://www.jovoto.com/wp-content/uploads/2016/09/THE-DARK-KNIGHT-movie-poster.jpg'
                    rating={5} />
            </div>
            <div className="prime__row">
                <Product 
                    id="127546"
                    title="I am a Woman"
                    price={3.49}
                    image='https://streamcoimg-a.akamaihd.net/cms/2020/7/573189b4-bb30-4d1d-46f1-004257aaf5cc.jpg'
                    rating={3} />
                <Product 
                    id="657546"
                    title="The Play House"
                    price={5.99}
                    image='https://www.robertovivancos.com/wp-content/uploads/PH01.jpg'
                    rating={4} />
                <Product 
                    id="657546"
                    title="Maleficent Disney"
                    price={8.99}
                    image='https://webneel.net/file/images/11-16/4-maleficent-brilliant-movie-poster-design.jpg'
                    rating={5} />
            </div>
            <div className="prime__row">
                <Product 
                    id="128546"
                    title="Hard Candy"
                    price={4.49}
                    image='https://i.pinimg.com/originals/ca/fe/a1/cafea1029b5791b1d25a27d171f81cb2.jpg'
                    rating={3} />
                <Product 
                    id="658546"
                    title="Amoung Times"
                    price={3.99}
                    image='https://www.inspirationde.com/media/2019/07/mohamad-borneafandri-abulga-on-behance-1563970595ng8k4.jpg'
                    rating={3} />
                <Product 
                    id="658546"
                    title="Life Inside Out"
                    price={7.99}
                    image='https://i.pinimg.com/originals/2c/b8/13/2cb8134b78ff41ce182e1d6fb17f34aa.jpg'
                    rating={4} />
            </div>
            <div className="prime__row">
                <Product 
                    id="129546"
                    title="The Florida Project"
                    price={6.49}
                    image='https://i.pinimg.com/originals/d3/60/60/d36060c458f5060bb6a343de72db5142.jpg'
                    rating={4} />
                <Product 
                    id="659546"
                    title="A little Closer"
                    price={2.99}
                    image='https://www.filmsourcing.com/wp-content/uploads/2015/09/indie2.jpg'
                    rating={2} />
                <Product 
                    id="659546"
                    title="The Bliss"
                    price={4.99}
                    image='https://images.summitmedia-digital.com/spotph/images/2017/12/14/MoviePosters2017_5.jpg'
                    rating={3} />
            </div>
        </div>
    </div>
    )
}

export default prime;
