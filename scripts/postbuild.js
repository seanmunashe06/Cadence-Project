import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.argv[2];
if (!env) {
  console.error('Please specify environment (dev, uat, prod)');
  process.exit(1);
}

const envUpper = env === 'uat' ? 'UAT' : env;

const srcPath = path.join(__dirname, '..', 'charts', `deployment.${env}.yaml`);
const destPath = path.join(__dirname, '..', 'charts', envUpper, 'deployment.yaml');

try {
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Successfully copied ${srcPath} to ${destPath}`);
  } else {
    console.warn(`Warning: Source file ${srcPath} does not exist.`);
  }
} catch (err) {
  console.error(`Error copying deployment config: ${err.message}`);
  process.exit(1);
}
