import React from 'react';
import { Button, TextField } from '@material-ui/core';




const LongForm = () => {
    return (
        <form>
            <TextField
                id="outlined-multiline-static"
                label="Empty those thoughts a little:"
                multiline
                rows={4}
                variant="outlined"
                style={{ minWidth: "100%" }}
            />
            <Button variant="outlined">SUBMIT</Button>

        </form>

    )
}

export default LongForm;
