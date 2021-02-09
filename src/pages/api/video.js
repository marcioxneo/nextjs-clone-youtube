import nc from 'next-connect';
import upload from 'src/utils/upload';

const handler = nc()
  .use(upload.single('file'))
  .post((req, res) => {
    // receber nossa imagem e outros dados pelo endpoint
    // inseri no banco de dados MONGODB
    const { title, authorName, authorAvatar, videoUri } = req.body;

    res.json({ hello: 'world' });
  })
  .parse(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });

export default handler;
