import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/product";
import FileBase from "react-file-base64";

const ProductDialog = ({ isOpen, onClose, onCreate }) => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData));
    onClose();
  };

  // const handleCreate = () => {
  //   onCreate({ name, price, description });
  //   onClose();
  // };
  const clear = () => {
    // setCurrentId(null);
    setProductData({ name: "", price: "", description: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">Add a Product</h2>
        <form
          autoComplete="off"
          noValidate
          className="form"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded"
              value={productData.name}
              onChange={(e) =>
                setProductData({ ...productData, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded"
              value={productData.price}
              onChange={(e) =>
                setProductData({ ...productData, price: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full px-4 py-2 border rounded"
              value={productData.description}
              onChange={(e) =>
                setProductData({ ...productData, description: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProductData({ ...productData, selectedFile: base64 })
              }
            />
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              type="submit"
            >
              Create Product
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              onClick={clear}
            >
              Clear
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDialog;
