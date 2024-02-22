const mongoose = require("mongoose");

const Coin = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    coin: {
      type: String,
      required: [true, "Please add a coin value"],
    },
    amount: {
      type: Number,
      required: [true, "Please add a amount value"],
    },
    // date: {
    //   type: Number,
    //   required: [true, "Please add a date value"],
    // },
  },
  {
    timestamps: true,
  }
);

const CoinSchema = mongoose.model("Coin", Coin);

module.exports = CoinSchema;
