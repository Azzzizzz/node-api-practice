const http = require("http");
const PORT = 3000;

function handler(req, res) {
  switch (req.url) {
    case "/":
      res.write("Hello World!!");
      break;
    case "/Users":
      const users = [
        {
          name: "Ivan Jensen",
          phone: "(189) 387-6798",
          email: "donec.vitae@uterat.ca",
          country: "Italy",
        },
        {
          name: "Aaron Osborne",
          phone: "(743) 789-7413",
          email: "convallis.dolor@egetmetuseu.org",
          country: "Italy",
        },
        {
          name: "Lysandra Alvarez",
          phone: "(692) 862-1877",
          email: "donec.fringilla@quisquefringilla.edu",
          country: "Canada",
        },
        {
          name: "Chaim Gonzales",
          phone: "1-484-273-4261",
          email: "quis@euismod.co.uk",
          country: "Germany",
        },
        {
          name: "Inez Levy",
          phone: "(660) 162-6958",
          email: "donec.felis.orci@nullamfeugiat.org",
          country: "Nigeria",
        },
      ];
      res.write(JSON.stringify(users));
      break;
    case "/names":
      res.write(JSON.stringify("Names"));
      break;
    default:
      res.write("Not Found ");
      break;
  }
  res.end();
}

const server = http.createServer(handler);

server.listen(PORT, () => console.log("server is running at port", PORT));
