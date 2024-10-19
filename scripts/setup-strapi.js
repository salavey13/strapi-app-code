const fs = require('fs');
const { execSync } = require('child_process');

console.log('Setting up Strapi...');

// 1. Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { cwd: './backend', stdio: 'inherit' });

// 2. Set up environment variables
console.log('Setting up environment variables...');
const envExample = fs.readFileSync('./backend/.env.example', 'utf8');
fs.writeFileSync('./backend/.env', envExample);

console.log('Environment variables set up. Please update the values in ./backend/.env');

// 3. Build Strapi
console.log('Building Strapi...');
execSync('npm run build', { cwd: './backend', stdio: 'inherit' });

// 4. Start Strapi in development mode
console.log('Starting Strapi in development mode...');
console.log('Once Strapi is running, visit http://localhost:1337/admin to create your admin user');
execSync('npm run develop', { cwd: './backend', stdio: 'inherit' });