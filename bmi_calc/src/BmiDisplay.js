import React from 'react';


class BmiDisplay extends React.Component {

    render() {
        return (
            <span className="display-1">{ this.props.bmi }</span>
        );
    }
}

export default BmiDisplay;
