const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const axios = require("axios");

const typeMessage = {
  succcess: "success",
  error: "error",
};

const typeStatus = {
  success: 200,
  error: 500,
};

const resposeObject = {
  status: 200,
  message: "Success",
  data: null,
};

var contactsData = [
  {
    id: 1,
    name: "John 100 củ",
    phone: "012345678",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: 2,
    name: "Jack 100 củ",
    phone: "0936665447",
    avatar:
      "https://vcdn1-giaitri.vnecdn.net/2021/01/27/mtptung2-1611762083-2801-1611762227.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=6xnMEsZXHKurpgmEg6R4BQ",
  },
  {
    id: 3,
    name: "Hieu 100 củ",
    phone: "022355489",
    avatar:
      "https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    name: "Duy 100 củ",
    phone: "0789652546",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png",
  },
  // Add more contacts as needed
];

var historyData = [
  {
    id: "1",
    phone: "0812301805",
    name: "",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: "2",
    phone: "0825797938",
    name: "",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
];

var backupContact = [
  {
    id: 1,
    name: "John 100 củ",
    phone: "012345678",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: 2,
    name: "Jack 100 củ",
    phone: "0936665447",
    avatar:
      "https://vcdn1-giaitri.vnecdn.net/2021/01/27/mtptung2-1611762083-2801-1611762227.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=6xnMEsZXHKurpgmEg6R4BQ",
  },
  {
    id: 3,
    name: "Hieu 100 củ",
    phone: "022355489",
    avatar:
      "https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    name: "Duy 100 củ",
    phone: "0789652546",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Son_Tung_M-TP_1_%282017%29.png",
  },
  // Add more contacts as needed
];

var backupHistory = [
  {
    id: "1",
    phone: "0812301805",
    name: "",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
  {
    id: "2",
    phone: "0825797938",
    name: "",
    time: "22/11/2022",
    avatar:
      "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5136156_IMG_20200902_023158.jpg",
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all contact
app.get("/contacts", (req, res) => {
  try {
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contactsData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// get one contact
app.get("/contacts/:id", (req, res) => {
  try {
    const id = req.params.id;
    let contact = {};
    for (let i = 0; i < contactsData.length; i++) {
      if (contactsData[i].id == id) {
        contact = contactsData[i];
        break;
      }
    }

    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contact;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// get all history
app.get("/history", (req, res) => {
  try {
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = historyData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// create contact
app.post("/contacts", (req, res) => {
  try {
    const data = req.body;
    const id = contactsData.length + 1;
    const newContact = {
      id: id,
      name: data.name,
      phone: data.phone,
      avatar: data.avatar,
    };
    contactsData.push(newContact);
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contactsData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// update contact
app.put("/contacts/:id", (req, res) => {
  try {
    const id = req.params.id;
    const newContact = req.body;
    for (let i = 0; i < contactsData.length; i++) {
      if (contactsData[i].id == id) {
        contactsData[i] = newContact;
        break;
      }
    }
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contactsData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// update contact
app.put("/history/:id", (req, res) => {
  try {
    const id = req.params.id;
    const newHistory = req.body;
    for (let i = 0; i < historyData.length; i++) {
      if (historyData[i].id == id) {
        historyData[i].name = newHistory.name;
        break;
      }
    }
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = historyData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// delete contact
app.delete("/contacts/:id", (req, res) => {
  try {
    const id = req.params.id;
    for (let i = 0; i < contactsData.length; i++) {
      if (contactsData[i].id == id) {
        contactsData.splice(i, 1);
        break;
      }
    }
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contactsData;

    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// reset data
app.get("/backup/contact", (req, res) => {
  try {
    contactsData = backupContact;
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = contactsData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// reset data
app.get("/backup/history", (req, res) => {
  try {
    historyData = backupHistory;
    const resObj = resposeObject;
    resObj.status = typeStatus.success;
    resObj.message = typeMessage.succcess;
    resObj.data = historyData;
    res.json(resObj);
  } catch (error) {
    const resObj = resposeObject;
    resObj.status = typeStatus.error;
    resObj.message = typeMessage.error;
    resObj.data = null;
    res.json(resObj);
  }
});

// An array of 10 proxies
const proxy_list = [
  {
    host: "12.186.205.123",
    port: 80,
  },
  {
    host: "198.58.106.30",
    port: 8085,
  },
  {
    host: "51.38.191.151",
    port: 80,
  },
  {
    host: "199.229.254.129",
    port: 4145,
  },
  {
    host: "163.172.85.30",
    port: 80,
  },
];
let random_index = Math.floor(Math.random() * proxy_list.length);

// get data scholar
app.get("/scholar", async (req, res) => {
  var url = req.query.q;

  try {
    const response = await axios.get(url, {
      proxy: {
        protocol: "http",
        host: "proxy.scrapingbee.com",
        port: 8886,
        auth: {
          username:
            "478JLMBMG9WPJGXL7R5TGWMW7W1Q91U3XKGFFLS6BMLBU4UIUNQDLDAZ4FO71HKT5FPFW3VG3654A20D",
          password: "render_js=False&premium_proxy=True",
        },
      },
    });
    return res.send(response.data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
