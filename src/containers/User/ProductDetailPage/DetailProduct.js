import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import HomeHeader from '../HomePage/HomeHeader';
import './DetailProduct.scss'


class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameProduct: 'Điện thoại Huawei Nova 3i',
            img: 'https://i.pinimg.com/originals/27/64/24/27642437def745f6a4fd097f735e48df.jpg',
            codeProduct: '123',
            price: 6000000,
            old_price: 5000000,
            screen: 'IPS LCD 6.56" HD+',
            operatingSystem: 'Android 7.0 (Nougat)',
            CPU: 'A15',
            RAM: '8GB',
            ROM: '128GB',
            color: 'red',
            frontCamera: '8 MP',
            rearCamera: '16MP',
            SIM: '2 Nano SIM, Hỗ trợ 4G',
            battery: '5000 mAh',
            charger: '33Wh',

            commnet: [
                { id: '1', name: 'Trần Văn Khá', content: 'Sản phẩm tốt', time: '1 ngày trước' },
                { id: '1', name: 'Trần Văn Bảnh', content: 'Sản phẩm rất oke sẽ giới thiệu cho mn', time: '2 ngày trước' },
                { id: '1', name: 'Trần Văn Thật', content: 'Khá tốt', time: '3 ngày trước' },
                { id: '1', name: 'Trần Văn Thật', content: 'Khá tốt', time: '3 ngày trước' },
                { id: '1', name: 'Trần Văn Thật', content: 'Khá tốt', time: '3 ngày trước' },
                { id: '1', name: 'Trần Văn Thật', content: 'Khá tốt', time: '3 ngày trước' },
                { id: '1', name: 'Trần Văn Thật', content: 'Khá tốt', time: '3 ngày trước' },
            ],
            commentUser: '',
        }
    }
    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    orderService = (productId) => {
        console.log(productId);
    }
    commnetProductService = (productId) => {
        console.log(productId);
    }
    render() {
        const { isLoggedIn } = this.props;
        let { nameProduct, codeProduct, price, old_price, screen, operatingSystem, CPU, RAM, ROM,
            color, frontCamera, rearCamera, battery, SIM,
            charger, commnet, commentUser
        } = this.state
        console.log('DetailProduct')
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='product-detail-container'>
                    <div className='row title-product'>
                        <div className='col-12 '>
                            <div className='text-left'>{nameProduct}</div>
                        </div>
                    </div>
                    <div className='row product'>
                        <div className='col-4 mt-3 text-center img-product'>
                            <img
                                style={{ width: '350px' }}
                                src='https://i.pinimg.com/originals/27/64/24/27642437def745f6a4fd097f735e48df.jpg'></img>
                        </div>
                        <div className='col-4 mt-5 pr-5 price-products text-bottom'>
                            <div className='row'>
                                <div className='col-4 price-new'>
                                    {price}đ
                                </div>
                                <div className='col-4 price-old mt-1'>
                                    {old_price}đ
                                </div>
                            </div>
                            <div className='row mt-5 border-item'>
                                <div className='col-12 promotion'>Khuyến mãi</div>
                                <div className='col-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" /></svg>
                                </div>
                                <div className='col-11'>Sản phẩm sẽ được giảm 500.000₫ khi mua hàng online bằng thẻ VPBank hoặc tin nhắn SMS</div>
                            </div>
                            <div className='row mt-3 border-item'>
                                <div className='col-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 8v11h14V8h-3v8l-4-2l-4 2V8H5Zm0 13q-.825 0-1.413-.588T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM10 8v4.75l2-1l2 1V8h-4ZM5 8h14H5Z" /></svg>                                </div>
                                <div className='col-11'>Trong hộp có: Sạc, Tai nghe, Sách hướng dẫn, Cây lấy sim, Ốp lưng</div>
                                <div className='col-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" /><path stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48" /></g></svg>
                                </div>
                                <div className='col-11'>Bảo hành chính hãng 12 tháng.</div>
                                <div className='col-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /><path d="M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m0-4l-2 2m1 6h6M13 6h5l3 5v6h-2" /></g></svg>
                                </div>
                                <div className='col-11'>1 đổi 1 trong 1 tháng nếu lỗi, đổi sản phẩm tại nhà trong 1 ngày.</div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-12 text-center'>
                                    <button
                                        onClick={() => this.orderService(codeProduct)}
                                        className='btn col-8 btn-lg btn-warning'
                                    >
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 infor-product mt-1'>
                            <div className='row'>
                                <div className='col-12 detail text-center'>
                                    Thống số kỹ thuật
                                </div>
                                <div className='col-12 configuration'>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Màn hình</div>
                                        <div className='col-7'>{screen}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Hệ điều hành:</div>
                                        <div className='col-7'>{operatingSystem}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>CPU:</div>
                                        <div className='col-7'>{CPU}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>RAM:</div>
                                        <div className='col-7'>{RAM}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>ROM:</div>
                                        <div className='col-7'>{ROM}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Camera sau:</div>
                                        <div className='col-7'>{rearCamera}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Camera trước:</div>
                                        <div className='col-7'>{frontCamera}</div>
                                    </div>

                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>SIM:</div>
                                        <div className='col-7'>{SIM}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Pin:</div>
                                        <div className='col-7'>{battery}</div>
                                    </div>
                                    <div className='row mt-2 configuration-item'>
                                        <div className='col-5'>Xạc:</div>
                                        <div className='col-7'>{charger}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 comment'>
                        <div className='col-4 text-center title-comment'>
                            Bình luận về sản phẩm
                        </div>
                        <div className='col-8'></div>
                        <div className='col-4'>
                            <div className='row list-comment'>
                                {commnet && commnet.length > 0 && commnet.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className='col-12 comment-item'>
                                                <div className='row'>
                                                    <div className='col-12 font-weight-bold'>{item.name}</div>
                                                    <div className='col-12 ml-2'>{item.content}</div>
                                                    <div className='col-12 ml-2 time'>{item.time}</div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }

                            </div>
                        </div>
                        <div className='col-8'></div>
                        <div className='col-4 p-3 text-center'>
                            <textarea
                                className='form-control'
                                value={commentUser}
                                rows={5}
                                placeholder='Mời bạn để lại bình luận'
                                onChange={(event) => this.onChangeInput(event, 'commentUser')}
                            >
                            </textarea>
                            <button className='btn btn-success mt-2 text-center'>Gửi bình luận</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
