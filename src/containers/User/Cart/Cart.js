import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import HomeHeader from '../../User/HomePage/HomeHeader';
import './Cart.scss'



class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPorduct: [
                {
                    name: "Laptop Lenovo V14 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)",
                    img: 'https://mac24h.vn/images/thumbnails/350/350/detailed/49/ThinkPad_T14S_GEN_2_qajb-n6_9svr-5k.png?t=1686259923',
                    id: '1',
                    color: 'đen',
                    number: 1,
                    price: 500000
                },
                {
                    name: "Laptop Lenovo V15 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)",
                    img: 'https://cdn.tgdd.vn/Products/Images/44/309293/dell-inspiron-3520-i3-71003264-thumb-600x600.jpg',
                    id: '2',
                    color: 'đen',
                    number: 1,
                    price: 600000
                },
                {
                    name: "Laptop Lenovo V19 G3 IAP i5 1235U/8GB/256GB/Win11 (82TS005RVN)",
                    img: 'https://cdn.tgdd.vn/Products/Images/44/304867/asus-tuf-gaming-f15-fx506hf-i5-hn014w-thumb-600x600.jpg',
                    id: '3',
                    color: 'đen',
                    number: 2,
                    price: 100000
                },
            ],
            sum: 0,
            number_product: 0,
            userId: '111',
            firstName: 'Trần Văn Tươi',
            SDT: '0123456789',
            address: '123 Xuân Khánh Ninh Kiều CT',
            otherRequirements: '',
            payments: 'paymentOnDelivery',            // paymentOnDelivery and onlinePayment
            formOfDelivery: 'assignedSite'                   // assignedSite and atStore

        }
    }
    async componentDidMount() {
        // this.props.getListProduct()
        let sum = 0;
        let number_product = 0;
        this.state.arrPorduct && this.state.arrPorduct.length > 0 && this.state.arrPorduct.map((item, index) => {
            sum += Number(item.price) * Number(item.number);
            number_product += Number(item.number)
        })
        this.setState({
            sum: sum,
            number_product: number_product
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listPorducts !== this.props.listPorducts) {
            this.setState({
                arrPorduct: this.props.listPorducts,
            })
        }
    }
    handleOnChange = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    handelChangeValue = (id, type) => {
        if (type === '+') {
            let arrPorduct_copy = this.state.arrPorduct.map(item => {
                if (item.id === id && item.number >= 0 && item.number <= 99) {
                    this.setState({
                        sum: this.state.sum + item.price,
                        number_product: this.state.number_product += 1
                    })
                    return { ...item, number: item.number += 1 };
                }
                return item;
            })
            this.setState({
                arrPorduct: arrPorduct_copy,

            })
        }
        if (type === '-') {
            let arrPorduct_copy = this.state.arrPorduct.map((item, index) => {
                if (item.id === id && item.number > 0 && item.number <= 99) {
                    this.setState({
                        sum: this.state.sum - item.price,
                        number_product: this.state.number_product -= 1
                    })
                    return { ...item, number: item.number -= 1 };
                }
                return item;
            })
            this.setState({
                arrPorduct: arrPorduct_copy,
            })
        }
    }

    orderService = () => {
        console.log(this.state)
    }
    render() {
        const { isLoggedIn, arrPorduct, sum, number_product, firstName, SDT, address, otherRequirements, payments } = this.state;

        return (
            <>
                <HomeHeader />
                <div className='container-cart'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 title mx-auto'>Giỏ hàng của bạn</div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='content mx-auto'>
                                    <div className='row'>
                                        {arrPorduct && arrPorduct.length > 0 && arrPorduct.map((item, index) => {
                                            return (
                                                <>
                                                    <div className='col-12 item' key={index}>
                                                        <div className='content-item'>
                                                            <div className='image-item text-center'>
                                                                <img src={item.img} style={{ width: '80px' }} />
                                                            </div>
                                                            <div className='title-item'>
                                                                {item.name}
                                                                <div className='title-item-color'>
                                                                    Màu sắc: {item.color}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className='price-item text-center'>
                                                            <div className='price-item-top '>{item.price}đ</div>
                                                            <div className='number-item'>
                                                                <div className='btn-number-edit' onClick={() => this.handelChangeValue(item.id, '-')}>-</div>
                                                                <div className='btn-number'>{item.number}</div>
                                                                <div className='btn-number-edit' onClick={() => this.handelChangeValue(item.id, '+')}>+</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                        }

                                        <div className='col-12 total'>
                                            <div className='row mt-2 mb-2'>
                                                <div className='col-4 text-center'>Tạm tính ({number_product} sản phẩm) :</div>
                                                <div className='col-6'></div>
                                                <div className='col-2 total-text'>{sum}đ</div>
                                            </div>
                                        </div>
                                        <div className='col-12 info-user'>
                                            <div className='row mt-2 mb-2'>
                                                <div className='col-12 m-1 text-left font-weight-bold'>THÔNG TIN KHÁCH HÀNG</div>
                                                <div className='col-4'>
                                                    <input className='form-control' type='text'
                                                        placeholder="Họ tên"
                                                        value={firstName}
                                                        onChange={(event) => this.handleOnChange(event, 'firstName')}
                                                    />
                                                </div>
                                                <div className='col-4'>
                                                    <input className='form-control' type='text'
                                                        placeholder="Số điện thoại"
                                                        value={SDT}
                                                        onChange={(event) => this.handleOnChange(event, 'SDT')}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row mt-3 mb-2'>
                                                <div className='col-12 m-1 text-left font-weight-bold'>CHỌN HÌNH THỨC GIAO HÀNG</div>
                                                <div class="form-check col-3 ml-1 text-center">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio" name="exampleRadios1"
                                                        id="atStore"
                                                        value="atStore"
                                                        onChange={(event) => this.handleOnChange(event, 'payments')}
                                                    />
                                                    <label className="form-check-label" for="atStore">
                                                        Nhận tại cửa hàng
                                                    </label>
                                                </div>
                                                <div class="form-check col-3  ml-1 text-center">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="exampleRadios1"
                                                        id="assignedSitee"
                                                        value=" assignedSitee"
                                                        onChange={(event) => this.handleOnChange(event, 'payments')}
                                                        checked
                                                    />
                                                    <label className="form-check-label" for="assignedSitee">
                                                        Giao tận nơi
                                                    </label>
                                                </div>
                                                {payments === 'atStore' ?
                                                    <div class="col-12 m-2">Vui lòng lại cửa hàng của chúng tôi tại 123 Xuân Khánh Ninh Kiều CT</div>

                                                    :
                                                    <div class="col-12">
                                                        <input className='form-control m-1' type='text'
                                                            placeholder={address}
                                                            value={address}
                                                            onChange={(event) => this.handleOnChange(event, 'address')}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                            <div className='row mt-3 mb-2'>
                                                <div className='col-12 text-left font-weight-bold'>HÌNH THỨC THANH TOÁN</div>
                                                <div class="form-check col-4 ml-1 text-center">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="exampleRadios2"
                                                        id="paymentOnDelivery"
                                                        value="paymentOnDelivery"
                                                        onChange={(event) => this.handleOnChange(event, 'payments')}
                                                        checked
                                                    />
                                                    <label className="form-check-label" for="paymentOnDelivery">
                                                        Thanh toán khi nhận hàng
                                                    </label>
                                                </div>
                                                <div class="form-check col-4  ml-1 text-center">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="exampleRadios2"
                                                        id="onlinePayment"
                                                        value="onlinePayment"
                                                        onChange={(event) => this.handleOnChange(event, 'formOfDelivery')}
                                                    />
                                                    <label className="form-check-label" for="onlinePayment">
                                                        Thanh toán trực tuyến
                                                    </label>
                                                </div>
                                                {/* <div class="col-4"></div> */}
                                                <div class="col-6 text-left">
                                                    <input className='form-control m-1' type='text'
                                                        placeholder='Yêu cầu khác (nếu có)' //
                                                        value={otherRequirements}
                                                        onChange={(event) => this.handleOnChange(event, 'otherRequirements')}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12 total-2'>
                                                <div className='row mt-2 mb-2'>
                                                    <div className='col-4 text-left font-weight-bold'>Tổng tiền :</div>
                                                    <div className='col-5'></div>
                                                    <div className='col-3 total-text'>{sum}đ</div>
                                                </div>
                                            </div>
                                            <div className='col-12 btn-order'>
                                                <div className='row mt-4 mb-0'>
                                                    <div className='col-12 text-center'>
                                                        <button
                                                            onClick={() => this.orderService()}
                                                            className='btn col-3 btn-lg btn-warning'
                                                        >
                                                            Đặt hàng
                                                        </button>
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
