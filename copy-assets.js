// copy-assets.js
const fs = require('fs-extra');
const path = require('path');

async function copyAssets() {
  const publicDir = path.join(__dirname, 'public');
  const distDir = path.join(__dirname, '.vitepress', 'dist');
  
  if (fs.existsSync(publicDir)) {
    console.log('复制静态资源...');
    await fs.copy(publicDir, distDir);
    console.log('✅ 静态资源复制完成');
  } else {
    console.log('❌ public 目录不存在');
  }
}

copyAssets().catch(console.error);