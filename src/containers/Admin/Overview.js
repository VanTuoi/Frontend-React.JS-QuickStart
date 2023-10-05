import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { LANGUAGES, CRUD_ACTIONS } from '../../utils'
import './ManageUser.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import Select from "react-select"
import { Form } from 'react-bootstrap';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './Overview.scss'
class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sales: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3, 5, 6, 7, 8, 9, 50],
                        backgroundColor: this.randomColor(10),
                        borderColor: 'white',
                        borderWidth: 1,
                    },
                ],
            },
            timeSales: 'Hôm nay',

            revenue: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [12, 19, 3, 5, 2, 3, 5, 6, 7, 8, 9, 20],
                        backgroundColor: this.randomColor(10),
                        borderColor: 'white',
                        borderWidth: 1,
                    },
                ],
            },
            timeRevenue: 'Hôm nay',

            typeChart1: 'Bar',
            typeChart2: 'Bar',

            numberOrder: '0'
        }
    }
    randomColor = (count) => {
        var randomColor = require('randomcolor'); // import the script
        var color = randomColor({
            count: count,
            luminosity: 'bright',
            hue: 'random',
            format: 'rgb' //
        }) // a hex code for an attractive color
        return color
    };



    async componentDidMount() {
        this.props.getSaleOverTime(this.state.timeSales);
        this.props.getRevenueOverTime(this.state.timeRevenue);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.sales !== this.props.sales) {
            this.setState({
                sales: this.props.sales,
            })
        }
        if (prevProps.revenue !== this.props.revenue) {
            this.setState({
                revenue: this.props.revenue,
            })
        }
    }
    handleChangeTimeSales = (event) => {
        this.setState({
            timeSales: event.target.value
        })
    }
    handleChangeTypeChart1 = (event) => {
        this.setState({
            typeChart1: event.target.value
        })
    }
    handleChangeTypeChart2 = (event) => {
        this.setState({
            typeChart2: event.target.value
        })
    }
    handleChangeTimeRevenue = (event) => {
        this.setState({
            timeRevenue: event.target.value
        })
    }
    handleGoToApproveOrder() {
        this.props.history.push(`/admin/approve-order`);
    }
    handleGoToManageProduct() {
        this.props.history.push(`/admin/manage-product`);
    }


    render() {
        let { sales, revenue, timeSales, timeRevenue, numberOrder, typeChart1, typeChart2 } = this.state;
        console.log(sales, revenue)
        return (
            <>
                <div className='user-overview-container'>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <div className='title'>Tổng quan</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                            <div className='row custom-gutter'>
                                <div className='col-md-5 mt-3 container-item container-item-info'>
                                    <div className='row'>
                                        <div className='col-12 d-flex'>
                                            <div className='icon-item-1'><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#FF8B07" d="M4 20h2V10a1 1 0 0 1 1-1h12V7a1 1 0 0 0-1-1h-3.051c-.252-2.244-2.139-4-4.449-4S6.303 3.756 6.051 6H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm6.5-16c1.207 0 2.218.86 2.45 2h-4.9c.232-1.14 1.243-2 2.45-2z" /><path fill="#FF8B07" d="M21 11H9a1 1 0 0 0-1 1v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1zm-6 7c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2c0 2.757-2.243 5-5 5z" /></svg></div>
                                            <div className='title-item'>
                                                <h6>TỔNG ĐƠN HÀNG</h6>
                                                <p>411 đơn hàng</p>
                                                <small>Tổng số hóa đơn bán hàng trong tháng.</small>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='text-center'>
                                                <button className='btn-sm m-1 btn-warning' onClick={() => this.handleGoToApproveOrder()}>Chi tiết</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5 mt-3 container-item container-item-info'>
                                    <div className='row'>
                                        <div className='col-12 d-flex'>
                                            <div className='icon-item-2'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16"><g fill="#1D5AAB"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" /><path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" /></g></svg>
                                            </div>
                                            <div className='title-item'>
                                                <h6>TỔNG SẢN PHẨM</h6>
                                                <p>263 sản phẩm</p>
                                                <small>Tổng số sản phẩm được quản lý.</small>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='text-center'>
                                                <button className='btn-sm m-1 btn-warning' onClick={() => this.handleGoToManageProduct()}>Chi tiết</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-5 mt-3 container-item container-item-info'>
                                    <div className='row'>
                                        <div className='col-12 d-flex'>
                                            <div className='icon-item-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#DE2222" d="M16.707 2.293A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707l-5-5zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                                            </div>
                                            <div className='title-item'>
                                                <h6>SẮP HẾT HÀNG</h6>
                                                <p>4 sản phẩm</p>
                                                <small>Số sản phẩm cảnh báo hết cần nhập thêm.</small>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='text-center'>
                                                <button className='btn-sm m-1 btn-warning' onClick={() => this.handleGoToManageProduct()}>Chi tiết</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5 mt-3 container-item container-item-info'>
                                    <div className='row'>
                                        <div className='col-12 d-flex'>
                                            <div className='icon-item-4'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="#ecbf1d"><path d="M12 14a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1zm-1.5 2.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z" /><path d="M10.23 3.216c.75-1.425 2.79-1.425 3.54 0l8.343 15.852C22.814 20.4 21.85 22 20.343 22H3.657c-1.505 0-2.47-1.6-1.77-2.931L10.23 3.216zM20.344 20L12 4.147L3.656 20h16.688z" /></g></svg>
                                            </div>
                                            <div className='title-item'>
                                                <h6>ĐƠN HÀNG CHỜ DUYỆT</h6>
                                                <p>10 sản phẩm</p>
                                                <small>Số đơn hàng cần phải duyệt.</small>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className='text-center'>
                                                <button className='btn-sm m-1 btn-warning' onClick={() => this.handleGoToApproveOrder()}>Chi tiết</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                            <div className='row custom-gutter'>
                                <div className='col-md-12 container-item'>
                                    <div className='m-3 text-center title'>Doanh số bán ra trong {timeSales}</div>
                                    <div className='optionChart'>
                                        <div className='time-chart'>
                                            <Form.Select className='form-control col-3 m-3' value={timeSales} onChange={(event) => this.handleChangeTimeSales(event)}>
                                                <option value="Tuần này">Tuần này</option>
                                                <option value="Tháng này">Tháng này</option>
                                                <option value="Năm này">Năm nay</option>
                                            </Form.Select>
                                        </div>
                                        <div className='type-chart'>
                                            <Form.Select className='form-control col-3 m-3' value={typeChart1} onChange={(event) => this.handleChangeTypeChart1(event)}>
                                                <option value="Bar">Biểu đồ cột</option>
                                                <option value="Pie">Biểu đồ tròn</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className='char-section'>
                                        {typeChart1 == 'Bar' ?
                                            <Bar data={sales} />
                                            :
                                            <Pie data={revenue} />
                                        }
                                    </div>

                                </div>
                                <div className='col-md-12 mt-5 container-item'>
                                    <div className='m-3 text-center title'>Doanh thu trong {timeRevenue}</div>
                                    <div className='optionChart'>
                                        <Form.Select className='m-3 col-3 form-control' value={timeRevenue} onChange={(event) => this.handleChangeTimeRevenue(event)}>
                                            <option value="Tuần này">Tuần này</option>
                                            <option value="Tháng này">Tháng này</option>
                                            <option value="Năm này">Năm nay</option>
                                        </Form.Select>
                                    </div>
                                    <div className='type-chart'>
                                        <Form.Select className='form-control col-3 m-3' value={typeChart2} onChange={(event) => this.handleChangeTypeChart2(event)}>
                                            <option value="Bar">Biểu đồ cột</option>
                                            <option value="Pie">Biểu đồ tròn</option>
                                        </Form.Select>
                                    </div>
                                    <div className='char-section'>
                                        {typeChart2 == 'Bar' ?
                                            <Bar data={sales} />
                                            :
                                            <Pie data={revenue} />
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        // sales: state.admin.sales,                // chưa có API
        // revenue: state.admin.revenue

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSaleOverTime: (time) => dispatch(actions.getSaleOverTime(time)),
        getRevenueOverTime: (time) => dispatch(actions.getRevenueOverTime(time))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
