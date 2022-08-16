import React from "react";
import { useShoppingCart } from "./../context/ShoppingCardContext";
import storeItems from "../constants/data_items.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "./../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};
function CartItem({ id, quantity }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  return item === null ? null : (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        alt="img"
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price)}
        </div>
      </div>
      <div style={{ fontSize: ".85rem", fontWeight: "bold" }}>
        {formatCurrency((item?.price ? item?.price : 0) * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemFromCart(id)}
      >
        X
      </Button>
    </Stack>
  );
}

export default CartItem;
