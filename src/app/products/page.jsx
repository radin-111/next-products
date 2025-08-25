import axios from "axios";

export default async function Products() {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/data.json");
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const products = await fetchProducts();
  console.log(products);

  return (
    <div>
      <p>h</p>
    </div>
  );
}
