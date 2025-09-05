import { Card, Input, Checkbox, Button } from "antd";
import { useContext, useState } from "react";
import { Productcontext } from "../context/Productcontext";
import type { product } from "../type/type";
type newproduct = {
  name: string;
  price: number;
  ischeck: boolean;
};
import type { CheckboxProps } from "antd";
export default function InputProduct() {
  const [input, setInput] = useState<newproduct>({
    name: "",
    price: 0,
    ischeck: false,
  });
  const constext = useContext(Productcontext);
  if (!constext) throw console.error("");
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onChange: CheckboxProps["onChange"] = (e) => {
    setInput({...input,ischeck:e.target.checked})
  };
  const submit=()=>{
    if(input.name=="") return;
    if(input.price==0) return;
    const newProduct:product={id:Math.floor(Math.random()*10000),name:input.name,price:input.price,ischeck:false,status:input.ischeck}
    constext.handleAdd(newProduct);
    setInput({name:"",price:0,ischeck:false});
  }
  return (
    <Card style={{ marginTop: "50px" }}>
      <h1 style={{ fontSize: "20px", textAlign: "center" }}>➕Them san pham</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          style={{ width: 500 }}
          placeholder="Ten san pham"
          name="name"
          value={input.name}
          onChange={change}
        />
        <Input
          style={{ width: 200 }}
          placeholder="gia"
          name="price"
          value={input.price}
          onChange={change}
        />
        <div>
          <Checkbox onChange={onChange} value={input.ischeck}>con hang</Checkbox>
        </div>
        <Button type="primary" onClick={submit}>Them</Button>
      </div>
    </Card>
  );
}
