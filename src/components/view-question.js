import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Card, Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
import Error from "./error";

class ViewQuestion extends Component {
    state = {
        question: null,
        author: ''
    };

    componentDidMount() {
        if (this.props.questions) {
            const {id} = this.props.match.params;
            let author = "";
            let question = "";
            if (this.props.questions[id] !== undefined && Object.keys(this.props.questions).includes(id)) {
                question = this.props.questions[id];
                author = this.props.users[question.author];
            }
            this.setState({
                question,
                author
            })
        }
    }

    render() {
        const {users} = this.props;
        const {question, author} = this.state;
        return question && users ? (
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
                            <Col span={1} >
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
                                           value="optionOne"/>&nbsp;
                                    {
                                        `${question.optionOne.text}`
                                    }
                                </Row>
                                <Row className='question-options'>
                                    <input className="form-check-input"
                                           type="radio"
                                           name="questionPoll"
                                           id="optionTwo"
                                           value="optionTwo"/>&nbsp;
                                    {
                                        `${question.optionTwo.text}`
                                    }
                                </Row>
                                <Row>
                                    <Link to='/home' className='center'>
                                        <Button type='primary' className='view-poll-btn'>Submit</Button>
                                    </Link>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={6}/>
            </Row>
        ) : (
            <Row>
                <Error/>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        authUser: state.authedUser,
        users: state.users
    }
};

export default connect(mapStateToProps)(ViewQuestion)