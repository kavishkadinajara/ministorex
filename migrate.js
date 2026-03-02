const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`Source ${src} does not exist`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      console.log(`Copying ${srcPath} to ${destPath}`);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir("app", "apps/admin-portal/app");
  copyDir("public", "apps/admin-portal/public");
  copyDir("components", "apps/admin-portal/components");

  if (fs.existsSync("middleware.ts")) {
    console.log("Copying middleware.ts");
    fs.copyFileSync("middleware.ts", "apps/admin-portal/middleware.ts");
  }

  if (fs.existsSync(".env.local")) {
    console.log("Copying .env.local");
    fs.copyFileSync(".env.local", "apps/admin-portal/.env.local");
  }
  console.log("Migration script completed");
} catch (e) {
  console.error("Migration failed:", e);
}
