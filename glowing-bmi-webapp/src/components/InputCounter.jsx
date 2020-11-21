import React from 'react';
import { FormGroup, ButtonGroup, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/RotateLeft';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import MinusOneIcon from '@material-ui/icons/ExposureNeg1';

const InputCounter = ({
    label = '',
    value = 0,
    increment = () => null,
    decrement = () => null,
    reset = () => null,
}) => (
    <FormGroup row>
        <TextField 
            className="input"
            value={value}
            InputLabelProps={{
                shrink: true,
            }}
            label={label}
            variant="outlined"
        />
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            <IconButton
                color="primary"
                aria-label="plus"
                onClick={increment}
                >
                <PlusOneIcon />
            </IconButton>
            <IconButton
                color="default"
                onClick={decrement}
                aria-label="minus">
                <MinusOneIcon />
            </IconButton>
            <IconButton
                color="secondary"
                onClick={reset}
                aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ButtonGroup>
    </FormGroup> 
);

export default InputCounter;
