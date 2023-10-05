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
class ManageProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {

            nameProduct: '',
            codeProduct: '',
            price: '',
            screen: '',
            operatingSystem: '',
            CPU: '',
            RAM: '',
            ROM: '',
            color: '',
            frontCamera: '',
            rearCamera: '',
            SIM: '',
            battery: '',
            charger: '',
            size: '',
            weight: '',
            weight: '',
            material: '',

            isOpen: false,          // img

            arrCheck: {             // check isValid
            },

            actions: '',

            listProducts: [],
            listProductsSelect: [],
            selectedOption: '',
            showAllProduct: false,
        }
    }

    async componentDidMount() {
        // this.props.getAllProduct();              // Product
        this.setState({
            actions: CRUD_ACTIONS.CREATE
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            let dataSelect = this.builDataInputSelect(this.props.listProducts);
            this.setState({
                nameProduct: '',
                codeProduct: '',
                screen: '',
                operatingSystem: '',
                CPU: '',
                RAM: '',
                ROM: '',
                color: '',
                frontCamera: '',
                rearCamera: '',
                SIM: '',
                battery: '',
                charger: '',
                size: '',
                weight: '',
                material: '',
                actions: CRUD_ACTIONS.CREATE,
                listProducts: this.props.listProducts,
                listProductsSelect: dataSelect
            })
        }
    }
    builDataInputSelect = (inputData) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.nameProduct
                object.value = item.codeProduct;
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
    handleEditUser = (product) => {
        this.setState({
            nameProduct: product.nameProduct,
            codeProduct: product.codeProduct,
            screen: product.screen,
            operatingSystem: product.operatingSystem,
            CPU: product.CPU,
            RAM: product.RAM,
            ROM: product.ROM,
            color: product.color,
            frontCamera: product.frontCamera,
            rearCamera: product.rearCamera,
            SIM: product.SIM,
            battery: product.battery,
            charger: product.charger,
            size: product.size,
            weight: product.weight,
            material: product.material,

            actions: CRUD_ACTIONS.EDIT,
            selectedOption: product.id
        })
    }
    handleCreateUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid === true) return;
        if (this.state.actions === CRUD_ACTIONS.CREATE) {
            // fire redux create user
            this.props.createNewUser({
                nameProduct: this.state.nameProduct,
                codeProduct: this.state.codeProduct,
                screen: this.state.screen,
                operatingSystem: this.state.operatingSystem,
                CPU: this.state.CPU,
                RAM: this.state.RAM,
                ROM: this.state.ROM,
                color: this.state.color,
                frontCamera: this.state.frontCamera,
                rearCamera: this.state.rearCamera,
                SIM: this.state.SIM,
                battery: this.state.battery,
                charger: this.state.charger,
                size: this.state.size,
                weight: this.state.weight,
                material: this.state.material,
            })
        }
        else {
            this.setState({
                nameProduct: '',
                codeProduct: '',
                screen: '',
                operatingSystem: '',
                CPU: '',
                RAM: '',
                ROM: '',
                color: '',
                frontCamera: '',
                rearCamera: '',
                SIM: '',
                battery: '',
                charger: '',
                size: '',
                weight: '',
                material: '',

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
                nameProduct: this.state.nameProduct,
                codeProduct: this.state.codeProduct,
                screen: this.state.screen,
                operatingSystem: this.state.operatingSystem,
                CPU: this.state.CPU,
                RAM: this.state.RAM,
                ROM: this.state.ROM,
                color: this.state.color,
                frontCamera: this.state.frontCamera,
                rearCamera: this.state.rearCamera,
                SIM: this.state.SIM,
                battery: this.state.battery,
                charger: this.state.charger,
                size: this.state.size,
                weight: this.state.weight,
                material: this.state.material,

                selectedOption: ''
            })
        }
        if (this.state.actions === CRUD_ACTIONS.EDIT) {

            // fire redux cancel user
            this.props.editUserRedux({
                nameProduct: this.state.nameProduct,
                codeProduct: this.state.codeProduct,
                screen: this.state.screen,
                operatingSystem: this.state.operatingSystem,
                CPU: this.state.CPU,
                RAM: this.state.RAM,
                ROM: this.state.ROM,
                color: this.state.color,
                frontCamera: this.state.frontCamera,
                rearCamera: this.state.rearCamera,
                SIM: this.state.SIM,
                battery: this.state.battery,
                charger: this.state.charger,
                size: this.state.size,
                weight: this.state.weight,
                material: this.state.material,

                selectedOption: this.state.codeProduct
            })
        }
    }
    handleDeleteUser = () => {
        this.props.deleteUserRedux(this.state.selectedOption.value);
    }
    checkValidateInput = () => {
        let isValid = true;

        /// code
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
            showAllProduct: !this.state.showAllProduct
        })
    }
    render() {
        console.log('r', this.state.actions);
        let language = this.props.language;
        let selectedOption = this.state.selectedOption;
        let showAllProduct = this.state.showAllProduct
        let { nameProduct, codeProduct, price, screen, operatingSystem, CPU, RAM, ROM,
            color, frontCamera, rearCamera, battery,
            charger, size, weight, material
        } = this.state
        return (
            <div className='user-redux-container'>
                <div className="text-center" ></div>
                <div className='title'>
                    Quản lý sản phẩm
                </div>

                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <label>Tên sản phẩm</label>
                                <input className='form-control' type='text'
                                    value={nameProduct}
                                    onChange={(event) => this.onChangeInput(event, 'nameProduct')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Mã sản phẩm</label>
                                <input className='form-control' type='text'
                                    value={codeProduct}
                                    onChange={(event) => this.onChangeInput(event, 'codeProduct')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Giá bán</label>
                                <input className='form-control' type='text'
                                    value={price}
                                    onChange={(event) => this.onChangeInput(event, 'price')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Màn hình</label>
                                <input className='form-control' type='text'
                                    value={screen}
                                    onChange={(event) => this.onChangeInput(event, 'screen')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Hệ điều hành</label>
                                <input className='form-control' type='text'
                                    value={operatingSystem}
                                    onChange={(event) => this.onChangeInput(event, 'operatingSystem')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>CPU</label>
                                <input className='form-control' type='text'
                                    value={CPU}
                                    onChange={(event) => this.onChangeInput(event, 'CPU')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>RAM</label>
                                <input className='form-control' type='text'
                                    value={RAM}
                                    onChange={(event) => this.onChangeInput(event, 'RAM')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>ROM</label>
                                <input className='form-control' type='text'
                                    value={ROM}
                                    onChange={(event) => this.onChangeInput(event, 'ROM')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Màu sắc</label>
                                <input className='form-control' type='text'
                                    value={color}
                                    onChange={(event) => this.onChangeInput(event, 'color')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Camera trước</label>
                                <input className='form-control' type='text'
                                    value={frontCamera}
                                    onChange={(event) => this.onChangeInput(event, 'frontCamera')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Camera sau</label>
                                <input className='form-control' type='text'
                                    value={rearCamera}
                                    onChange={(event) => this.onChangeInput(event, 'rearCamera')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Pin</label>
                                <input className='form-control' type='text'
                                    value={battery}
                                    onChange={(event) => this.onChangeInput(event, 'battery')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Xạc</label>
                                <input className='form-control' type='text'
                                    value={charger}
                                    onChange={(event) => this.onChangeInput(event, 'charger')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Kích thước</label>
                                <input className='form-control' type='text'
                                    value={size}
                                    onChange={(event) => this.onChangeInput(event, 'size')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Khối lượng</label>
                                <input className='form-control' type='text'
                                    value={weight}
                                    onChange={(event) => this.onChangeInput(event, 'weight')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Chất liệu</label>
                                <input className='form-control' type='text'
                                    value={material}
                                    onChange={(event) => this.onChangeInput(event, 'material')}
                                />
                            </div>
                            <div className='col-3'>
                                <label>Ảnh sản phẩm</label>
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
                                        'Tạo mới'
                                        :
                                        'Hủy thay đổi'
                                    }
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    class={this.state.actions === CRUD_ACTIONS.EDIT ? "btn m-1 btn-success" : "btn m-1 btn-primary"}
                                    onClick={() => this.handleSaveUser()}
                                >
                                    {this.state.actions === CRUD_ACTIONS.EDIT ?
                                        'Chỉnh sửa'
                                        :
                                        'Lưu thay đổi'
                                    }
                                </button>
                                <button
                                    disabled={selectedOption === '' ? true : false}
                                    class="btn m-1 btn-danger"
                                    onClick={(event) => this.handleDeleteUser(event)}
                                >
                                    Xóa
                                </button>
                            </div>
                            <div className='col-10'>
                                <div className="row more-infor">
                                    <div className="col-4 form-group">
                                        <label>Chọn sản phẩm </label>
                                        {console.log(this.state.listProducts)}
                                        <Select
                                            value={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            options={this.state.listProductsSelect}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 form-group">
                                {showAllProduct === true ?
                                    <>
                                        <button
                                            class="btn m-2 btn-warning"
                                            onClick={(event) => this.handleShowAllUser(event)}
                                        >
                                            Ẩn danh sách sản phẩm
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
                                            Hiển thị danh sách sản phẩm
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
        listProducts: state.admin.products,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllProduct: () => dispatch(actions.getAllProduct()),
        createNewProduct: (data) => dispatch(actions.createNewProduct(data)),
        editProduct: (data) => dispatch(actions.editProduct(data)),
        deleteProduct: (id) => dispatch(actions.deleteProduct(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct);
