import { Card } from "antd"
import InputProduct from "./InputProduct"
import  Main  from "./Main"
export default function ProductTodolist() {
  return (
    <div>
        <Card style={{backgroundColor:"#1677ff" ,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <p style={{fontSize:"30px" , textAlign:"center"}}>📦</p>
            <h1 style={{fontSize:"20px", color:"#ffffff"}}>Quan Ly Cua Hang</h1>
        </Card>
        <InputProduct></InputProduct>
        <Main></Main>
    </div>
  )
}
