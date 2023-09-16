import indexRouter from "../routes/index.route";
import productRouter from "../routes/product.route";

export const routes = (app) => {
  app.use(indexRouter);
  app.use("/product", productRouter);
};
