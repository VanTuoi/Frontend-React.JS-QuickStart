import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers } from '../../services/useService'
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
        }
    }
    state = {

    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        console.log(response.user)
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.user
            })
        }
    }


    render() {
        let arrusers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className='title text-center'>
                    Manager users
                </div>
                <div className='users-table mt-3 mx-2'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th className='text-center'>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arrusers && arrusers.map((item, index) => {
                                console.log('data', item, index)
                                return (
                                    <>
                                        <tr className="div_table">
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                                <button className="btn-delete"><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
