import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";
import { fetchProductById } from "../../redux/productSlice";
import { addItemToCart } from "../../redux/cartSlice";

const ProdDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); //Get the product ID from the URL
    const {selectedProduct, status, error} = useSelector(state=>state.products);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [id]);

    const handleMinusQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev-1 : 1));
    };

    const handlePlusQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleAddToCart = () => {
        dispatch(addItemToCart(selectedProduct));
    }

    if (status === 'loading') return <p>Loading...</p>
    if (status === 'failed') return <p>Error: {error}</p>
  return (
    <Container className="py-5 my-3">
      <h2 className="text-center my-4">PRODUCT DETAIL</h2>
      <Row className="mt-5">
        <Col md="6">
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.name}
            className="w-100"
          />
        </Col>
        <Col md="6" className="d-flex flex-column gap-3">
          <h1 className="text-uppercase font-weight-bold">
            {selectedProduct?.name}
          </h1>
          <p className="font-weight-bold h3">${selectedProduct?.price}</p>
          <div className="d-flex gap-3">
            <div className="d-flex align-items-center">
              <Button
                color="light"
                className="font-weight-bold"
                onClick={handleMinusQuantity}
              >
                -
              </Button>
              <span className="bg-light px-3 py-2 font-weight-bold mx-2">
                {quantity}
              </span>
              <Button
                color="light"
                className="font-weight-bold"
                onClick={handlePlusQuantity}
              >
                +
              </Button>
            </div>
            <Button
              color="dark"
              className="text-white px-4 py-2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </div>
          <p>{selectedProduct?.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProdDetail;
