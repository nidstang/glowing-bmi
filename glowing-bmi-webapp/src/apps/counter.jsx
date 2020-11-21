import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputCounter from '../components/InputCounter';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 60
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        // v1
        // this.setState({ weight: this.state.weight + 1 });

        // v2
        // this.setState({ weight: this.state.weight + 1 });
        // this.setState({ weight: this.state.weight + 1 });
        // this.setState({ weight: this.state.weight + 1 });

        // v3
        // this.setState(state => ({ weight: state.weight + 1 }));
        // this.setState(state => ({ weight: state.weight + 1 }));
        // this.setState(state => ({ weight: state.weight + 1 }));

        // v4
        // this.setState(state => {
        //     if (state.weight >= 65) return state;
        //     return { weight: state.weight + 1 }
        // })

        // v5
        // const { maxWeight } = this.props;
        // this.setState(state => {
        //     if (state.weight >= maxWeight) return state;
        //     return { weight: state.weight + 1 }
        // })

        // v6
        // const incrementState = (state, props) => {
        //     if (state.weight >= props.maxWeight) return state;
        //     return { weight: state.weight + 1 }
        // };

        // this.setState(incrementState);
        
    }

    decrement() {
        this.setState({ weight: this.state.weight - 1 });
    }

    reset() {
        this.setState({ weight: 60 });
    }

    render() {
        const { weight } = this.state;
        return (
            <div className="counter-app">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <InputCounter label="Weight" 
                        value={weight}
                        increment={this.increment}
                        decrement={this.decrement}
                        reset={this.reset}
                    
                    />
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default CounterApp;