import { Card, TextField, CardActions, Typography, Button, styled, Accordion } from '@mui/material';
import { red } from '@mui/material/colors';

export const CustomCard = styled(Card)({
    maxWidth: 345,
    margin: 'auto',
    borderRadius: 12,
    boxShadow: '0 10px 20px 5px rgba(0, 0, 0, 0.3)', // Increased box shadow

});
export const CustomAccordion = styled(Accordion)({
    // maxWidth: 345,
    // margin: 'auto',
    // borderRadius: 12,
    // boxShadow: '0 2px 4px 5px rgba(0, 0, 0, 0.2)', // Increased box shadow

});

export const TextFieldCustom = styled(TextField)({
    // maxWidth: 345,
    // margin: 'auto',
    borderRadius: 40,
    borderColor: "red",
    // boxShadow: '0 10px 20px 5px rgba(0, 0, 0, 0.3)', // Increased box shadow
    // '&:hover': {
    //     backgroundColor: 'green',
    //     borderColor: '#0062cc',
    // },

    '&:hover': {
        borderColor: "blue"
    }
});
