import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import './TableManageUser.scss'
import * as actions from '../../../store/actions'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import './ManageDoctor.scss';

import Select from "react-select"
import 'react-markdown-editor-lite/lib/index.css';
import { LANGUAGES } from "../../../utils";


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

class ManageDoctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            description: '',
            listDoctors: [],
        }
    }
    componentDidMount() {
        this.props.fetchAllDoctor();
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
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.builDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.builDataInputSelect(this.props.allDoctors);
            this.setState({
                listDoctors: dataSelect,
            })
        }
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
        console.log('handleEditorChange', html, text);
    }
    handleSaveContentMardown = () => {
        this.props.saveDetailDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value
        });
        console.log('handleSaveContentMardown', this.stat);
    }
    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
    }
    handleOnChangeDesc = (event) => {
        this.setState({
            description: event.target.value
        })
    }

    render() {

        return (
            <>
                <div className="container manage-doctor-container">
                    <div className="manage-doctor-title">
                        Tạo thêm thông tin doctor
                    </div>
                    <div className="row more-infor">
                        <div className="col-4 form-group">
                            <label>Chọn bác sĩ </label>
                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                options={this.state.listDoctors}
                            />
                        </div>
                        <div className="col-8 form-group">
                            <label>Giới thiệu</label>
                            <div>
                                <textarea className="from-control" rows="4"
                                    onChange={(event) => this.handleOnChangeDesc(event)}
                                    value={this.state.description}
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 manage-doctor-editor ">
                            <MdEditor
                                style={{ height: '350px' }}
                                renderHTML={text => mdParser.render(text)}
                                onChange={this.handleEditorChange}
                            />
                        </div>
                    </div>
                    <button
                        onClick={() => this.handleSaveContentMardown()}
                        className="save-content-doctor"
                    >Lưu thông tin
                    </button>
                </div >

            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        saveDetailDoctor: (data) => dispatch(actions.saveDetailDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
