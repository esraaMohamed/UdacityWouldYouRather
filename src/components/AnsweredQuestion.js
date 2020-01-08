import React, {Component} from 'react'
import {Avatar, Progress, Card, Col, Row, Divider, Badge} from "antd";
import Text from "antd/es/typography/Text";
import {Redirect} from "react-router-dom";
import Error from "./Error";

class AnsweredQuestion extends Component {
    state = {
        toHome: false,
    };

    render() {
        const {question, user} = this.props;
        const allVotesCount = question.optionOne.votes.length + question.optionTwo.votes.length;
        const yourVote = question.optionOne.votes.length > 0 ? 'optionOne' : 'optionTwo';
        const {toHome} = this.state;
        if (toHome) {
            return <Redirect to='/home'/>
        }
        return question && user ? (
            <Card key={question.id} className='question-card'>
                <Row className='question-header'>
                    {`Asked By ${user.name}`}
                </Row>
                <Row span={24}>
                    <Col span={8}>
                        <Avatar className='leader-board-avatar' src={user.avatarURL}/>
                    </Col>
                    <Col span={1}>
                        <Divider type='vertical' className='answered-question-card-vl'/>
                    </Col>
                    <Col span={15}>
                        <Row className='question-text'>
                            Results:
                        </Row>
                        <Row>
                            <Badge count={yourVote === 'optionOne' ? 'Your vote' : 0} className='badge'>
                                <Card className='answered-question-card'>
                                    {
                                        `Would you rather ${question.optionOne.text}?`
                                    }
                                    <Progress
                                        percent={Math.round(question.optionOne.votes.length / allVotesCount) * 100}/>
                                    <Text strong className='center'>
                                        {`${question.optionOne.votes.length} out of ${allVotesCount}`}
                                    </Text>
                                </Card>
                            </Badge>
                        </Row>
                        <Row>
                            <Badge count={yourVote === 'optionTwo' ? 'Your vote' : 0} className='badge'>
                                <Card className='answered-question-card'>
                                    {
                                        `Would you rather ${question.optionTwo.text}?`
                                    }
                                    <Progress
                                        percent={Math.round(question.optionTwo.votes.length / allVotesCount) * 100}/>
                                    <Text strong className='center'>
                                        {`${question.optionTwo.votes.length} out of ${allVotesCount}`}
                                    </Text>
                                </Card>
                            </Badge>
                        </Row>
                    </Col>
                </Row>
            </Card>
        ) : (
            <Row>
                <Error/>
            </Row>
        )
    }
}

export default AnsweredQuestion