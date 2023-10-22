const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
