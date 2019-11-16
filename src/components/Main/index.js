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
          name:"nike",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg',
          description:"hahahahahahah",
          harga:"Rp. 100.000"
        },
        {
          name:"nike",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg',
          description:"hahahahahahah",
          harga:"Rp. 5"
        },
        {
          name:"nike",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg',
          description:"hahahahahahah",
          harga:"Rp. 100.000"
        },
        {
          name:"nike",
          image:'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg',
          description:"hahahahahahah",
          harga:"Rp. 100.000"
        }
      ]
      const images = ['https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/yhkjnveanaaq4qu7vupc/air-vapormax-flyknit-3-shoe-FZBdxt.jpg','https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/i2orjflbglpksdk7lttb/mercurial-superfly-7-academy-mds-mg-multi-ground-football-boot-th1FXb.jpg','https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/dswddpdxyiy8pfjv2mq4/air-jordan-12-retro-shoe-bkTvweKE.jpg', 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/roosffrm279usegvo6op/zoom-fly-3-running-shoe-7zg0qT.jpg', 'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/twqfbnslbjiod9pjjkjv/zoom-fly-3-running-shoe-7zg0qT.jpg', 'https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/pte2xjffgz8pbptuj3ze/epic-react-flyknit-2-running-shoe-ShRZnm.jpg', 'https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ifwckwse49ew6rftlgpq/joyride-run-flyknit-running-shoe-sqfqGQ.jpg']
      return (
      <main className="main">
      {products.map((e, i) => <Item product={e} key={i}></Item>)}
      </main>
      );
      }
      }

export default Homepage;

