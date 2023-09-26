import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { LANGUAGES, CRUD_ACTIONS } from '../../utils'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableManageUser from './TableManageUser';
import Select from "react-select"
class ApproveOrder extends Component {


    constructor(props) {
        super(props);
        this.state = {

            codeOrders: '',
            listProduct: [
                { nameProduct: '', codeProduct: '', price: '' },
            ],
            userId: '',
            dateCrate: '',
            dateApproval: '',
            totalPrice: '',
            actions: '',

            listOrders: [],
            listOrdersSelect: [],
            selectedOption: '',
            showAllOrders: false,
        }
    }

    async componentDidMount() {
        this.props.fetchAllUser();
        this.setState({
            actions: CRUD_ACTIONS.CREATE
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.listOrders !== this.props.listOrders) {
            let dataSelect = this.builDataInputSelect(this.props.listOrders);
            this.setState({
                codeOrders: '',
                listProduct: [
                    { nameProduct: '', codeProduct: '', price: '' },
                ],
                userId: '',
                dateCrate: '',
                dateApproval: '',
                totalPrice: '',
                actions: CRUD_ACTIONS.CREATE,

                listOrders: this.props.listOrders,
                selectedOption: '',
                listOrdersSelect: dataSelect
            })
        }
    }
    builDataInputSelect = (inputData) => {
        let result = [];
        let language = this.props.language
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.userId;
                object.value = item.codeOrder;
                result.push(object)
            })

        }
        return result
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
        this.props.listUsers.map((item, index) => {
            if (item.id === selectedOption.value) {
                this.handleEditUser(item)
                return;
            }
        })
    }
    handleEditUser = (order) => {
        this.setState({
            codeOrders: order.codeOrders,
            listProduct: order.listProduct,
            userId: order.userId,
            dateCrate: order.dateCrate,
            dateApproval: order.dateApproval,
            totalPrice: order.totalPrice,

            selectedOption: order.codeOrders,
            actions: CRUD_ACTIONS.EDIT,
        })
    }
    handleCreateUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid === true) return;
        if (this.state.actions === CRUD_ACTIONS.CANCEL) {
            this.setState({
                codeOrders: '',
                listProduct: [
                    { nameProduct: '', codeProduct: '', price: '' },
                ],
                userId: '',
                dateCrate: '',
                totalPrice: '',

                actions: CRUD_ACTIONS.CANCEL,
                selectedOption: ''
            })
        }
        if (this.state.actions === CRUD_ACTIONS.EDIT) {
            // fire redux cancel user
            this.props.editAUserRedux({
                id: this.state.userEditId,
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                avatar: this.state.avatar,
            })
        }


    }
    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid === true) return;
        if (this.state.actions === CRUD_ACTIONS.CREATE) {
            // fire redux create user
            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                gender: this.state.gender,
                avatar: this.state.avatar,
            })
        }

    }
    handleDeleteUser = () => {
        this.props.deleteAUserRedux(this.state.selectedOption.value);
    }
    checkValidateInput = () => {
        let isValid = true;
        // code
        return isValid;
    }
    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleShowAllUser = () => {
        this.setState({
            showAllUser: !this.state.showAllUser
        })
    }
    render() {
        let selectedOption = this.state.selectedOption;
        let showAllUser = this.state.showAllUser
        let { codeOrders, listProduct, userId, dateCrate, dateApproval, totalPrice } = this.state
        return (
            <div className='user-redux-container'>
                <div className="text-center" ></div>
                <div className='title'>
                    Quản lý đơn hàng
                </div>

                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Mã đơn</label>
                                <input className='form-control' type='text'
                                    value={codeOrders}
                                    onChange={(event) => this.onChangeInput(event, 'codeOrders')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>ID chủ đơn</label>
                                <input className='form-control' type='text'
                                    value={userId}
                                    onChange={(event) => this.onChangeInput(event, 'userId')}
                                />
                            </div>
                            <div className='col-6'>
                                <label>Danh sách sản phẩm mua</label>
                                <input className='form-control' type='text'
                                    value={listProduct}
                                    onChange={(event) => this.onChangeInput(event, 'listProduct')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Ngày tạo đơn</label>
                                <input className='form-control' type='text'
                                    value={dateCrate}
                                    onChange={(event) => this.onChangeInput(event, 'dateCrate')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Ngày duyệt đơn</label>
                                <input className='form-control' type='text'
                                    value={dateApproval}
                                    onChange={(event) => this.onChangeInput(event, 'DateApproval')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Tổng tiền</label>
                                <input className='form-control' type='text'
                                    value={totalPrice}
                                    onChange={(event) => this.onChangeInput(event, 'totalPrice')}
                                />
                            </div>

                            {/* <div className='col-12 my-3'>
                                <button
                                    class={this.state.actions === CRUD_ACTIONS.CREATE ? "btn m-1 btn-success" : "btn m-1 btn-warning"}
                                    onClick={() => this.handleCreateUser()}
                                >
                                    {this.state.actions === CRUD_ACTIONS.CREATE ?
                                        <FormattedMessage id="manage-user.create" />
                                        :
                                        <FormattedMessage id="manage-user.cancel" />
                                    }
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    class={this.state.actions === CRUD_ACTIONS.EDIT ? "btn m-1 btn-success" : "btn m-1 btn-primary"}
                                    onClick={() => this.handleSaveUser()}
                                >
                                    {this.state.actions === CRUD_ACTIONS.EDIT ?
                                        <FormattedMessage id="manage-user.edit" />

                                        :
                                        <FormattedMessage id="manage-user.save" />
                                    }
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    class="btn m-1 btn-danger"
                                    onClick={(event) => this.handleDeleteUser(event)}
                                >
                                    <FormattedMessage id="manage-user.delete" />
                                </button>
                            </div> */}
                            <div className='col-10'>
                                <div className="row more-infor">
                                    <div className="col-4 form-group">
                                        <label>Chọn người dùng </label>
                                        {console.log(this.state.listUsers)}
                                        <Select
                                            value={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            options={this.state.listUsersSelect}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 form-group">
                                {showAllUser === true ?
                                    <>
                                        <button
                                            class="btn m-2 btn-warning"
                                            onClick={(event) => this.handleShowAllUser(event)}
                                        >
                                            Ẩn danh sách đơn chưa duyệt
                                        </button>

                                        <div className='col-12 mb-5'>
                                            <TableManageUser
                                                handleEditUser={this.handleEditUser}
                                                actions={this.state.actions}
                                            />
                                        </div>

                                    </>
                                    :
                                    <>
                                        <button
                                            class="btn m-2 btn-primary"
                                            onClick={(event) => this.handleShowAllUser(event)}
                                        >
                                            Hiển thị danh sách đơn chưa duyệt
                                        </button>
                                    </>

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        fetchAllUser: () => dispatch(actions.fetchAllUserStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        editAUserRedux: (data) => dispatch(actions.editAUser(data)),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveOrder);
