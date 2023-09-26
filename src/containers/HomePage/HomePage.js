import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook'
import HomeFooter from './HomeFooter';
import Banner from './Banner/Banner';
import Filter from "./FilterController/Filter";

import MostOutStanding from './Section_2/MostOutStanding';
import NewProduct from './Section_2/NewProduct';
import ZeroPercentInstallmentPayment from './Section_2/ZeroPercentInstallmentPayment';
import ShockingPricesOnline from './Section_2/ShockingPricesOnline';
import BigSaleOff from './Section_2/BigSaleOff';
import CheapForAll from './Section_2/CheapForAll';

import './HomePage.scss'
class HomePage extends Component {

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
                    <HomeHeader isShowBanner={true} />
                    <Banner />
                    <Filter />
                    <MostOutStanding settings={settings} />
                    <NewProduct settings={settings} />
                    <ShockingPricesOnline settings={settings} />
                    <ZeroPercentInstallmentPayment settings={settings} />
                    <BigSaleOff settings={settings} />
                    <CheapForAll settings={settings} />
                    {/* <MedicalFacility settings={settings} />
                    <OutStandingDoctor settings={settings} />
                    <HandBook settings={settings} /> */}
                    <HomeFooter />
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
