function Product(props) {
  const { productObj } = props;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 border border-gray-100">
      
      {/* Title */}
      <h2 className="text-xl text-blue-400 font-semibold mb-2 line-clamp-2">
        {productObj.title}
      </h2>

      {/* Description */}
      <p className="text-sm font-mono text-gray-600 leading-relaxed line-clamp-4">
        {productObj.description}
      </p>

    </div>
  );
}

export default Product;