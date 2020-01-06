import React, {Component} from 'react'
import {Col, Tabs} from "antd";
import UnansweredQuestions from "./unanswered-questions";
import AnsweredQuestions from "./answered-questions";
import Row from "antd/es/grid/row";
import {handleGetQuestions} from "../actions/questions";
import {connect} from "react-redux";
import Error from "./error";

class Home extends Component {

    state = {
        answeredQuestions: [],
        unansweredQuestions: [],
    };

    filterQuestions = () => {
        const {authUser, questions} = this.props;
        const authedUserId = authUser.user.id;
        const answeredQuestions = [];
        const unansweredQuestions = [];
        let author = ""
        Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            .map((k) => questions[k])
            .filter(
            (question) => {
                if (question.optionOne.votes.includes(authedUserId)) {
                    answeredQuestions.push(question)
                } else if (question.optionTwo.votes.includes(authedUserId)) {
                    answeredQuestions.push(question)
                } else {
                    unansweredQuestions.push(question)
                }
                author = this.props.users[question.author];
            }
        );

        //answeredQuestions.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        this.setState({
            answeredQuestions,
            unansweredQuestions,
            author
        })
    };

     compare(a, b) {
        const questionA = a.questions.timestamp;
        const questionB = b.questions.timestamp;

        let comparison = 0;
        if (questionA > questionB) {
            comparison = 1;
        } else if (questionA < questionB) {
            comparison = -1;
        }
        return comparison;
    }


    getAnsweredQuestions = (questions) => {
        let answeredQuestions = [];
        for (let question of Object.values(questions)) {
            if (question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0) {
                answeredQuestions.push(question);
            }
        }
        console.log('answeredQuestions: ', answeredQuestions);
        this.setState({answeredQuestions});
    };

    componentDidMount() {
        this.props.handleGetQuestions()
        this.filterQuestions()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.questions && this.props.questions !== nextProps.questions) {
            this.filterQuestions()
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
                            <UnansweredQuestions questions={this.state.unansweredQuestions} users={this.props.users}/>
                        </TabPane>
                        <TabPane tab="Answered Questions" key="2">
                            <AnsweredQuestions questions={this.state.answeredQuestions} users={this.props.users}/>
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