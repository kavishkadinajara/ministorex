const fs = require("fs");
const path = require("path");

const logPath = "migration_debug.log";
fs.writeFileSync(logPath, `Starting debug at ${new Date().toISOString()}\n`);

function log(msg) {
  console.log(msg);
  fs.appendFileSync(logPath, msg + "\n");
}

log(`CWD: ${process.cwd()}`);

const src = path.resolve("app");
const dest = path.resolve("apps/admin-portal/app");

log(`Source: ${src}`);
log(`Dest: ${dest}`);

if (!fs.existsSync(src)) {
  log("ERROR: Source directory does not exist!");
} else {
  log("Source directory exists.");
  try {
    if (!fs.existsSync(dest)) {
      log("Destination directory does not exist, creating...");
      fs.mkdirSync(dest, { recursive: true });
    }

    log("Listing source files:");
    const files = fs.readdirSync(src);
    log(`Found ${files.length} files.`);

    // Manual copy since fs.cpSync might not be available or reliable
    for (const file of files) {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      const stat = fs.statSync(srcFile);

      if (stat.isDirectory()) {
        log(
          `Skipping directory copy in debug mode, just creating folder: ${file}`,
        );
        fs.mkdirSync(destFile, { recursive: true });
      } else {
        log(`Copying file: ${file}`);
        fs.copyFileSync(srcFile, destFile);
      }
    }

    log("Copy loop finished.");
  } catch (e) {
    log(`ERROR during copy: ${e.message}`);
  }
}
