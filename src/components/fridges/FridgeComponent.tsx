import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, createStyles, Grid, GridSpacing, IconButton, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Fridge } from "../../models/types";

interface FridgeComponentProps {
    index: number
    fridge: Fridge
    initial: boolean
    handleDone: (details: any) => void
    handleDelete: (id: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        card1: {
            backgroundColor: "white"
        },
        card2: {
            backgroundColor: "#ccd9ed"
        }
    }))

const FridgeComponent = (props: FridgeComponentProps) => {
    const { index, fridge, initial, handleDone, handleDelete} = props
    const [editing, setEditing] = useState(initial)
    const classes = useStyles()
    const cardClass = index % 2 === 0 ? classes.card1 : classes.card2;
    const formik = useFormik({
        initialValues: {
            name: fridge.name,
            address: fridge.address
        },
        onSubmit: ((values) => {
            handleDone({ fridge: fridge, name: values.name, address: values.address })
            setEditing(false)

        }
        )
    });

    if (editing) {
        return (<Card className={cardClass}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container justifyContent="center" spacing={4}>
                    <Grid item xs={3}>
                        <TextField label="Name" id={"name"} name={"name"} value={formik.values.name} onChange={formik.handleChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField label="Address" id={"address"} name={"address"} value={formik.values.address} onChange={formik.handleChange} />
                    </Grid>
                    <Grid item xs={3}>
                        <Button color="primary" type="submit">
                            Done
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>)
    }


    return (<Card className={cardClass}>
        <Grid container justifyContent="center" spacing={4 as GridSpacing}>
            <Grid item xs={2}>

                <Typography>
                    {formik.values.name}
                </Typography>
            </Grid>
            <Grid item xs={2}>

                <Typography>
                    {formik.values.address}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button color="secondary" onClick={(event) => setEditing(true)}>Edit</Button>
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={(event) => handleDelete(fridge.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </IconButton>
            </Grid>
        </Grid>
    </Card>)

}

export default FridgeComponent