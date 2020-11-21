import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { FEMALE, MALE, WEEKLY_EXERCISE, BODY_MASS_RATE, LOSING_FAT_RATE } from '../../lib/constants';
import InputCounter from '../InputCounter';

const YourInfoForm = ({
    weight,
    height,
    age,
    sex = FEMALE,
    weeklyExercise = WEEKLY_EXERCISE.NONE,
    bodyMassRate = BODY_MASS_RATE.LOW,
    losingFatRate = LOSING_FAT_RATE.REGULAR,
    classes
}) => (
    <div class="form">
        <InputCounter label="Weight" value={weight} />
        <InputCounter label="Height" value={height} />
        <InputCounter label="Age" value={age} />

        <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel id="sex-label">Sex</InputLabel>
                <Select
                    value={sex}
                    labelId="sex-label"
                    onChange={() => null}
                    className='select'
                    >
                        <MenuItem value={FEMALE}>FEMALE</MenuItem>
                        <MenuItem value={MALE}>MALE</MenuItem>
                    </Select>
                </FormControl>

            <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <InputLabel id="weeklyExercise-label">Weekly exercise</InputLabel>
                <Select
                    value={weeklyExercise}
                    labelId='weeklyExercise-label'
                    onChange={() => null}
                    className='select'
                >
                    <MenuItem value={WEEKLY_EXERCISE.NONE}>NONE</MenuItem>
                    <MenuItem value={WEEKLY_EXERCISE.LIGHT}>LIGHT</MenuItem>
                    <MenuItem value={WEEKLY_EXERCISE.MODERATE}>MODERATE</MenuItem>
                    <MenuItem value={WEEKLY_EXERCISE.HARD}>HARD</MenuItem>
            </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel id="bodyMassRate-label">Body mass</InputLabel>
            <Select
                value={bodyMassRate}
                labelId='bodyMassRate-label'
                onChange={() => null}
                className='select'
            >
                <MenuItem value={BODY_MASS_RATE.LOW}>{'Low < 25%'}</MenuItem>
                <MenuItem value={BODY_MASS_RATE.MID}>{'Mid 25%-35%'}</MenuItem>
                <MenuItem value={BODY_MASS_RATE.HIGH}>{'High > 35%'}</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel id="losingFatRate-label">Losing fat rate</InputLabel>
            <Select
                value={losingFatRate}
                labelId='losingFatRate-label'
                onChange={() => null}
                className='select'
            >
                <MenuItem value={LOSING_FAT_RATE.REGULAR}>REGULAR</MenuItem>
                <MenuItem value={LOSING_FAT_RATE.HIGH}>HIGH</MenuItem>
            </Select>
        </FormControl>
    </div>
);

export default YourInfoForm;