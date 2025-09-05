import React from "react";
import type { product } from "../type/type";
type Productcontext={
    Product:product[];
    handleAdd:(newproduct:product)=>void;
    handleDelete:(id:number)=>void;
    handleToogle:(id:number)=>void
}
export const Productcontext=React.createContext<Productcontext|undefined>(undefined);
