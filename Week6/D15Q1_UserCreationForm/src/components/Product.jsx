function Product(props){
    const {productObj} =props;
    return(
        <div className="border-2 shadow-2xl rounded-1xl  text-center">
        <h2 className="text-2xl text-blue-400">{productObj.title}</h2>
        <p className="text-sm font-mono text-1xl">{productObj.description}</p>
        </div>
    )
}

export default Product