import React from 'react';


class WeightEntry extends React.Component {

    render() {
        return (
            <div className="form-group">
                <input 
                  type="number" 
                  className="form-control" 
                  name="weight" 
                  placeholder="Weight" 
                  min="0" 
                  value={ this.props.weight }
                  onChange={ this.props.onChange } />
                <small className="text-muted">Your Weight in Kg.</small>
            </div>
        );
    }
}

export default WeightEntry;
