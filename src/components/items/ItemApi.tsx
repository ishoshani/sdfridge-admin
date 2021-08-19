import { Item } from "../../models/types";

export const setItem = (item: Item) => {
    alert(JSON.stringify(item));
}
export const addItem = (name : string) => {
    alert(JSON.stringify("adding a new item"))
}

export const deleteItem = (id : string) => {
    alert(JSON.stringify("sent delete for item "+id))
}