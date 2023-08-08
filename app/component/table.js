import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

async function getCustomer() {
  try {
    const res = await fetch("http://localhost:3000/api/customer", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
}


export default async function Table() {
  const {datas} = await getCustomer();

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Mobile</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">City</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Bill</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Date</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {datas.map((t) => (
          <tr className="bg-white-100" key={t._id}>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.Name}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.Email}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.Mobile}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.City}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.Bill}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-black-200">{t.Date}</span>
            </td>
            <td>
              <span className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/component/Editcustomer/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
