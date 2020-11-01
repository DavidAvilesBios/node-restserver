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
    urlDB = 'mongodb+srv://strider:A4NGicVmL3v397Lq@cluster0-6o9tz.mongodb.net/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// =======================
// Vencimiento del token
// ======================
process.env.CADUCIDAD_TOKEN = '48h';

// =======================
// SEED  de autenticación
// ======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

// =======================
// Google cliente ID
// ======================

process.env.CLIENT_ID = process.env.CLIENT_ID || '319844615138-88u9vq2k8s18cd4to3gf7oopmuulvc50.apps.googleusercontent.com';