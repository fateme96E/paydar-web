import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import classes from "./styles.module.scss"
import colors from "@/app/styles/_colors.module.scss"

export default function StarRating({value}) {
    return (
        <Stack spacing={1}>
            <Rating
                name="half-rating"
                precision={1}
                max={5}
                className={classes.rating}
                value={value}
                readOnly 
                // onChange={(_, newValue) => onClick(newValue)}
                sx={{
                    direction: 'ltr',
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'unset',

                    '& .MuiRating-icon': {
                        color: colors['warning-1'], 
                    },
                }}
            />
        </Stack>
    );
}
