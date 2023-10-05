import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import HomeHeader from '../HomePage/HomeHeader';
import './InforUser.scss'


class InforUser extends Component {
    toggleElement() {
        var element = document.getElementById('khungDoiMatKhau');
        element.classList.toggle('hidden');
    }
    render() {
        const { isLoggedIn } = this.props;
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='infoUser'>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={3}>THÔNG TIN KHÁCH HÀNG</th>
                            </tr>
                            <tr>
                                <td>Tài khoản: </td>
                                <td>
                                    <input type='text' value={'aa'} readOnly></input>
                                </td>
                                <td>
                                    <i className='fa fa-pencil'></i>
                                </td>
                            </tr>

                            <tr>
                                <td>Mật khẩu: </td>

                                <td></td>
                                <td className='text-center'>
                                    <i className='fa fa-pencil' id='butDoiMatKhau' onClick={this.toggleElement}></i>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3} id='khungDoiMatKhau' className=''>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>Mật khẩu cũ:</div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <input className='form-control' type='password'></input>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Mật khẩu mới: </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <input className='form-control' type='password'></input>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>Xác nhận mật khẩu:</div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <input className='form-control' type='password'></input>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <div>
                                                        <button className='btn btn-lg btn-success'>Đồng ý</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr>

                                <td>Họ: </td>
                                <td>
                                    <input type='text' value={'a'} readOnly></input>
                                </td>
                                <td>
                                    <i className='fa fa-pencil'></i>
                                </td>
                            </tr>

                            <tr>
                                <td>Tên: </td>
                                <td>
                                    <input type='text' value={'a'} readOnly></input>
                                </td>
                                <td>
                                    <i className='fa fa-pencil'></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>
                                    <input type='text' value={'duonganh@gmail.com'} readOnly></input>
                                </td>
                                <td>
                                    <i className='fa fa-pencil'></i>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{ padding: '5px', borderTop: '2px solid #ccc' }}></td>
                            </tr>
                            <tr>
                                <td>Tổng tiền đã mua: </td>
                                <td>
                                    <input type='text' value={'999.999.000đ'} readOnly></input>

                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Số lượng sản phẩm đã mua: </td>
                                <td>
                                    <input type='text' value={'1'} readOnly></input>
                                </td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div >
                <div className='listDonHang'>
                    <table className='listSanPham'>
                        <tbody>
                            <tr>
                                <th colSpan={6}>
                                    <h3 className='text-center'>Đơn hàng ngày: 09:29:18 5/10/2023</h3>
                                </th>
                            </tr>
                            <tr>
                                <th className='text-center'>STT</th>
                                <th className='text-center'>Sản phẩm</th>
                                <th className='text-center'>Giá</th>
                                <th className='text-center'>Số lượng</th>
                                <th className='text-center'>Thành tiền</th>
                                <th className='text-center'>Thời gian thêm vào giỏ</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td className='noPadding imgHide'>
                                    <a target='_blank' href='' title='Xem chi tiết'>
                                        Nokia black future
                                        <img src='	https://cdn.tgdd.vn/Products/Images/42/22701/dien-thoai-di-dong-Nokia-1280-dienmay.com-l.jpg' />
                                    </a>
                                </td>
                                <td className='alignRight'>999.999.000 đ</td>
                                <td className='soluong'> 1 </td>
                                <td className='alignRight'>999.999.000 đ</td>
                                <td className='text-center'>09:29:13 5/10/2023</td>
                            </tr>
                            <tr className='font-weight-bold text-center ' style={{ height: '4em' }}>
                                <td colSpan={4}>TỔNG TIỀN: </td>
                                <td className='alignRight'>999.999.000 đ</td>
                                <td>Đang chờ xử lý</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
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

export default connect(mapStateToProps, mapDispatchToProps)(InforUser);
