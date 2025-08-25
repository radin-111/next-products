import Swal from "sweetalert2";


export default async function Products() {
  const fetchProducts = async () => {
    try {
      const data = await fetch(`${process.env.SERVER}/api/allProducts`);
      const res = await data.json();
      return res;
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const products = await fetchProducts();

  return (
    <div className="container mx-auto p-4 my-10">
      {/* Responsive grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 w-96 shadow-sm mx-auto"
          >
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold">${product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
