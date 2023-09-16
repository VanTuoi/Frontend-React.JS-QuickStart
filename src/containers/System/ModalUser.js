import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { emitter } from "../../utils/emitter"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter();
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }
    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleFormParent();
    }
    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }
    handleAddNewUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            this.props.createNewUser(this.state)
        }
    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i])
                break;
            }
        }
        return isValid;
    }

    render() {
        // console.log('check chirld prorp', this.props, this.props.isOpen)
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className="modal-user-container"
                size='lg'
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Create new user</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email</label>
                            <input
                                onChange={(event) => this.handleOnChangeInput(event, "email")}
                                type='text'
                                value={this.state.email}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input
                                onChange={(event) => this.handleOnChangeInput(event, "password")}
                                type='password'
                                value={this.state.password}
                            />
                        </div>
                        <div className='input-container'>
                            <label>First name</label>
                            <input
                                onChange={(event) => this.handleOnChangeInput(event, "firstName")}
                                type='text'
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last name</label>
                            <input
                                onChange={(event) => this.handleOnChangeInput(event, "lastName")}
                                type='text'
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container max-witdh-input'>
                            <label>Address</label>
                            <input
                                onChange={(event) => this.handleOnChangeInput(event, "address")}
                                type='text'
                                value={this.state.address}
                            />
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        type='button'
                        className='px-3'
                        color="primary"
                        onClick={() => this.handleAddNewUser()}
                    >
                        Add new
                    </Button>
                    <Button
                        type='button'
                        className='px-3'
                        color="secondary"
                        onClick={() => this.toggle()}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
