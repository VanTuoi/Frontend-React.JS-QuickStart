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
class ManageUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender: '',

            previewImageURL: '',
            isOpen: false,          // img

            arrCheck: {             // check isValid
                email: 'Email', password: 'Mật khẩu',
                firstName: 'Tên', lastName: 'Họ',
                phoneNumber: 'Số điện thoại', address: 'Địa chỉ'
            },

            actions: '',

            listUsers: [],
            listUsersSelect: [],
            userEditId: '',
            selectedOption: '',
            showAllUser: false,
        }
    }

    async componentDidMount() {
        this.props.getAllUser();
        this.setState({
            actions: CRUD_ACTIONS.CREATE
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let dataSelect = this.builDataInputSelect(this.props.listUsers);
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                avatar: '',
                actions: CRUD_ACTIONS.CREATE,
                listUsers: this.props.listUsers,
                listUsersSelect: dataSelect
            })
        }
    }
    builDataInputSelect = (inputData) => {
        let result = [];
        let language = this.props.language
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = `${item.firstName} ${item.lastName}`
                object.label = language === LANGUAGES.VI ? labelVi : labelEn
                object.value = item.id;
                result.push(object)
            })

        }
        return result
    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageURL: objectUrl,
                avatar: file
            })
        }
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
    handleEditUser = (user) => {
        this.setState({
            email: user.email,
            password: 'HARDCODE',
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phonenumber,
            gender: user.gender,
            avatar: '',
            userEditId: user.id,
            actions: CRUD_ACTIONS.EDIT,

            selectedOption: user.id
        })
    }
    handleCreateUser = () => {
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
        else {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                gender: '',
                avatar: '',

                actions: CRUD_ACTIONS.CREATE,
                selectedOption: ''
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
        if (this.state.actions === CRUD_ACTIONS.EDIT) {

            // fire redux cancel user
            this.props.editUserRedux({
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
    handleDeleteUser = () => {
        this.props.deleteUserRedux(this.state.selectedOption.value);
    }
    checkValidateInput = () => {
        let isValid = true;
        if (this.props.language === 'en') {
            this.setState({
                arrCheck: { email: 'Email', password: 'Password', firstName: 'First name', lastName: 'Last name', phoneNumber: 'Phone number', address: 'Address' }
            })
        } else {
            this.setState({
                arrCheck: { email: 'Email', password: 'Mật khẩu', firstName: 'Tên', lastName: 'Họ', phoneNumber: 'Số điện thoại', address: 'Địa chỉ' }
            })
        }
        // console.log('check state: ', this.state);
        for (let i = 0; i < Object.keys(this.state.arrCheck).length; i++) {
            let key = Object.keys(this.state.arrCheck)[i];
            // console.log('key: ', key);
            if (!this.state[key]) {
                isValid = false;
                if (this.props.language === 'en') {
                    alert('This input is required: ' + this.state.arrCheck[key]);
                } else {
                    alert('Ô dữ liệu cần phải nhập vào: ' + this.state.arrCheck[key]);
                }
                break;
            }
        }
        return isValid;
    }
    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    openPreviewImage = () => {
        if (!this.state.previewImageURL) return;
        this.setState({
            isOpen: true
        })
    }
    handleShowAllUser = () => {
        this.setState({
            showAllUser: !this.state.showAllUser
        })
    }
    render() {
        let language = this.props.language;
        let selectedOption = this.state.selectedOption;
        let showAllUser = this.state.showAllUser
        let { email, password, firstName, lastName, phoneNumber, address, gender, avatar } = this.state
        return (
            <div className='user-redux-container'>
                <div className="text-center" ></div>
                <div className='title'>
                    Quản lý khách hàng
                </div>

                <div className='user-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='email'
                                    value={email}
                                    onChange={(event) => this.onChangeInput(event, 'email')}
                                    disabled={this.state.actions === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password'
                                    value={password}
                                    onChange={(event) => this.onChangeInput(event, 'password')}
                                    disabled={this.state.actions === CRUD_ACTIONS.EDIT ? true : false}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input className='form-control' type='text'
                                    value={firstName}
                                    onChange={(event) => this.onChangeInput(event, 'firstName')}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input className='form-control' type='text'
                                    value={lastName}
                                    onChange={(event) => this.onChangeInput(event, 'lastName')}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className='form-control' type='text'
                                    onChange={(event) => this.onChangeInput(event, 'phoneNumber')}
                                    value={phoneNumber}
                                />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text'
                                    onChange={(event) => this.onChangeInput(event, 'address')}
                                    value={address}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-control"
                                    onChange={(event) => this.onChangeInput(event, 'gender')}
                                    value={gender}
                                >
                                    <option value='male' onClick={(event) => this.onChangeInput(event, 'gender')}>Nam</option>
                                    <option value='female' onClick={(event) => this.onChangeInput(event, 'gender')}>Nữ</option>
                                    <option value='other' onClick={(event) => this.onChangeInput(event, 'gender')}>Khác</option>

                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input id="previewImg" type='file' hidden
                                        onChange={(event) => this.handleOnchangeImage(event)}
                                    />
                                    <label className='label-upload' htmlFor="previewImg">Tải ảnh <i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.previewImageURL})` }}
                                        onClick={() => this.openPreviewImage()}
                                    ></div>
                                </div>
                            </div>
                            <div className='col-12 my-3'>
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
                            </div>
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
                                            Ẩn danh sách người dùng
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
                                            Hiển thị danh sách người dùng
                                        </button>
                                    </>

                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.previewImageURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
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
        getAllUser: () => dispatch(actions.getAllUser()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        editUserRedux: (data) => dispatch(actions.editUser(data)),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);
