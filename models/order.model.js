import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    gigId: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    sellerId: {
      type: String,
      require: true,
    },
    buyerId: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Order', OrderSchema);
