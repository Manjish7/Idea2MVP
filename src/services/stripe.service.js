require("dotenv").config();
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
class StripeService {}
export default StripeService;
