import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    sellerId: {
      type: Number,
      required: true,
    },
    buyerId: {
      type: Number,
      required: true,
    },
    readBySeller: {
      type: Boolean,
      required: true,
    },
    readeByBuyer: {
      type: Boolean,
      required: true,
    },
    lastMessage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Conversation', ConversationSchema);
