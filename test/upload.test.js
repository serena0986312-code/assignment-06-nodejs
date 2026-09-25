const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const { app } = require('../server');

function buildMultipartBody(fieldName, filePath) {
  const boundary = '----TestBoundary123';
  const fileName = path.basename(filePath);
  const fileBuffer = fs.readFileSync(filePath);
  const preamble = Buffer.from(
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="${fieldName}"; filename="${fileName}"\r\n` +
    'Content-Type: image/png\r\n\r\n'
  );
  const trailer = Buffer.from(`\r\n--${boundary}--\r\n`);
  return Buffer.concat([preamble, fileBuffer, trailer]);
}

function sendMultipartRequest(url, fieldName, filePath) {
  const body = buildMultipartBody(fieldName, filePath);
  const boundary = '----TestBoundary123';

  return new Promise((resolve, reject) => {
    const req = http.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': body.length
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ statusCode: res.statusCode, body: data }));
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

test('POST /upload saves the uploaded image in uploads folder', async () => {
  const server = app.listen(0);
  const port = server.address().port;

  const tempFile = path.join(__dirname, 'sample-upload.png');
  const pngBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAF' +
    'A1fWAAAAAElFTkSuQmCC',
    'base64'
  );
  fs.writeFileSync(tempFile, pngBuffer);

  try {
    const response = await sendMultipartRequest(`http://127.0.0.1:${port}/upload`, 'file', tempFile);

    assert.strictEqual(response.statusCode, 200, 'Expected HTTP 200');
    const payload = JSON.parse(response.body);
    assert.strictEqual(payload.message, 'File uploaded successfully');

    const uploadFiles = fs.readdirSync(path.join(__dirname, '..', 'uploads'));
    assert.ok(uploadFiles.some(file => file.endsWith('.png')), 'Uploaded file should be stored in uploads folder');
  } finally {
    if (fs.existsSync(tempFile)) {
      fs.unlinkSync(tempFile);
    }

    const uploadFiles = fs.existsSync(path.join(__dirname, '..', 'uploads'))
      ? fs.readdirSync(path.join(__dirname, '..', 'uploads'))
      : [];

    uploadFiles
      .filter(file => file.endsWith('.png'))
      .forEach(file => fs.unlinkSync(path.join(__dirname, '..', 'uploads', file)));

    await new Promise((resolve) => server.close(resolve));
  }
});
