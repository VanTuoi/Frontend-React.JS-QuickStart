import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../../utils'
import { changeLanguageApp } from '../../../../store/actions'
import Slider from "react-slick";
// import './MostOutStanding.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';

import './MostOutStanding.scss'
import { withRouter } from 'react-router';
import MOS_product_1 from '../../../../assets/outstanding_products/shopping.webp';
class MostOutStanding extends Component {

    handleViewDetailProduct = (product) => {
        //product.id
        this.props.history.push(`/home/detail-product/${1}`);          // luuw nut quay ve
    }
    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container MostOutStanding'>
                    <div className='section-header'>
                        <span className='title-section title-section-MosTOutStanding'>&#42; Nổi bật nhất &#42;</span>
                        <button className='btn-section'>Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize '>
                                <div className="bg-image ">
                                    <img src={MOS_product_1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 1000đ</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>iPhone 15 128GB </h3>
                                <div className='price'>
                                    <strong>20.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>9999 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  1</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={MOS_product_1} style={{}} />
                                </div>
                                <label className='giareonline' >Giá rẻ online</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>Huawei Nova 2i </h3>
                                <div className='price'>
                                    <strong>3.990.000&#8363;</strong>
                                    <span>4.490.000&#8363;</span>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>804 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  2</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image "> <img src={MOS_product_1} style={{}} /></div>
                                <label className='moiramat' >Mới ra mắt</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>Xiaomi Redmi 5 Plus 4GB </h3>
                                <div className='price'>
                                    <strong>4.790.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>347 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image "> <img src={MOS_product_1} style={{}} /></div>
                                {/* <div className='section-content'>Sản phẩm  4</div> */}
                                <h3 onClick={() => this.handleViewDetailProduct()}>Xiaomi Redmi 5</h3>
                                <div className='price'>
                                    <strong>4.790.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>3 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='section-customize '>
                                <div className="bg-image ">
                                    <img src={MOS_product_1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 1000đ</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>iPhone 15 128GB </h3>
                                <div className='price'>
                                    <strong>20.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>9999 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  1</div> */}
                            </div>
                            <div className='section-customize '>
                                <div className="bg-image ">
                                    <img src={MOS_product_1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 1000đ</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>iPhone 15 128GB </h3>
                                <div className='price'>
                                    <strong>20.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>9999 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  1</div> */}
                            </div>
                            <div className='section-customize '>
                                <div className="bg-image ">
                                    <img src={MOS_product_1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 1000đ</label>
                                <h3 onClick={() => this.handleViewDetailProduct()}>iPhone 15 128GB </h3>
                                <div className='price'>
                                    <strong>20.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>9999 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  1</div> */}
                            </div>
                        </Slider>
                    </div>


                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MostOutStanding));
