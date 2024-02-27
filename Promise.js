const cart = ["Shoes", "t-shirt", "Jeans", "Punjabi"];

const promise = createOrder(cart); // Firstly promise is a empty object // {data: ""}
// but as soon as the data got fetched, the theat object got filled with data

promise.then((orderId) => {
  proceedtoPayemt(orderId);
});
