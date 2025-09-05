import { useReducer,useEffect } from "react";
import type { product } from "../type/type";
import {reducer} from "../reducer/reducer"
import { Productcontext } from "./Productcontext";
import ProductTodolist from "../component/ProductTodolist";


export default function Text() {
    const [Product,dispatch]=useReducer(reducer,[] as product[], () => {
    const local = localStorage.getItem("taskproduct");
    return local ? JSON.parse(local) : [];
  });
  useEffect(() => {
    localStorage.setItem("taskproduct", JSON.stringify(Product));
  }, [Product]);
    const handleAdd=(newproduct:product)=>{
        dispatch({type:"ADDPRODUCT",payload:newproduct});
    }
    const handleDelete=(id:number)=>{
        dispatch({type:"DELETEPRODUCT",payload:{id}});
    }
    const handleToogle=(id:number)=>{
        dispatch({type:"TOOGLEPRODUCT",payload:{id}});
    }
  return (
    <Productcontext.Provider value={{Product,handleAdd,handleDelete,handleToogle}}>
         <ProductTodolist/>
    </Productcontext.Provider>
  )
}
