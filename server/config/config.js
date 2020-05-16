// =======================
//Puerto
// ======================

process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// =======================
// Base de datos
// ======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://strider:A4NGicVmL3v397Lq@cluster0-6o9tz.mongodb.net/cafe';
}

process.env.URLDB = urlDB;