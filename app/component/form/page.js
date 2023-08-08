'use client'
import { BiPlus } from "react-icons/bi";
import { useReducer } from "react";
import { useRouter } from "next/navigation";


function Form() {

  function reducer(state,action){
    if(action.type=="change input"){
      return {
        ...state,
        [action.name]:action.value,
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    Name: "",
    Email: "",
    Mobile: "",
    City:"",
    Bill:"",
    Date:"",
  });
  function handlechange(e){
    dispatch({
      type:"change input",
      name:e.target.name,
      value:e.target.value,
    })
  }
  const router = useRouter();
  async function addcustomer(e){
    console.log("hi");
    e.preventDefault();
    try {
      const res=await fetch("/api/customer/",
      {
        method: "POST",
        headers: {
          "Content-type":"application/json",
        },
        body: JSON.stringify(state),
      });
      console.log(res)
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto py-5">
      <form
        className="grid lg:grid-cols-1 w-4/6 gap-8"
        onSubmit={(e)=>{
          addcustomer(e);
        }}
      >
        <div className="input-type">
          <input
            type="text"
            name="Name"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="Name"
            onChange={(e)=>{handlechange(e)}}
            value={state.Name}
          />
        </div>
        <div className="input-type">
          <input
            type="number"
            name="Mobile"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="Mobile_Number"
            onChange={(e)=>{handlechange(e)}}
            value={state.Mobile}
          />
        </div>
        <div className="input-type">
          <input
            type="email"
            name="Email"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="Email"
            onChange={(e)=>{handlechange(e)}}
            value={state.Email}
          />
        </div>
        <div className="input-type">
          <input
            type="text"
            name="City"
            className="border w-full px-5 py-3 focus:outline-none rounded-md"
            placeholder="City"
            onChange={(e)=>{handlechange(e)}}
            value={state.City}
          />
        </div>
        <div className="input-type">
          <input
            type="number"
            name="Bill"
            className="border px-5 py-3 focus:outline-none rounded-md"
            placeholder="Salary_Bill"
            onChange={(e)=>{handlechange(e)}}
            value={state.Bill}
          />
        </div>
        <div className="input-type">
          <input
            type="date"
            name="Date"
            className="border px-5 py-3 focus:outline-none rounded-md"
            placeholder="Salary_date"
            onChange={(e)=>{handlechange(e)}}
            value={state.Date}
          />
        </div>
        
        <button
          type="submit"
          className="flex justify-center text-md w-6/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500"
        >
          Add{" "}
          <span className="px-1">
            <BiPlus size={24}></BiPlus>
          </span>
        </button>
      </form>
    </div>
  );
}

export default Form;

