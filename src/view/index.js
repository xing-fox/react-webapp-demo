import React from 'react';
import { Carousel } from 'antd';
import './index.css';

const App = () => {
  return (
    <div className="wrapper">
        <div className="wrapper-swiper">
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        </div>
        <div className="wrapper-content">
            <div className="wrapper-content-title">作业需求</div>
        </div>
        <div className="wrapper-bottom">
            <ul>
                <li className="active">
                    <div className="item-icon icon-need active"></div>
                    <div className="item-name">提需求</div>
                </li>
                <li>
                    <div className="item-icon icon-service"></div>
                    <div className="item-name">客服</div>
                </li>
                <li>
                    <div className="item-icon icon-recharge"></div>
                    <div className="item-name">特惠充值</div>
                </li>
                <li>
                    <div className="item-icon icon-home"></div>
                    <div className="item-name">我的</div>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default App;
