import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core"
import {positions, transitions} from 'react-alert'

export const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#000',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#000',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#000',
            },
            '&:hover fieldset': {
                borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#000',
            },
        },
    },

})(TextField);


export const alertOptions = {
    timeout: 5000,
    offset: '90px',
    position: positions.TOP_CENTER,
    transition: transitions.SCALE
}
