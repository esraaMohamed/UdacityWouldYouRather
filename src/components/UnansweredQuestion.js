import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Card, Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
import Error from "./Error";
import {handleAnswerQuestion} from "../actions/questions";
import {Redirect} from 'react-router-dom'

class ViewQuestion extends Component {
    state = {
        selectedOption: '',
        toHome: false,
    };

    handleTextChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {question} = this.props;
        const {selectedOption} = this.state;
        this.props.handleAnswerQuestion(question.id, selectedOption);
        this.setState({
            toHome: true
        })
    };

    render() {
        const {author, question} = this.props;
        const {toHome} = this.state;
        if (toHome) {
            return <Redirect to='/home'/>
        }
        return question && author ? (
            <Card key={question.id} className='question-card'>
                <Row span={24}>
                    <Col span={6}/>
                    <Col span={12}>
                        <Card key={question.id} className='view-question-card'>
                            <Row className='question-header'>
                                {`${author.name} asks:`}
                            </Row>
                            <Row span={24}>
                                <Col span={8}>
                                    <Avatar className='user-avatar' src={author.avatarURL}/>
                                </Col>
                                <Col span={1}>
                                    <Divider type='vertical' className='vl'/>
                                </Col>
                                <Col span={15}>
                                    <Row className='question-text'>
                                        Would you rather ...
                                    </Row>
                                    <Row className='question-options'>
                                        <input className="form-check-input"
                                               type="radio"
                                               name="questionPoll"
                                               id="optionOne"
                                               value="optionOne"
                                               onChange={this.handleTextChange}/>&nbsp;
                                        {
                                            `${question.optionOne.text}`
                                        }
                                    </Row>
                                    <Row className='question-options'>
                                        <input className="form-check-input"
                                               type="radio"
                                               name="questionPoll"
                                               id="optionTwo"
                                               value="optionTwo"
                                               onChange={this.handleTextChange}/>&nbsp;
                                        {
                                            `${question.optionTwo.text}`
                                        }
                                    </Row>
                                    <Row>
                                        <Link to='/home' className='center'>
                                            <Button type='primary'
                                                    className='view-poll-btn'
                                                    onClick={this.handleSubmit}>Submit</Button>
                                        </Link>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}/>
                </Row>
            </Card>
        ) : (
            <Row>
                <Error/>
            </Row>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    handleAnswerQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion)