const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const contactsData = [
  {
    id: 1,
    name: "John Doe",
    phone: "0935366008",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: 2,
    name: "Jack Cusion",
    phone: "0935366008",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: 3,
    name: "Hieu Duong",
    phone: "0935366008",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: 4,
    name: "Duy Bao",
    phone: "0935366008",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  // Add more contacts as needed
];

const historyData = [
  {
    id: "1",
    name: "John Doe",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: "2",
    name: "Joshep",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  // Add more contacts as needed
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/contacts", (req, res) => {
  res.json(contactsData);
});

app.get("/history", (req, res) => {
  res.json(historyData);
});

app.post("/contacts/:id", (req, res) => {
  const id = req.params.id;
  const newContact = req.body;
  for (let i = 0; i < contactsData.length; i++) {
    if (contactsData[i].id == id) {
      contactsData[i] = newContact;
      break;
    }
  }
  res.json(contactsData);
});

app.delete("/contacts/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < contactsData.length; i++) {
    if (contactsData[i].id == id) {
      contactsData.splice(i, 1);
      break;
    }
  }
  res.json(contactsData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
