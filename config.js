
const isDev = process.env.NODE_ENV !== 'production';
exports.isDev = isDev;

const port = process.env.PORT;
exports.port = port 
 
const MONGODB_DEV_URI = process.env.MONGODB_DEV_URI;
exports.MONGODB_DEV_URI = MONGODB_DEV_URI
 
const MONGODB_PROD_URI = process.env.MONGODB_PROD_URI;
exports.MONGODB_PROD_URI = MONGODB_PROD_URI

const JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_SECRET = JWT_SECRET