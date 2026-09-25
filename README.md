# Express + Multer File Upload Assignment

This project creates a simple Express.js server that accepts a file upload using `multer` and saves it in the `uploads` folder.

## Run locally

```bash
npm install
node server.js
```

The server runs on:

```text
http://localhost:5000
```

## Upload endpoint

```http
POST /upload
```

Use Postman with:
- Key: `file`
- Type: `File`
- Value: any image file

Expected success response:

```json
{
  "message": "File uploaded successfully"
}
```

The uploaded file is saved inside the `uploads` directory.
