import React from 'react';
import '../index.css'
import ReviewInputInternal from './ReviewInputInternal';

class ReviewInput extends React.Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
      }

    render() {
        return (
            <ReviewInputInternal ref={this.textInput} />
        )
    }
}

export default ReviewInput;