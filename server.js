const express = require('express');
const path = require('path');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása
app.use(express.static('.'));

// Főoldal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 hiba szimulálása
app.get('/404', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// 500 hiba szimulálása
app.get('/500', (req, res) => {
    res.status(500).sendFile(path.join(__dirname, '500.html'));
});

// 403 hiba szimulálása
app.get('/403', (req, res) => {
    res.status(403).sendFile(path.join(__dirname, '403.html'));
});

// 401 hiba szimulálása
app.get('/401', (req, res) => {
    res.status(401).sendFile(path.join(__dirname, '401.html'));
});

// 503 hiba szimulálása
app.get('/503', (req, res) => {
    res.status(503).sendFile(path.join(__dirname, '503.html'));
});

// Timeout hiba szimulálása
app.get('/timeout', (req, res) => {
    // 5 másodperc késleltetés után válasz
    setTimeout(() => {
        res.sendFile(path.join(__dirname, 'timeout.html'));
    }, 5000);
});

// Valódi 404 kezelés minden más útvonalra
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`🚀 Szerver fut a http://localhost:${PORT} címen`);
    console.log(`📋 Hibás oldalak tesztelése:`);
    console.log(`   - 404: http://localhost:${PORT}/404`);
    console.log(`   - 500: http://localhost:${PORT}/500`);
    console.log(`   - 403: http://localhost:${PORT}/403`);
    console.log(`   - 401: http://localhost:${PORT}/401`);
    console.log(`   - 503: http://localhost:${PORT}/503`);
    console.log(`   - Timeout: http://localhost:${PORT}/timeout`);
});
