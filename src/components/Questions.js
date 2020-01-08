import React, {Component, Fragment} from 'react'
import {Avatar, Button, Card, Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";

class Questions extends Component {
    render() {
        const {questions, users} = this.props;
        return questions && users && (
            <Fragment>
                {
                    Object.values(users).map((user) => {
                        return Object.values(questions).map((question) => {
                            if (user.id === question.author) {
                                return (
                                    <Card key={question.id} className='question-card'>
                                        <Row className='question-header'>
                                            {`${user.name} asks:`}
                                        </Row>
                                        <Row span={24}>
                                            <Col span={8}>
                                                <Avatar className='user-avatar' src={user.avatarURL}/>
                                            </Col>
                                            <Col span={1} >
                                                <Divider type='vertical' className='vl'/>
                                            </Col>
                                            <Col span={15}>
                                                <Row className='question-text'>
                                                    Would you rather
                                                </Row>
                                                <Row>
                                                    {
                                                        `...${question.optionOne.text}...`
                                                    }
                                                </Row>
                                                <Row>
                                                    {
                                                        `...${question.optionTwo.text}...`
                                                    }
                                                </Row>
                                                <Row>
                                                    <Link to={`/questions/${question.id}`} className='center'>
                                                        <Button type='primary' className='view-poll-btn'>View
                                                            Poll</Button>
                                                    </Link>
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

export default Questions