import type { product } from "../type/type";
type Action={type:"ADDPRODUCT",payload:product}|{type:"TOOGLEPRODUCT",payload:{id:number}}|{type:"DELETEPRODUCT",payload:{id:number}}
export function reducer(state:product[],action:Action):product[]{
    switch(action.type){
        case "ADDPRODUCT":
            return [...state,action.payload];
        case "DELETEPRODUCT":
            return state.filter((e)=>e.id!==action.payload.id);
        case "TOOGLEPRODUCT":
            return state.map((e)=>e.id==action.payload.id ? {...e,status:!e.status}:e);
        default:
            return state;
    }
}