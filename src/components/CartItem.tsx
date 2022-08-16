import React from "react";
import { useShoppingCart } from "./../context/ShoppingCardContext";
import storeItems from "../constants/data_items.json";
import { Stack } from "react-bootstrap";
type CartItemProps = {
  id: number;
  quantity: number;
};
function CartItem({ id, quantity }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  return item === null ? null : (
    <Stack direction="horizontal" gap={2}>
      <img
        alt="img"
        src={item?.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
}

export default CartItem;
