import React, { Component } from 'react';
import { connect } from 'react-redux';
class SalesStatistics extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    render() {
        return (
            <>
                <div>Thống kê</div>
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(SalesStatistics);
