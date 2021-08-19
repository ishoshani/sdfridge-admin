import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { dummyItems } from "../../models/dummyLists";
import { Item } from "../../models/types";
import { deleteFridge } from "../fridges/FridgeApi";
import { setItem, addItem, deleteItem } from "./ItemApi";
import ItemComponent from "./ItemComponent";

const Items = () => {
    const [itemList, setItemList] = useState<Item[]>(dummyItems)
    const [addingItem, setAddingItem] = useState(false);
    const itemComponents : any[] = [];
    const handleSetItem = (details: any) => {
        const newItem = {id: details.item.id, name: details.name}
        setItem(newItem);
    }
    const handleNewItem = (details: any) => {
        addItem(details.name);
        setAddingItem(false);
    }
    const handleDeleteItem = (id: string) => {
        deleteItem(id);
    }

    itemList.forEach((item, index) => {
        itemComponents.push(
            <ItemComponent key={index} index={index} item={item} initial={false} handleDone={handleSetItem} handleDelete={handleDeleteItem}/>
        )
    })
    const addItemProcess = () => {
        setAddingItem(true)
    }

    return (
        <div>
        <Typography style={{textAlign:"center"}}>Items</Typography>
        <div>
            {itemComponents}
        </div>
        {
            addingItem ?
            <ItemComponent index={itemList.length} item={{ id: "-1", name: "" }} initial={true} handleDone={handleNewItem} handleDelete={handleDeleteItem} />
            :
            <Grid container justifyContent="center">
                <IconButton aria-label="Add" color="primary" onClick={addItemProcess}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </IconButton>
            </Grid>
        }
        </div>
        
    )
}

export default Items;