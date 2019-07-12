import React from 'react';


class HeightEntry extends React.Component {

    render() {
        return (
            <div className="form-group">
                <input 
                  type="number"
                  className="form-control"
                  name="height" 
                  placeholder="Height" min="0"
                  value={ this.props.height }
                  onChange={ this.props.onChange } />
                <small className="text-muted">Your Height in Cm.</small>
            </div>
        );
    }
}

export default HeightEntry;
