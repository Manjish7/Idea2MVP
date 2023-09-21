import indexRouter from "../routes/index.route";
import productRouter from "../routes/product.route";
import userRouter from "../routes/user.route";
import cartRouter from "../routes/cart.route";

export const routes = (app) => {
  app.use(indexRouter);
  app.use("/product", productRouter);
  app.use("/user", userRouter);
  app.use("/cart", cartRouter);
};
