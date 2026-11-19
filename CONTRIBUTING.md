# Contributing to Qwitter

Thank you for your interest in contributing! This guide will help you set up your development environment and get started.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 10.18.1
- **npm**: >= 6.13.4 (or **yarn** >= 1.21.1)

You can check your versions with:
```bash
node --version
npm --version
yarn --version
```

## Setup

### 1. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 2. Development Server

Start the development server with hot-reload:

```bash
quasar dev
```

For Electron desktop development:
```bash
quasar dev -m electron
```

### 3. Build for Production

Build the app for production:
```bash
quasar build
```

For Electron:
```bash
quasar build -m electron
```

## Testing

To run tests:
```bash
npm test
```

**Note:** Currently, no tests are configured. Test specifications should be added to the test suite.

## Tech Stack

- **Framework**: [Quasar Framework](https://quasar.dev/) v1.0.0 (Vue.js-based)
- **Desktop**: [Electron](https://www.electronjs.org/) v9.4.1
- **Date Handling**: [date-fns](https://date-fns.org/) v2.16.1
- **Backend**: [Firebase](https://firebase.google.com/) v8.2.4

## Project Structure

This is a Quasar Framework application with Electron desktop support. The typical structure includes:

- `src/` - Application source code
- `src-electron/` - Electron-specific code
- `dist/` - Built/compiled output (generated)

## Questions?

Feel free to open an issue or reach out to the team for questions or guidance.
