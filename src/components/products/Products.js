import React, { useEffect } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Col, Row, Container } from "reactstrap";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../../redux/productSlice';
import { addProductToCart } from '../../redux/cartSlice';
const Products = () => {
    const dispatch = useDispatch();
    const { items, status, error } = useSelector((state) => state.products);


    useEffect(()=> {
        if (status === 'start') {
            dispatch(fetchProducts());
        }
    }, []);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    if (status === 'failed') {
        return <div>{error}</div>;
    }
    return (
        <Container className="mt-5">
            <h1 className='text-center mb-3'>List Products</h1>
          <Row>
            {items.map((product) => (
              <Col md="4" key={product.id} className="mb-4">
                <Card >
                  <Link to={`/detail/${product.id}`}>
                    <CardImg top width="100%" src={product.image} alt={product.name} />
                  </Link>
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>${product.price}</CardText>
                    <Button color="primary" className="me-2" onClick={()=>dispatch(addProductToCart(product))}>
                      <BsCartPlus /> Add to Cart
                    </Button>
                    <Link to={`/detail/${product.id}`} className="btn btn-secondary">
                      View Details
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );}

export default Products