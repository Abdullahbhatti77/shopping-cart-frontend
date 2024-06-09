import ProductCard from "./ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/actions/product";
// import { addToCart } from '../../redux/thunk.js';
import ProductDialog from "./ProductDialog";

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const totalProducts=useSelector((state)=>state.totalProducts)
  console.log(totalProducts)

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addProduct = () => {
    setIsDialogOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <div className="flex space-x-5 justify-center">
        <h1 className="text-xl font-semibold text-center mt-5">
          {/* Cart ({products.length} products) */}
          {totalProducts}
        </h1>
        <button
          className="text-xl font-semibold text-center mt-5 text-blue-500"
          onClick={addProduct}
        >
          Add a Product
        </button>
        <ProductDialog
          isOpen={isDialogOpen}
          onClose={handleDialogClose}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <ProductCard
                product={product}
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default ProductsPage;
