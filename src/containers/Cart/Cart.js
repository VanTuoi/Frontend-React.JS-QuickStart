import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import HomeHeader from '../HomePage/HomeHeader';
import './Cart.scss'



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPorduct: [
                { name: "Laptop Lenovo V14 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)" },
                { img: '' },
                { id: '' },
                { color: 'đen' },
                { number: '1' },
                { price: '600.000đ' },
            ]
        }
    }
    async componentDidMount() {
        // this.props.getListProduct()
        this.setState({
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listPorducts !== this.props.listPorducts) {
            this.setState({
                arrPorduct: this.props.listPorducts,
            })
        }
    }

    render() {

        const { isLoggedIn, arrPorduct } = this.props;
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='container-cart'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 title mx-auto'>Giỏ hàng của bạn</div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='content mx-auto'>
                                    <div className='row'>
                                        {/* {arrPorduct && arrPorduct.length > 0 && arrPorduct.map((item, index) => {
                                        
                                        )} */}

                                        <div className='col-12 item'>
                                            <div className='content-item'>
                                                <div className='image-item'>
                                                </div>
                                                <div className='title-item'>
                                                    Laptop Lenovo V14 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)
                                                    <div className='title-item-color'>
                                                        Màu sắc: đen
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='price-item text-center'>
                                                <div className='price-item-top '>600.000đ</div>
                                                <div className='number-item'>
                                                    <div className='btn-number-edit'>-</div>
                                                    <div className='btn-number'>1</div>
                                                    <div className='btn-number-edit'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 item'>
                                            <div className='content-item'>
                                                <div className='image-item'>
                                                </div>
                                                <div className='title-item'>
                                                    Laptop Lenovo V14 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)
                                                    <div className='title-item-color'>
                                                        Màu sắc: đen
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='price-item text-center'>
                                                <div className='price-item-top '>600.000đ</div>
                                                <div className='number-item'>
                                                    <div className='btn-number-edit'>-</div>
                                                    <div className='btn-number'>1</div>
                                                    <div className='btn-number-edit'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 item'>
                                            <div className='content-item'>
                                                <div className='image-item'>
                                                </div>
                                                <div className='title-item'>
                                                    Laptop Lenovo V14 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)
                                                    <div className='title-item-color'>
                                                        Màu sắc: đen
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='price-item text-center'>
                                                <div className='price-item-top '>600.000đ</div>
                                                <div className='number-item'>
                                                    <div className='btn-number-edit'>-</div>
                                                    <div className='btn-number'>1</div>
                                                    <div className='btn-number-edit'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 total'>
                                            <div className='row mt-2 mb-2'>
                                                <div className='col-4 text-center'>Tạm tính (3 sản phẩm) :</div>
                                                <div className='col-6'></div>
                                                <div className='col-1 total-text'>1.800.000đ</div>
                                            </div>
                                        </div>
                                        <div className='col-12 info-user'>
                                            <div className='row mt-2 mb-2'>
                                                <div className='col-12 m-1 text-left font-weight-bold'>THÔNG TIN KHÁCH HÀNG</div>
                                                <div className='col-4'>
                                                    <input className='form-control' type='text'
                                                        placeholder='Họ tên'
                                                        value=""
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <input className='form-control' type='text'
                                                        placeholder='Số điện thoại'
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mt-3 mb-2'>
                                                <div className='col-12 m-1 text-left font-weight-bold'>CHỌN HÌNH THỨC GIAO HÀNG</div>
                                                <div class="form-check col-3 ml-1 text-center">
                                                    <input className="form-check-input" type="radio" name="exampleRadios1" id="radio1" value="option1" />
                                                    <label className="form-check-label" for="radio1">
                                                        Nhận tại cửa hàng
                                                    </label>
                                                </div>
                                                <div class="form-check col-3  ml-1 text-center">
                                                    <input className="form-check-input" type="radio" name="exampleRadios1" id="radio2" value="option2" checked />
                                                    <label className="form-check-label" for="radio2">
                                                        Giao tận nơi
                                                    </label>
                                                </div>
                                                <div class="col-12">
                                                    <input className='form-control m-1' type='text'
                                                        placeholder='Chọn địa chỉ của bạn' //
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mt-3 mb-2'>
                                                <div className='col-12 text-left font-weight-bold'>HÌNH THỨC THANH TOÁN</div>
                                                <div class="form-check col-4 ml-1 text-center">
                                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="radio1" value="option1" checked />
                                                    <label className="form-check-label" for="radio1">
                                                        Thanh toán khi nhận hàng
                                                    </label>
                                                </div>
                                                <div class="form-check col-4  ml-1 text-center">
                                                    <input className="form-check-input" type="radio" name="exampleRadios2" id="radio2" value="option2" />
                                                    <label className="form-check-label" for="radio2">
                                                        Thanh toán trực tuyến
                                                    </label>
                                                </div>
                                                {/* <div class="col-4"></div> */}
                                                <div class="col-6 text-left">
                                                    <input className='form-control m-1' type='text'
                                                        placeholder='Yêu cầu khác (nếu có)' //
                                                        value=""
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12 total-2'>
                                                <div className='row mt-2 mb-2'>
                                                    <div className='col-4 text-left font-weight-bold'>Tổng tiền :</div>
                                                    <div className='col-6'></div>
                                                    <div className='col-1 total-text'>1.800.000đ</div>
                                                </div>
                                            </div>
                                            <div className='col-12 btn-order'>
                                                <div className='row mt-4 mb-0'>
                                                    <div className='col-12 text-center'>
                                                        <button className='btn col-3 btn-lg btn-warning'>Đặt hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        // listPorducts: state.user.listPorducts,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // getListProduct: () => dispatch(actions.getListProduct()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
