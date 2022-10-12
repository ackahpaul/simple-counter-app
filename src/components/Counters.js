import React, { Component } from 'react';
import Counter from "./Counter";

export class Counters extends Component {
    render() {
       
        return (
            <div>
                <button
                    className="btn btn-success m-2"
                    onClick={this.props.onReset}
                    disabled={this.props.counters.length === 0 ? "disabled" : ""}
                >
                    <i className="fa fa-refresh" aria-hidden="true" />
                </button>
                <button
                    className="btn btn-primary m-2"
                    onClick={this.props.onRestart}
                    disabled={this.props.counters.length !== 0 ? "disabled" : ""}
                >
                    <i className="fa fa-recycle" aria-hidden="true" />
                </button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                    />
                ))}
            </div>
        )
    }
}

export default Counters
