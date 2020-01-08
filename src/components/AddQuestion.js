import React, { Component } from 'react'
import {Card, Input} from "antd";
import Row from "antd/es/grid/row";
import Button from "antd/es/button";
import {handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom'

class AddQuestion extends Component{
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    };

    handleOptionOneTextChange = (e) => {
        e.preventDefault();
        this.setState({
            optionOneText: e.target.value
        })
    };

    handleOptionTwoTextChange = (e) => {
        e.preventDefault();
        this.setState({
            optionTwoText: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {authedUser} = this.props;
        this.props.handleAddQuestion({optionOneText, optionTwoText, author:authedUser});
        this.setState({toHome: true});
    };

    render() {
        if(this.state.toHome) {
            return <Redirect to='/home'/>
        }
        return (
            <Card className='question-card'>
                <Row className='add-question-header'>Create New Question</Row>
                <Row className='add-question-sub-header'>Complete the question:</Row>
                <Row className='add-question-sub-header'>Would you rather ...</Row>
                <Row className='option-text'>
                    <Input placeholder="Enter Option One Text Here" onChange={this.handleOptionOneTextChange}/>
                </Row>
                <Row className='bold-header'>
                    Or
                </Row>
                <Row className='option-text'>
                    <Input placeholder="Enter Option Two Text Here" onChange={this.handleOptionTwoTextChange}/>
                </Row>
                <Row>
                    <Button type='primary' className='submit-button'
                            disabled={this.state.optionOneText === '' && this.state.optionTwoText === ''}
                            onClick={this.handleSubmit}>Submit</Button>
                </Row>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser.user.id
    }
};

const mapDispatchToProps = {
    handleAddQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion)