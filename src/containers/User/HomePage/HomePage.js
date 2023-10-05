import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeFooter from './HomeFooter';
import Banner from './Banner/Banner';
import Filter from "./FilterController/Filter";

import MostOutStanding from './Section/MostOutStanding';
import NewProduct from './Section/NewProduct';
import ZeroPercentInstallmentPayment from './Section/ZeroPercentInstallmentPayment';
import ShockingPricesOnline from './Section/ShockingPricesOnline';
import BigSaleOff from './Section/BigSaleOff';
import CheapForAll from './Section/CheapForAll';
import './HomePage.scss'

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    constructor(props) {
        super(props);
        this.refToTop = React.createRef();
    }

    scrollToTop = () => {
        setTimeout(() => {
            this.refToTop.current.scrollIntoView({ behavior: 'smooth' });
        }, 500);
    };
    render() {
        let settings = {
            dots: false,
            infinite: false,    // cuon tron
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <>
                <div className='homepage-container'>
                    <p ref={this.refToTop}></p>
                    <HomeHeader isShowBanner={true} />
                    <Banner />
                    <Filter />
                    <MostOutStanding settings={settings} />
                    <hr></hr>
                    <NewProduct settings={settings} />
                    <ShockingPricesOnline settings={settings} />
                    <ZeroPercentInstallmentPayment settings={settings} />
                    <BigSaleOff settings={settings} />
                    <CheapForAll settings={settings} />
                    {/* <MedicalFacility settings={settings} />
                    <OutStandingDoctor settings={settings} />
                    <HandBook settings={settings} /> */}
                    <HomeFooter />
                    <div >
                        <button id='goto-top-page' onClick={this.scrollToTop}><i className='fa fa-arrow-up'></i></button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
