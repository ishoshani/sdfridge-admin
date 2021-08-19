import React, { useState } from "react"
import { Grid, IconButton, Typography } from "@material-ui/core"
import { Fridge } from "../../models/types"
import FridgeComponent from "./FridgeComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { addFridge, deleteFridge, setFridge } from "./FridgeApi";
import { dummyFridges } from "../../models/dummyLists";

 

const Fridges = () => {
    const [fridgelist, setFridgeList] = useState<Fridge[]>(dummyFridges)
    const [addingFridge, setAddingFridge] = useState(false);
    const fridgeComponents: any[] = [];
    const handleSetFridge = (details: any) => {
        const newFridge = { id: details.fridge.id, name: details.name, address: details.address }
        setFridge(newFridge);
    }
    const addNewFridge = (details: any) => {
        addFridge(details.name, details.address);
        setAddingFridge(false);
    }
    const handleDeleteFridge = (id: string) => {
        deleteFridge(id);
    }

    fridgelist.forEach((fridge: Fridge, index: number) => {
        fridgeComponents.push(
            <FridgeComponent key={index} index={index} fridge={fridge} initial={false} handleDone={handleSetFridge} handleDelete={handleDeleteFridge} />
        )
    });

    const addFridgeProcess = () => {
        setAddingFridge(true);
    }


    return (<div>
        <Typography style={{textAlign:"center"}}>Fridges</Typography>
        <div>
            {fridgeComponents}
        </div>
        {addingFridge ?
            <FridgeComponent index={fridgelist.length} fridge={{ id: "-1", name: "", address: "" }} initial={true} handleDone={addNewFridge} handleDelete={handleDeleteFridge} />
            :
            <Grid container justifyContent="center">
                <IconButton aria-label="Add" color="primary" onClick={addFridgeProcess}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </IconButton>
            </Grid>
        }
    </div>)
}

export default Fridges