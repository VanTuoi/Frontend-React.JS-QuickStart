import React, { Component } from 'react';
import { connect } from 'react-redux';
class LookUpGoods extends Component {


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
                <div>Tra cứu kho hàng</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LookUpGoods);
