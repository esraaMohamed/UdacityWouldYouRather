import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Col, Row} from "antd";
import Text from "antd/es/typography/Text";

class UserInfo extends Component {
    render() {
        const { authUser } = this.props;
        return (
            <Row>
                <Col>
                    <Text  >Hello, {authUser.name}</Text>&nbsp;
                    <Avatar src={authUser.avatarURL}/>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authedUser.user,
    }
};

export default connect(mapStateToProps)(UserInfo)