import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/thunk.js';
import { deleteProduct } from "../../redux/actions/product.js";

function ProductCard({ product }) {
  const dispatch=useDispatch();

  const handleClick = () => {
    dispatch(addToCart(product.price,product.name));
  };
  const remove = () => {
    dispatch(deleteProduct(product._id));
  }
  // const remove = () => {
  //   dispatch(removeFromCart(price,name));
  // };
  


  return (
    <div className="px-5 py-5 rounded-lg bg-blue-100">
      <img src={product.selectedFile} alt="Product" className="w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm mt-1 text-gray-500">Price: ${product.price}</p>
      <p className="text-sm mt-1 text-green-500">{product.description}</p>
      <button className="w-full h-10 mt-5 bg-blue-500 text-white font-semibold rounded-lg" onClick={handleClick} >
        add to cart
      </button>
      <button className="w-full h-10 mt-5 bg-red-500 text-white font-semibold rounded-lg" onClick={remove} >
        Delete product  
      </button>
    </div>
  );
}

export default ProductCard;
