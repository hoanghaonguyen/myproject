import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  CardTitle,
} from "reactstrap";
import {
  removeItemFromCart,
  addItemToCart,
  clearCart,
} from "../../redux/cartSlice";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleMinusQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addItemToCart({ ...item, quantity: item.quantity - 1 }));
    }
  };

  const handlePlusQuantity = (item) => {
    dispatch(addItemToCart({ ...item, quantity: 1 }));
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <Row>
        <Col md="8">
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-3">
              <Row className="g-0">
                <Col md="4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </Col>
                <Col md="8">
                  <CardBody>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <strong>${item.price}</strong>
                    </p>
                    <div className="d-flex align-items-center">
                      <Button
                        color="light"
                        className="font-weight-bold"
                        onClick={() => handleMinusQuantity(item)}
                      >
                        -
                      </Button>
                      <span className="bg-light px-3 py-2 font-weight-bold mx-2">
                        {item.quantity}
                      </span>
                      <Button
                        color="light"
                        className="font-weight-bold"
                        onClick={() => handlePlusQuantity(item)}
                      >
                        +
                      </Button>
                      <Button
                        color="danger"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                    <CardTitle tag="h5" className="mt-3">
                      {`Price: $${(item.price * item.quantity).toFixed(2)}`}
                    </CardTitle>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>

        <Col md="4">
          <Card>
            <CardBody>
              <h4 className="card-title">Order Summary</h4>
              <p className="card-text">Subtotal: ${totalPrice.toFixed(2)}</p>
              <p className="card-text">
                Tax: ${(totalPrice * 0.08).toFixed(2)}
              </p>
              <h5 className="card-text">
                Total: ${(totalPrice * 1.08).toFixed(2)}
              </h5>
              <Button color="primary" size="lg" className="w-100 mt-4">
                Proceed to Checkout
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Button
        color="danger"
        size="lg"
        className="w-30 mt-2"
        onClick={() => dispatch(clearCart)}
      >
        Remove All
      </Button>
    </Container>
  );
};

export default CartList;
