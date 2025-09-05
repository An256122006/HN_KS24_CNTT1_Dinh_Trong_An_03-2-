import { Card,Button } from "antd"
import { useContext } from 'react';

import { Productcontext } from "../context/Productcontext";
export default function Main () {
    const context=useContext(Productcontext);
    if(!context) throw console.error("");
    
  return (
    <Card>
        <table style={{ width:"100%", borderRadius:"8px"}}>
            <thead>
                <tr style={{ width:"100%", backgroundColor:"#f1f5f9",  height:'60px'}}>
                    <th>Ten</th>
                    <th>gia</th>
                    <th>Trang Thai</th>
                    <th>Hanh Dong</th>
                </tr>
            </thead>
            <tbody>
                    {context.Product.map((e)=>(
                        <tr key={e.id} style={{ width:"100%",  height:'60px'}}>
                            <th>{e.status ? <span>{e.name}</span>:<s>{e.name}</s>}</th>
                            <th>{e.price}</th>
                            <th>{e.status ? (<span style={{padding:"5px 20px",borderRadius:"5px",backgroundColor:"#bef4e5",color:"#238c68"}}>Con hang</span>):<span style={{padding:"5px 20px",borderRadius:"5px",backgroundColor:"#f9d3db",color:"#e24d56"}}>Het Hang</span>}</th>
                            <th><Button type="primary" onClick={()=>context.handleToogle(e.id)}>Danh dau</Button> <Button type="primary" onClick={()=>context.handleDelete(e.id)}>Xoa</Button></th>
                        </tr>
                    ))}
            </tbody>
        </table>
        <div style={{textAlign:"end", marginTop:"5px"}}>Tong don hang:{context.Product.length}</div>
    </Card>
  )
}
