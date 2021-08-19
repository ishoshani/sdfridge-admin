export interface Fridge {
    id: string
    name: string
    address: string 
}

export interface Item {
    id: string
    name: string
}

export interface FridgeItem {
    id: string
    fridgeID: string
    itemID: string
    isNeeded: boolean
}