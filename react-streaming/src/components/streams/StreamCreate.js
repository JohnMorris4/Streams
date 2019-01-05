import React, {Component}  from 'react'
import {connect} from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm'


class StreamCreate extends Component {
    // Use Arrow functions when running across binding issues
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render(){
        
        return (
            <div>
            <h3>Create A Stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
            </div>
             
        )
    }
}
export default connect(null, { createStream }) (StreamCreate);