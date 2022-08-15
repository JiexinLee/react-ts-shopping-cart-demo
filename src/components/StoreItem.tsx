import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
  thumbnailUrl: string;
};

function StoreItem({ name, price, imgUrl, thumbnailUrl }: StoreItemProps) {
  let quantity: number = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? <Button className="w-100"> Add</Button> : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
