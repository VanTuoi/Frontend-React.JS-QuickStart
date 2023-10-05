import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../../utils'
import { changeLanguageApp } from '../../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';
import './ZeroPercentInstallmentPayment.scss';
import ZPIP_product1 from '../../../../assets/ZeroPercentInstallmentPayment_products/iphone_15.webp'
class ZeroPercentInstallmentPayment extends Component {

    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container ZeroPercentInstallmentPayment'>
                    <div className='section-header'>
                        <span className='title-section title-section-ZeroPercentInstallmentPayment'>&#42; Trả góp 0% &#42;</span>
                        <button className='btn-section'>Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image">
                                    <img src={ZPIP_product1} style={{}} />
                                </div>
                                <label className='tragop' >Trả góp 0%</label>
                                <h3>iPhone 15 128GB Đen</h3>
                                <div className='price'>
                                    <strong>22.999.000&#8363;</strong>

                                </div>
                                <div className='ratingresult'>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='far fa-star star-empty'></i>
                                    <span>555 đánh giá</span>
                                </div>
                                <div className='tool-tip-1'>
                                    <button type='button' className='btn btn-primary add-product' data-toggle="tooltip" title='Thêm vào giỏ hàng' data-trigger="click" data-boundary="window" data-placement="left" >
                                        +
                                    </button>
                                </div>
                                {/* <div className='section-content'>Sản phẩm  3</div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ZeroPercentInstallmentPayment);
