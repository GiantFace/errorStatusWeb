# Hibás Oldalak Tesztelése

Ez a projekt egy HTML oldalt tartalmaz, amely különböző HTTP státuszkódú hibákat szimulál tesztelési célokra.

## 🚀 Gyors indítás

### 🌐 Éles verzió (GitHub Pages)
A projekt automatikusan elérhető GitHub Pages-en:
**👉 [https://giantface.github.io/errorStatusWeb](https://giantface.github.io/errorStatusWeb)**

### 💻 Helyi fejlesztés
1. **Függőségek telepítése:**
   ```bash
   npm install
   ```

2. **Szerver indítása:**
   ```bash
   npm start
   ```

3. **Böngészőben megnyitás:**
   ```
   http://localhost:3000
   ```

## 📋 Elérhető hibás oldalak

- **404** - Oldal nem található (`/404`)
- **500** - Szerver belső hibája (`/500`)
- **403** - Hozzáférés megtagadva (`/403`)
- **401** - Nem hitelesített felhasználó (`/401`)
- **503** - Szolgáltatás nem elérhető (`/503`)
- **Timeout** - Időtúllépés (`/timeout`)

## 🛠️ Fejlesztői mód

Fejlesztés közben használja a nodemon-t az automatikus újraindításhoz:

```bash
npm run dev
```

## 📁 Fájlstruktúra

```
├── index.html          # Főoldal
├── 404.html           # 404 hiba oldal
├── 500.html           # 500 hiba oldal
├── 403.html           # 403 hiba oldal
├── 401.html           # 401 hiba oldal
├── 503.html           # 503 hiba oldal
├── timeout.html       # Timeout hiba oldal
├── server.js          # Express szerver
├── package.json       # NPM konfiguráció
└── config.env         # Környezeti változók
```

## 🔧 Konfiguráció

A `config.env` fájlban módosíthatja a szerver portját és egyéb beállításokat.

## 📝 Használat

1. Indítsa el a szervert
2. Nyissa meg a főoldalt a böngészőben
3. Kattintson a különböző hibás oldalak linkjeire
4. Figyelje meg a böngésző fejlesztői eszközeiben a HTTP státuszkódokat

## 🎯 Cél

Ez a projekt segít tesztelni, hogyan reagál az alkalmazás különböző HTTP hibakódokra, és hogyan jelennek meg a felhasználóknak a hibás oldalak.
