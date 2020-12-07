import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputCounter from '../components/InputCounter';
// import Storage from '../lib/storage';

// const storage = Storage('state');

// not coupling and props injected
// const inc = props => c => {
//     if (c >= props.maxWeight) return w;
//     return w + 1;
// };

// not coupling and props injected
// const CounterLogic = (props) => ({
//     inc: inc(prop)
// });

const HookCounterAppNew = (props) => {
    // not coupling and props injected
    // const logic = CounterLogic(props);
    const [weight, setWeight] = React.useState(0);

    const increment = () => {
        // no props in this setter
        // setWeight(weight + 1);
        // setWeight(w => w + 1); // we've got just one argument and this arg is just the value, not an object as the class version
        // setWeight(w => w + 1);
        // setWeight(w => w + 1);

        // setWeight(w => {
        //     if (w >= props.maxWeight) return w; // return; it is not gonna work because we're not just using object, only values
        //     return w + 1;
        // });

        // not coupling and props injected
        // setWeight(inc(props));
        // setWeight(logic.inc);
    };

    // use effect without dependencies
    // React.useEffect(() => {
    //     document.title = `Your weight: ${weight}`;
    // });

    // use effect with empty deps
    // React.useEffect(() => {
    //     document.title = `Your weight: ${weight}`;
    // }, []);

    // use effect with weight as dep
    // React.useEffect(() => {
    //     document.title = `Your weight: ${weight}`;
    // }, [weight]);

    return (
        <div className="counter-app">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <InputCounter label="Weight" 
                        value={weight}
                        increment={increment}
                        decrement={() => setWeight(weight - 1)}
                        reset={() => setWeight(0)}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

// eslint-disable-next-line
class HookCounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 60,
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({ weight: this.state.weight + 1 });
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

// export default HookCounterApp;
export default HookCounterAppNew;