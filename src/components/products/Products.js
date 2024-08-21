import React, { useEffect, useState } from "react";
import "./products.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Col,
  Row,
  Container,
} from "reactstrap";
import Pagination from "react-js-pagination";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { addItemToCart } from "../../redux/cartSlice";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "start") {
      dispatch(fetchProducts(currentPage));
    }
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-3">List Products</h1>
      <Row>
        {items.map((product) => (
          <Col md="4" key={product.id} className="mb-4">
            <Card>
              <Link to={`/detail/${product.id}`}>
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <CardBody>
                <CardTitle tag="h5">{product.name}</CardTitle>
                <CardText>${product.price}</CardText>
                <Button
                  color="primary"
                  className="me-2"
                  onClick={() => dispatch(addItemToCart(product))}
                >
                  <BsCartPlus /> Add to Cart
                </Button>
                <Link
                  to={`/detail/${product.id}`}
                  className="btn btn-secondary"
                >
                  View Details
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}

        <Pagination
          activePage={currentPage}
          itemsCountPerPage={6}
          totalItemCount={23}
          pageRangeDisplayed={2}
          onChange={handlePageChange}
        />
      </Row>
    </Container>
  );
};

export default Products;
