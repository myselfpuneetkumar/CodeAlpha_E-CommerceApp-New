import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user.id;

    const newOrder = new Order({ user: userId, items });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
