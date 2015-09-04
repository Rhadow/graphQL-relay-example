// Express
import express from 'express';
import bodyParser from 'body-parser';

// Mongoose
import mongoose from 'mongoose';

// GraphQL
import schema from '../schema/schema.js';
import { graphql } from 'graphql';

const app = express();
const PORT = 3000;
const DB_PATH = 'mongodb://localhost:27017/test';

mongoose.connect(DB_PATH);

app.use(bodyParser.text({
	type: 'application/graphql'
}));

app.post('/graphql', (req, res) => {
	graphql(schema, req.body).then((result) => {
		res.send(JSON.stringify(result, null, 2));
	});
});

const server = app.listen(PORT, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log(`Graphql is listening at https://${host}:${port}`);
});
