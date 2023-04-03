const banco = require("mongoose");
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
banco.connect("mongodb://localhost:27017/usersdb", option);

module.exports = banco;
