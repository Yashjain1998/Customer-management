"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const remove=()=>{
      const confirmted=confirm("Are you sure?");
      if(confirmted){
        const res=fetch(`https://localhost:3000/api/customer?id=${id}`,{
          method: "DELETE",
        });
        if(res.ok){
          router.refresh();
        }
      } 
    };
    return (
        <button onClick={remove} className="text-red-400">
          <HiOutlineTrash size={24} />
        </button>
      );
}