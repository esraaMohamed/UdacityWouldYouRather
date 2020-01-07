import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Button from "antd/es/button";
import Result from "antd/es/result";

class Error extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link to='/home'>
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        )
    }
}

export default Error