import { Fridge } from "../../models/types";

export const setFridge = (fridge: Fridge) => {
    alert(JSON.stringify(fridge));
}
export const addFridge = (name : string, address: string) => {
    alert(JSON.stringify("adding a new Fridge"))
}

export const deleteFridge = (id : string) => {
    alert(JSON.stringify("sent delete for "+id))
}