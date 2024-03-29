import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    totalStars: {
      type: String,
      default: 0,
    },
    starNumber: {
      type: String,
      default: 0,
    },
    cat: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
      require: true,
    },
    images: {
      type: [String],
      require: false,
    },
    shortTitle: {
      type: String,
      require: true,
    },
    shortDesc: {
      type: String,
      require: true,
    },
    deliveryTime: {
      type: Number,
      require: true,
    },
    revisionNumber: {
      type: Number,
      require: true,
    },
    features: {
      type: [String],
      require: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Gig', GigSchema);
