import React, {Component} from 'react'
import {Button, Card, Col, Input, Row, Select, Icon} from "antd";
import 'antd/dist/antd.css';

class Login extends Component {
    render() {
        const InputGroup = Input.Group;
        const {Option} = Select;
        return (
            <Row span={24}>
                <Col span={6}/>
                <Col span={12}>
                    <Card className='card'>
                        <Row className='login-header-background'>
                            <Row span={24}>
                                <Col />
                                <Col className='bold-header'>
                                    Welcome to the Would You Rather App!
                                </Col>
                                <Col />
                            </Row>
                            <Row span={24}>
                                <Col />
                                <Col className='center'>
                                    Please sign in to continue
                                </Col>
                                <Col />
                            </Row>
                        </Row>
                        <Row>
                            <Row span={24}>
                                <Col />
                                <Col className='icon'>
                                    <Icon  component={() => (<img className='icon' alt='react-redux-icon' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fequimper.gallerycdn.vsassets.io%2Fextensions%2Fequimper%2Freact-native-react-redux%2F2.0.3%2F1551449028703%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1" />)} />
                                </Col>
                                <Col />
                            </Row>
                            <Row span={24}>
                                <Col />
                                <Col className='sign-in'>
                                    Sign in
                                </Col>
                                <Col />
                            </Row>
                            <Row span={24}>
                                <Col/>
                                <Col >
                                    <InputGroup className='dropdown ant-input-group ant-input-group-compact' compact>
                                        <Select className='dropdown' defaultValue="Select User ">
                                            <Option value="User1">User1</Option>
                                            <Option value="User2">User2</Option>
                                        </Select>
                                    </InputGroup>
                                </Col>
                                <Col />
                            </Row>
                            <Row span={24}>
                                <Col />
                                <Col className='sign-in-button'>
                                    <Button type='primary'>Sign in</Button>
                                </Col>
                                <Col />
                            </Row>
                        </Row>
                    </Card>
                </Col>
                <Col span={6}/>
            </Row>
        )
    }
}

export default Login