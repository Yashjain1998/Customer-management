"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
    const router = useRouter();
    const remove=()=>{
        router.refresh();
    }
    return (
        <button onClick={remove} className="text-red-400">
          <HiOutlineTrash size={24} />
        </button>
      );
}