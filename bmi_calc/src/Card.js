import React from 'react';


class Card extends React.Component {

    render() {
        return (
            <div className={ "card text-center " + this.props.extraClass }>
                <div className="card-header">
                    { this.props.cardHeader }
                </div>
                <div className="card-body">
                    <h5 className="card-title">{ this.props.cardTitle }</h5>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Card;
