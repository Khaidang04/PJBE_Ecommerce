const mongoose = require("mongoose");
const { Schema } = mongoose; //

const cartModel = new Schema(
  {
    userId: {
      // type: mongoose.Schema.Types.ObjectId,// id cua user
      // ref:  "User",// tham chieu den user
      type: String,
      required: true,
      unique: true, // bat buoc
    },
    products: [
      {
        productId: {
          type: String,
          required: true, //bat buoc
        },
        quantity: {
          type: Number, // so luong
          default: 1, // mac dinh la 1
        },
      },
    ],
  },
  {
    timestamps: true, // true: createAt, updateAt
  }
);

module.exports = mongoose.model("Cart", cartModel);
