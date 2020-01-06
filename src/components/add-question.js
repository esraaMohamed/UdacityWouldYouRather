import React, { Component } from 'react'
import {Card, Input} from "antd";
import Row from "antd/es/grid/row";
import Button from "antd/es/button";

class AddQuestion extends Component{
    render() {
        return (
            <Card className='question-card'>
                <Row className='add-question-header'>Create New Question</Row>
                <Row className='add-question-sub-header'>Complete the question:</Row>
                <Row className='add-question-sub-header'>Would you rather ...</Row>
                <Row className='option-text'>
                    <Input placeholder="Enter Option One Text Here" />
                </Row>
                <Row className='bold-header'>
                    Or
                </Row>
                <Row className='option-text'>
                    <Input placeholder="Enter Option Two Text Here" />
                </Row>
                <Row>
                    <Button type='primary' className='submit-button'>Submit</Button>
                </Row>
            </Card>
        )
    }
}

export default AddQuestion