// scripts/postbuild.js
const { execSync } = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const isWindows = os.platform() === 'win32';
const sourceDir = path.join(__dirname, '..', 'backend', 'src', 'public');
const destDir = path.join(__dirname, '..', 'backend', 'built', 'public');

// Verificar si el directorio de origen existe
if (!fs.existsSync(sourceDir)) {
    console.error(`No se encuentra el directorio de origen: ${sourceDir}`);
    process.exit(1);
}

// Crear el directorio de destino si no existe
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const copyCommand = isWindows
    ? `xcopy ${sourceDir} ${destDir} /s /e /y`
    : `cp -R ${sourceDir}/* ${destDir}`;

try {
    execSync(copyCommand, { stdio: 'inherit' });
} catch (err) {
    console.error(`Error al copiar los archivos: ${err.message}`);
    process.exit(1);
}
