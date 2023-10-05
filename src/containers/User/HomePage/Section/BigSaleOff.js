import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../../utils'
import { changeLanguageApp } from '../../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';
import './BigSaleOff.scss';
import BSO_product1 from '../../../../assets/BigSaleOff_products/Sumsung-Galaxy-Z-Flip.webp'
class BigSaleOff extends Component {

    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container BigSaleOff'>
                    <div className='section-header'>
                        <span className='title-section title-section-BigSaleOff'>&#42; Giảm giá lớn &#42;</span>
                        <button className='btn-section'>Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize '>
                                <div className="bg-image ">
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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
                                    <img src={BSO_product1} style={{}} />
                                </div>
                                <label className='giamgia' ><i className="fas fa-bolt"></i> Giảm giá 999.000đ</label>
                                <h3>Samsung Galaxy Z Flip4 5G 128GB</h3>
                                <div className='price'>
                                    <strong>14.999.000&#8363;</strong>
                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <span>1020 đánh giá</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(BigSaleOff);
