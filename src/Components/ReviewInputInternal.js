import React from 'react';
import '../index.css'

class ReviewInputInternal extends React.Component {

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen bg-black">
            <div>
            <textarea
                name="comment"
                id="comment"
                className="flex sm:text-sm text-white bg-black border-black focus:ring-black focus:border-black resize-none overflow-y-auto w-96 h-96"
                defaultValue={''}
                ref={this.textInput}
            />
            </div>
        </div>
        )
    }
}

export default ReviewInputInternal;