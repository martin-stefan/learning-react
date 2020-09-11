import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onInc} />
                <CounterControl label="Decrement" clicked={this.props.onDec}  />
                <CounterControl label="Add 5" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub}  />
                <hr />
                <button onClick={this.props.onStore}>Store Result</button>
                <ul>
                    {this.props.strResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDel(result.id)}>{result.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        strResults: state.results
    };
};

const mapDispatch = dispatch => {
    return {
        onInc:() => dispatch({type: actionTypes.INCREMENT, value: 1}),
        onDec:() => dispatch({type: actionTypes.DECREMENT, value: 1}),
        onAdd:() => dispatch({type: actionTypes.ADDFIVE, value: 5}),
        onSub:() => dispatch({type: actionTypes.SUBFIVE, value: 5}),
        onStore: () => dispatch({type: actionTypes.STORE}),
        onDel: (id) => dispatch({type: actionTypes.DELETE, id: id})
    };
};

export default connect(mapStateToProps, mapDispatch)(Counter);