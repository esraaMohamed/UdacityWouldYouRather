import React, {Component, Fragment} from 'react'
import {Avatar, Progress, Card, Col, Row, Divider, Badge} from "antd";
import Text from "antd/es/typography/Text";

class Answered extends Component {
    render() {
        const {questions, users} = this.props;
        return questions && users && (
            <Fragment>
                {
                    Object.values(users).map((user) => {
                        return Object.values(questions).map((question) => {
                            if (user.id === question.author) {
                                const allVotesCount = question.optionOne.votes.length + question.optionTwo.votes.length;
                                const yourVote = question.optionOne.votes.length > 0 ? 'optionOne' : 'optionTwo';
                                return (
                                    <Card key={question.id} className='question-card'>
                                        <Row className='question-header'>
                                            {`Asked By ${user.name}`}
                                        </Row>
                                        <Row span={24}>
                                            <Col span={8}>
                                                <Avatar className='user-avatar' src={user.avatarURL}/>
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
                                )
                            }
                        })
                    })
                }
            </Fragment>
        )
    }
}

export default Answered