import React, {Component} from 'react'
import {Row, Card, Col, Avatar, Divider} from "antd";
import {connect} from "react-redux";
import {handleAllUsers} from "../actions/shared";

class LeaderBoard extends Component {

    getAnsweredQuestionsCount = (answers) => {
        return Object.keys(answers).length
    };

    getCreatedQuestionsCount = (questions) => {
        return questions.length
    };

    getScore = (answers, questions) => {
        return this.getAnsweredQuestionsCount(answers) + this.getCreatedQuestionsCount(questions)
    };

    render() {
        const {users} = this.props;
        const sortedUsers = Object.values(users).sort((a, b) => ((Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)))
        return users && (sortedUsers.map((user) =>
                    <Card key={user.id} className='question-card'>
                        <Row span={24}>
                            <Col span={6}>
                                <Avatar className='leader-board-avatar' src={user.avatarURL}/>
                            </Col>
                            <Col span={1}>
                                <Divider type='vertical' className='vl'/>
                            </Col>
                            <Col span={10}>
                                <Row className='leader-board-header'>{user.name}</Row>
                                <Row className='questions-scoring'>Answered
                                    Questions {this.getAnsweredQuestionsCount(user.answers)}</Row>
                                <Divider type='horizontal' className='hl'/>
                                <Row className='questions-scoring'>Created
                                    Questions {this.getCreatedQuestionsCount(user.questions)}</Row>
                            </Col>
                            <Col span={1}>
                                <Divider type='vertical' className='vl'/>
                            </Col>
                            <Col span={6} className='score-card'>
                                <Row className='score-header'>Score</Row>
                                <Row className='score-result'>
                                    <Avatar className='score ant-avatar-string'>
                                        {this.getScore(user.answers, user.questions)}
                                    </Avatar>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = {
    handleAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)