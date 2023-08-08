import Editform from "../endiform.js"



  async function getTopicById(id) {
    try {
      const res = await fetch(`http://localhost:3000/api/customer/${id}`, {
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
  
  export default async function EditTopic({ params }) {
    const { id } = params;
    const {datas} = await getTopicById(id);
    return <Editform id={id} data={datas} />;
  }
  