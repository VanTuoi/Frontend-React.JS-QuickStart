import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class OutStandingDoctor extends Component {

    render() {
        let settings = this.props.settings;
        return (
            <>
                <div className='section-share section-outstanding-doctor'>
                    <div className='section-container'>
                        <div className='section-header'>
                            <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                            <button className='btn-section'>Xem thêm</button>
                        </div>
                        <div className='section-body'>
                            <Slider {...settings}>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className="bg-image section-outstanding-doctor " />
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư</div>
                                            <div>Cơ Xương Khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className="bg-image section-outstanding-doctor " />
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư</div>
                                            <div>Cơ Xương Khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className="bg-image section-outstanding-doctor " />
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư</div>
                                            <div>Cơ Xương Khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className="bg-image section-outstanding-doctor " />
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư</div>
                                            <div>Cơ Xương Khớp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='section-customize'>
                                    <div className='customize-border'>
                                        <div className='outer-bg'>
                                            <div className="bg-image section-outstanding-doctor " />
                                        </div>
                                        <div className='position text-center'>
                                            <div>Giáo sư</div>
                                            <div>Cơ Xương Khớp</div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
