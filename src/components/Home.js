import React, {Component} from 'react'
import {Col, Tabs} from "antd";
import Row from "antd/es/grid/row";
import {handleGetQuestions} from "../actions/questions";
import {connect} from "react-redux";
import Error from "./Error";
import Questions from "./Questions";

class Home extends Component {

    state = {
        answeredQuestions: [],
        unansweredQuestions: [],
    };

    filterQuestions = () => {
        const {questions} = this.props;
        const answeredQuestions = [];
        const unansweredQuestions = [];
        let author = "";
        Object.keys(questions).map((k) => questions[k])
            .filter(
            (question) => {
                const isAnswered = question.optionOne.votes.length !== 0 || question.optionTwo.votes.length !== 0
                if (isAnswered) {
                    answeredQuestions.push(question)
                } else {
                    unansweredQuestions.push(question)
                }
                author = this.props.users[question.author];
            }
        ).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
        this.setState({
            answeredQuestions,
            unansweredQuestions,
            author
        })
    };

    componentDidMount() {
        this.props.handleGetQuestions();
        this.filterQuestions();
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.questions && this.props.questions !== nextProps.questions) {
            this.filterQuestions();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.questions && this.props.questions !== prevProps.questions) {
            this.filterQuestions();
        }
    }

    render() {
        const {TabPane} = Tabs;
        return this.props.authUser.user ? (
            <Row span={24}>
                <Col span={6}/>
                <Col span={12}>
                    <Tabs defaultActiveKey="1" className='tabs'>
                        <TabPane tab="Unanswered Questions" key="1">
                            <Questions questions={this.state.unansweredQuestions} users={this.props.users}/>
                        </TabPane>
                        <TabPane tab="Answered Questions" key="2">
                            <Questions questions={this.state.answeredQuestions} users={this.props.users}/>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={6}/>
            </Row>
        ) : (<Error/>)
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authedUser,
        questions: state.questions,
        users: state.users
    }
};

const mapDispatchToProps = {
    handleGetQuestions
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)