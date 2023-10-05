import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';
import './Banner.scss'
import image from '../../../../assets/Banners/banner0.gif';
import image1 from '../../../../assets/Banners/banner1.png'
import image2 from '../../../../assets/Banners/banner2.png';
import image3 from '../../../../assets/Banners/banner3.png';
import image4 from '../../../../assets/Banners/banner4.png'
import image5 from '../../../../assets/Banners/banner5.png';
import image6 from '../../../../assets/Banners/banner6.png';
import image7 from '../../../../assets/Banners/banner7.png'
import image8 from '../../../../assets/Banners/banner8.png';
import image9 from '../../../../assets/Banners/banner9.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
        this.images = [image, image1, image2, image3, image4, image5, image6, image7, image8, image9];
        this.interval = null;
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                currentIndex: (prevState.currentIndex + 1) % this.images.length
            }));
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    // render() {
    //     return (
    //         <Carousel>
    //             <div>
    //                 <img src={banner_0} alt="Banner 0" />
    //                 {/* <p className="legend">Caption 1</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_1} alt="Banner 1" />
    //                 {/* <p className="legend">Caption 2</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_2} alt="Banner 2" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_3} alt="Banner 3" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_4} alt="Banner 4" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_5} alt="Banner 5" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_6} alt="Banner 6" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_7} alt="Banner 7" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_8} alt="Banner 8" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>
    //             <div>
    //                 <img src={banner_9} alt="Banner 9" />
    //                 {/* <p className="legend">Caption 3</p> */}
    //             </div>

    //         </Carousel>
    //     );
    // }
    render() {
        const { currentIndex } = this.state;

        return (

            <Carousel selectedItem={currentIndex}>
                {this.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index + 1}`} />
                        {/* <p className="legend">Caption {index + 1}</p> */}
                    </div>
                ))}
            </Carousel>



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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
