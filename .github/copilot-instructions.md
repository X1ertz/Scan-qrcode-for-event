# Copilot Instructions for Scan-qrcode-for-event

## Architecture Overview

This is a Node.js Express application for event QR code scanning and user verification.

- **Backend**: Express server (`qr-node-app/index.js`) handling API requests and SQLite database operations.
- **Frontend**: Static HTML page (`qr-node-app/public/index.html`) using html5-qrcode library for QR scanning.
- **Database**: SQLite database (`database.sqlite`) with a User table storing attendee information and unique hashes.

## Key Components

- **Main Server**: `qr-node-app/index.js` - Sets up Express app, middleware, database connection, and routes.
- **API Endpoint**: POST `/check-hash` - Accepts a hash from scanned QR code, queries database for matching user.
- **Frontend**: `qr-node-app/public/index.html` - Provides QR scanner interface with camera selection and result display.

## Data Flow

1. User scans QR code on frontend, extracts hash.
2. Frontend sends POST request to `/check-hash` with hash.
3. Backend queries SQLite User table for matching hash.
4. Returns user details if found, or "ไม่พบข้อมูล" (not found) message.

## Developer Workflows

- **Run the app**: `cd qr-node-app && node index.js` (starts server on port 3000)
- **Database**: SQLite file `database.sqlite` created automatically on first run with sample data inserted via `db.serialize()`.
- **Dependencies**: Install with `npm install` (requires body-parser, express, sqlite3)

## Conventions

- Database schema: User table with id (auto-increment), name, surname, company, hash (unique).
- API responses: JSON with `found` boolean, `message` string.
- Error handling: 400 for missing hash, 500 for DB errors.
- Static serving: Files in `public/` served via `express.static()`.
- Sample data: Pre-inserted users with MD5-like hashes in `index.js`.

## Patterns

- SQL queries use parameterized statements to prevent injection, e.g., `db.get("SELECT * FROM User WHERE hash = ?", [hash], ...)`
- Middleware setup: `bodyParser.json()` for parsing POST bodies.
- Database connection: `sqlite3.Database("./database.sqlite")` with error logging.
- Unused code: `api/check-hash.js` (ES6 module export, not integrated into main app).

## Key Files

- [qr-node-app/index.js](qr-node-app/index.js) - Main server logic and database setup.
- [qr-node-app/public/index.html](qr-node-app/public/index.html) - Frontend QR scanner.
- [qr-node-app/package.json](qr-node-app/package.json) - Dependencies.</content>
<parameter name="filePath">c:\Users\User\Desktop\ScanQR for event\Scan-qrcode-for-event\.github\copilot-instructions.md