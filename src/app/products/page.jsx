"use server";

import dbConnect from "@/lib/dbConnect";

export default async function Products() {
  // const data = await dbConnect(process.env.DB_COLLECTION)
  // console.log(data)
  // const fetchProducts = async () => {
  //   try {
  //     const data = await fetch("data.json");
  //     const res = await data.json();
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const products = await fetchProducts();
  // console.log(products);

  return (
    <div>
      <p>h</p>
    </div>
  );
}
