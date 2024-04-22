import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h1>ProductDetail</h1>
      <p>id: {params.id}</p>
    </>
  );
}

export default ProductDetail;
