import express from 'express';
import { fileURLToPath } from "url";

const app = express();
const port = 8080;

const __dirname = fileURLToPath(new URL(".", import.meta.url));
app.use(express.static(__dirname));

app.get(/\/*/g, (req, res) => {
    console.log(req.path);
    res.sendFile(__dirname + '/public' + req.path);
});

app.listen(port, () => {
    console.log('Listening...');
});