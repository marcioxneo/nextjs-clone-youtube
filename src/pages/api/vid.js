export default function handler(req, res) {
  const { method } = req;

  switch(method) {
    // banco de dados MONGODB
    case('GET'):
    res.status(200).json( msg: 'message' );
  }
}