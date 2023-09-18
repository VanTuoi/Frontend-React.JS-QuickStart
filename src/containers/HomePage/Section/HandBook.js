import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';

class HandBook extends Component {

    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 2;
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Tất cả bài viết</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  1</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  2</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  3</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  4</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  5</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  6</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-handbook" />
                                <div className='section-content'>Cẩm nang  7</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
