import express from 'express';
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl } from './Controllers/url.js';

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://agarwalkartik704:UyWMerFXhbi22vLg@cluster0.acyo3cj.mongodb.net/", {
    dbName: "NodeJs_Mastery_Course",
}
).then(() => console.log("MongoDb Connected..!")).catch((error) => console.log(error));

app.get('/', (req, res) => {
    res.render("index.ejs", { shortUrl: null })
})

app.post('/short', shortUrl)

app.get('/:shortCode', getOriginalUrl)

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));