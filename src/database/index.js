const { default: mongoose } = require("mongoose");

const connectToDb = async () => {
  const connectionURL =process.env.MONGODB_URL;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Job board database connected succesfully"))
    .catch((error) => console.log(error));
};


export default connectToDb;