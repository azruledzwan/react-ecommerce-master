import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';

class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
      let products = [
        {
          name:"Air Jordan 1 Low",
          image:'https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ywfhf6trhzvuzth2pltf/air-jordan-1-low-shoe-6Q1tFM.jpg',
          description:"Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style",
          harga:"IDR 1,429,000"
        },
        {
          name:"Nike Epic React Flyknit 2",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lerifbk0kfytxxdmhmlg/epic-react-flyknit-2-running-shoe-ShRZnm.jpg',
          description:"The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
          harga:"IDR 1,818,000"
        },
        {
          name:"Nike React Element 55 SE",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oiwkl6dr3gtgcv9kb96t/react-element-55-se-shoe-VLSWNF.jpg',
          description:"The Nike React Element 55 SE borrows design lines from heritage runners like the Nike Internationalist, then places it all on Nike React technology",
          harga:"IDR 1,578,000"
        },
        {
          name:"Nike Zoom Fly 3",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/twqfbnslbjiod9pjjkjv/zoom-fly-3-running-shoe-7zg0qT.jpg',
          description:"Inspired by the Vaporfly, the Nike Zoom Fly 3 gives distance runners race-day comfort and durability. The power of a carbon-fibre plate keeps you in the running mile after mile.",
          harga:"IDR 2,389,000"
        },
        {
          name:"Nike Joyride Flyknit AW",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/hguw6u4kljhfqursqjd9/joyride-flyknit-aw-running-shoe-zBGLbd.jpg',
          description:"he Nike Joyride Run Flyknit AW is designed to help make running feel easier and give your legs a day off. Tiny foam beads underfoot contour to your foot for cushioning that stands up to your mileage.",
          harga:"IDR 2,389,000"
        },
        {
          name:"Nike Phantom Vision Academy Dynamic Fit MG",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/oj0ladu33vw15gd9lrum/phantom-vision-academy-dynamic-fit-mg-multi-ground-football-boot-wp5nZW.jpg',
          description:"The Nike Phantom Vision Academy Dynamic Fit MG brings the fierce precision of street play to the pitch. A foot-hugging sleeve has a custom feel and the Ghost Laces system tights with 1 pull and is hidden for a bigger striking surface.",
          harga:"IDR 1,379,000"
        },
        {
          name:"Nike Dri-FIT",
          image:'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fbf81652-5de7-471f-a785-24b4c7612591/dri-fit-training-t-shirt-5MnlTl.jpg',
          description:"The Nike Dri-FIT T-Shirt has sweat-wicking fabric with a little bit of give to keep you dry and comfortable",
          harga:"IDR 497,000"
        },
        {
          name:"Nike Sportswear",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/kxll6eujnttts3gcfr0x/sportswear-swoosh-crew-njfBw5.jpg',
          description:"Borrowing its design cues from the iconic trademark, the Nike Sportswear Swoosh Crew has a classic look with bold, street-ready style. Crafted from soft fabric, it's got you covered for all-day warmth.",
          harga:"IDR 658,000"
        },
        {
          name:"Houston Rockets Nike Dri-FIT",
          image:'https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/zrwhxqur9p76uoedxrkg/houston-rockets-dri-fit-nba-t-shirt-r571nR.jpg',
          description:"Boldly show your team pride in the Houston Rockets Nike Dri-FIT NBA T-Shirt",
          harga:"IDR 369,000"
        },
        {
          name:"Jordan Dri-FIT 23 Alpha",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/u8cnlwjhfjmmfh6w4fpr/jordan-dri-fit-23-alpha-basketball-trousers-fbGBHr.jpg',
          description:"The Jordan Dri-FIT 23 Alpha Men's Basketball Trousers are made with sweat-wicking fabric in a tapered profile to help keep you dry, comfortable and focused.",
          harga:"IDR 549,000"
        },
        {
          name:"Nike Sportswear",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/pvglvnvfocjtymgtc2vl/sportswear-joggers-21hdgN.jpg',
          description:"A tribute to iconic football warm-ups from the '60s and '70s, the Nike Sportswear Joggers are all about comfort. They feature side stripes that extend from hips to hems for an old-school look.",
          harga:"IDR 849,000"
        },
        {
          name:"Nike x Stranger Things",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/mowgfwqovmcmpujjpdkl/stranger-things-fleece-trousers-2BQBPP.jpg',
          description:"The Nike x Stranger Things Trousers take you back to the hazy, crazy days of Hawkins, Indiana during the summer of '85. Its soft, plush fabric keeps you cosy for those nights hanging with friends and dodging Demogorgons.",
          harga:"IDR 799,000"
        }
      ]
      
      return (
      <main className="main">
      {products.map((e, i) => <Item product={e} key={i}></Item>)}
      </main>
      );
      }
      }

export default Homepage;

