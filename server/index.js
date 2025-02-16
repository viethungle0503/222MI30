const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const morgan = require("morgan");
app.use(morgan("combined"));

const cors = require('cors');
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const fileUpload = require('express-fileupload');
app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);

let bookDatabase = [
  {
    "id": "1", "name": "Giáo trình tin học căn bản",
    "price": 26000.00, "image": "b1.jpg", description: 'Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong Windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt. Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiệu cuốn sách cùng bạn', image: 'b1.jpg', updateDate: '10/25/2014 12:00:00 GMT+0700', quantity: 120, cdCode: 7, publisherCode: 1, idHolder: 1
  },
  {
    "id": "2", "name": "Giáo trình Cơ sở Dữ liệu Với Visual Basic 2005 và ADO.NET 2.0",
    "price": 12000.00, "image": "b2.jpg", description: 'Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản trong Microsoft giới thiệu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khoản ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cùng các bạn', image: 'b2.jpg', updateDate: '10/23/2013 12:00:00 GMT+0700', quantity: 25, cdCode: 3, publisherCode: 2, idHolder: 2
  },
  { "id": "3", "name": "Visual Basic 2005 Tập 3, Quyển 2: Lập trình Web", "price": 20000.00, "image": "b3.jpg", description: `"Visual Basic 2005 Tập 3, Quyển 2: Lập trình Web với Cơ sở dữ liệu" sẽ cung cấp kỹ thuật và hướng dẫn bạn: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web "Quản lý CD Shop" trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET Framework. Sách có kèm theo CD-ROM bài tập`, image: 'b3.jpg', updateDate: '09/15/2014 12:00:00 GMT+0700', quantity: 240, cdCode: 8, publisherCode: 4, idHolder: 3 }

];
let oldBookDatabase = [
  {
    "BookId": "b1", "BookName": "Kỹ thuật lập trình cơ bản",
    "Price": 70, "Image": "b1.png"
  },
  {
    "BookId": "b2", "BookName": "Kỹ thuật lập trình nâng cao",
    "Price": 100, "Image": "b2.png"
  },
  { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.png" },
  { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.png" },
  { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.png" },
]
//create default API

// Add this line to serve our index.html page
app.use(express.static('public'));
app.get("/image/:id", cors(), (req, res) => {
  id = req.params["id"]
  console.log('upload/' + id)
  res.sendFile(__dirname + '/upload/' + id);
});
app.get('/', (req, res) => {
  res.sendFile('index.html');
});
app.post('/upload', (req, res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;
  // If no image submitted, exit
  if (!image) return res.sendStatus(400);
  // Move the uploaded image to our upload folder
  image.mv(__dirname + '/upload/' + image.name);

  // All good
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`My server is listening on port ${port}`)
})

// Old BookDatabase
app.get("/booksold", cors(), (req, res) => {
  res.send(oldBookDatabase)
});
app.get("/booksold/:id", cors(), (req, res) => {
  id = req.params["id"]
  let p = oldBookDatabase.find(x => x.BookId == id)
  res.send(p)
});
app.post("/booksold", cors(), (req, res) => {
  //put json book into database
  oldBookDatabase.push(req.body);
  //send message to client(send all database to client)
  res.send(oldBookDatabase)
});
app.put("/booksold", cors(), (req, res) => {
  book = oldBookDatabase.find(x => x.BookId == req.body.BookId)
  if (book != null) {
    book.BookName = req.body.BookName
    book.Price = req.body.Price
    // book.Image = req.body.Image
  }
  res.send(oldBookDatabase)
});
app.delete("/booksold/:id", cors(), (req, res) => {
  id = req.params["id"]
  oldBookDatabase = oldBookDatabase.filter(x => x.BookId !== id);
  res.send(oldBookDatabase)
})

// New BookDatabase
app.get("/books", cors(), (req, res) => {
  res.send(bookDatabase)
});
app.get("/books/:id", cors(), (req, res) => {
  id = req.params["id"]
  let p = bookDatabase.find(x => x.id == id)
  res.send(p)
});
app.post("/books", cors(), (req, res) => {
  //put json book into database
  bookDatabase.push(req.body);
  //send message to client(send all database to client)
  res.send(bookDatabase)
});
app.put("/books", cors(), (req, res) => {
  book = bookDatabase.find(x => x.id == req.body.id)
  if (book != null) {
    book.id = req.body.idHolder
    book.idHolder = req.body.idHolder
    book.name = req.body.name
    book.price = req.body.price
    book.description = req.body.description
    book.image = req.body.image
    book.updateDate = req.body.updateDate
    book.quantity = req.body.quantity
    book.cdCode = req.body.cdCode
    book.publisherCode = req.body.publisherCode
    console.log(`idHolder body ${req.body.idHolder}`);
    console.log(`id body ${req.body.id}`);
    console.log(`id ${book.id}`);
    console.log(`id ${book.idHolder}`);
  }
  res.send(bookDatabase)
});
app.delete("/books/:id", cors(), (req, res) => {
  id = req.params["id"]
  bookDatabase = bookDatabase.filter(x => x.id !== id);
  res.send(bookDatabase)
});

const { MongoClient, ObjectId } = require('mongodb');
// client = new MongoClient("mongodb+srv://admin:hA1eZI8R43MrrxLT@mydemocluster.4so16ye.mongodb.net/test?authMechanism=SCRAM-SHA-1");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

app.get("/fashions", cors(), async (req, res) => {
  // const result = await fashionCollection.find({}).sort({ _id: -1}).toArray();
  const result = await fashionCollection.find({}).sort({ createdDate: -1 }).toArray();
  res.send(result)
}
);
app.get("/fashion/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0])
}
);
app.get("/fashionsgroupbystyle", cors(), async (req, res) => {
  let result = await fashionCollection.find({}).sort({ createdDate: -1 }).toArray();
  groups = result.reduce((groups, item) => ({
    ...groups,
    [item.style]: [...(groups[item.style] || []), item]
  }), {});
  res.send(Object.entries(groups));
}
);
app.get("/fashionsgroupbystyle/:style", cors(), async (req, res) => {
  var o_style = req.params["style"];
  let result = await fashionCollection.find({ style: o_style }).sort({ createdDate: -1 }).toArray();
  groups = result.reduce((groups, item) => ({
    ...groups,
    [item.style]: [...(groups[item.style] || []), item]
  }), {});
  res.send(Object.entries(groups));
}
);
app.get("/fashions/style", cors(), async (req, res) => {
  var o_style = req.query.style;
  const result = await fashionCollection.find({ style: o_style }).toArray();
  res.send(result)
}
);
app.post("/fashions", cors(), async (req, res) => {
  try {
    req.body._id = null;
    //put json Fashion into database
    await fashionCollection.insertOne(req.body);
    //send message to client(send all database to client)
    res.send(req.body)
  }
  catch (err) {
    console.log(err);
  }

});
app.put("/fashions", cors(), async (req, res) => {
  //update json Fashion into database
  await fashionCollection.updateOne(
    { _id: new ObjectId(req.body._id) },//condition for update
    {
      $set: { //Field for updating
        style: req.body.style,
        fashion_subject: req.body.fashion_subject,
        fashion_detail: req.body.fashion_detail,
        fashion_image: req.body.fashion_image,
        updatedDate: req.body.updatedDate
      }
    }
  )
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0])
});
app.delete("/fashion/:id", cors(), async (req, res) => {
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  //update json Fashion into database
  await fashionCollection.deleteOne(
    { _id: o_id }
  )
  //send Fahsion after remove
  res.send(result[0])
});


