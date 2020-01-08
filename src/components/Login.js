import React, {Component, Fragment} from 'react'
import {Button, Card, Col, Input, Row, Select, Icon} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'
import {handleAllUsers, handleInitialData} from '../actions/shared';
import {setAuthedUser} from '../actions/authUser';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    state = {
        user: '',
        toHome: false
    };

    componentDidMount() {
        this.props.handleAllUsers();
        this.props.handleInitialData();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { users } = this.props;
        const { user } = this.state;
        const authedUser = Object.values(users).filter(u => u.name === user);
        this.props.setAuthedUser(authedUser[0]);
    };

    handleChange = (value) => {
        this.setState({user: value})
    };

    render() {
        const InputGroup = Input.Group;
        const {Option} = Select;
        const {authUser} = this.props;
        if (authUser) {
            return <Redirect to="/home" />
        }
        return (
            <Fragment>
                <Row span={24}>
                    <Col span={6}/>
                    <Col span={12}>
                        <Card className='card'>
                            <Row className='login-header-background'>
                                <Row span={24}>
                                    <Col/>
                                    <Col className='bold-header'>
                                        Welcome to the Would You Rather App!
                                    </Col>
                                    <Col/>
                                </Row>
                                <Row span={24}>
                                    <Col/>
                                    <Col className='center'>
                                        Please sign in to continue
                                    </Col>
                                    <Col/>
                                </Row>
                            </Row>
                            <Row>
                                <Row span={24}>
                                    <Col/>
                                    <Col className='icon'>
                                        <Icon component={() => (<img className='icon' alt='react-redux-icon'
                                                                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fequimper.gallerycdn.vsassets.io%2Fextensions%2Fequimper%2Freact-native-react-redux%2F2.0.3%2F1551449028703%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1"/>)}/>
                                    </Col>
                                    <Col/>
                                </Row>
                                <Row span={24}>
                                    <Col/>
                                    <Col className='sign-in'>
                                        Sign in
                                    </Col>
                                    <Col/>
                                </Row>
                                <Row span={24}>
                                    <Col/>
                                    <Col>
                                        <InputGroup className='dropdown ant-input-group ant-input-group-compact'
                                                    compact>
                                            <Select onChange={this.handleChange} id='dropdown' className='dropdown' defaultValue="Select User ">
                                                {
                                                    Object.values(this.props.users).map((user) => {
                                                            return <Option key={user.id}
                                                                           value={user.name}>{user.name}</Option>
                                                        }
                                                    )}
                                            </Select>
                                        </InputGroup>
                                    </Col>
                                    <Col/>
                                </Row>
                                <Row span={24}>
                                    <Col/>
                                    <Col className='sign-in-button'>
                                        <Button type='primary' onClick={(e) => this.handleSubmit(e)}>Sign in</Button>
                                    </Col>
                                    <Col/>
                                </Row>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}/>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        authUser: state.authedUser.user
    }
};

const mapDispatchToProps = {
    handleAllUsers,
    handleInitialData,
    setAuthedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)