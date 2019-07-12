import React from 'react';


class VerdictDisplay extends React.Component {

    render() {
        var verdict = "";
        if (this.props.bmi < 18.5) {
            verdict = "You may be underweight.";
        } else if (this.props.bmi < 25) {
            verdict  = "You have a healthy weight."
        } else if (this.props.bmi < 30) {
            verdict = "You may be overweight."
        } else if (this.props.bmi >= 30) {
            verdict = "You may be obese."
        }
        return (
            <h6>{ verdict }</h6>
        );
    }
}

export default VerdictDisplay;
