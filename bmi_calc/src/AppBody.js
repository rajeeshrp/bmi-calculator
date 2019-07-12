import React from 'react';

import BmiDisplay from './BmiDisplay';
import Card from './Card';
import HeightEntry from './HeightEntry';
import VerdictDisplay from './VerdictDisplay';
import WeightEntry from './WeightEntry';


class AppBody extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleHeightChange = this.handleHeightChange.bind(this);
    }

    handleWeightChange(event) {
        const weight = event.target.value;
        const height = this.state.height / 100;
        var newState = {
            weight: weight
        };
        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            newState.bmi = (weight / (height * height)).toFixed(1);
        }
        this.setState(newState);
    }
    
    handleHeightChange(event) {
        const height = event.target.value / 100;
        const weight = this.state.weight;
        var newState = {
            height: event.target.value,
        };
        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            newState.bmi = (weight / (height * height)).toFixed(1);
        }
        this.setState(newState);
    }

    render() {
        return (
            <main className="container-fluid App-body align-items-center justify-content-center">
                <div className="card-group justify-content-around card-container">
                    <Card extraClass="col-sm-4" cardHeader="Height & Weight" cardTitle="&nbsp;">
                        <form>
                            <HeightEntry value={ this.state.height } onChange={ this.handleHeightChange } />
                            <WeightEntry value={ this.state.weight } onChange={ this.handleWeightChange } />
                        </form>
                    </Card>
                    <Card extraClass="col-sm-4" cardHeader="Your BMI" cardTitle="&nbsp;">
                        <BmiDisplay bmi={ this.state.bmi } />
                        <VerdictDisplay bmi={ this.state.bmi } />
                    </Card>
                </div>
            </main>
        );
    }
}

export default AppBody;
