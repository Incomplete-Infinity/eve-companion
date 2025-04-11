const fs = require('fs');
const path = require('path');

const IMAGE_EXTS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

function generateReadme(dir, parent = null) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const files = entries.filter(e =>
    e.isFile() &&
    !e.name.startsWith('.') &&
    e.name !== 'README.md'
  );

  const folders = entries.filter(e =>
    e.isDirectory() &&
    e.name !== 'node_modules' &&
    !e.name.startsWith('.')
  );

  const lines = [];

  if (parent) lines.push(`📁 [⬅ Back to ${parent}/](../README.md)\n`);

  lines.push(`# ${path.basename(dir)}/\n`);

  // Group SVGs as ship views
  const groupedImages = {};

  files.forEach(f => {
    const ext = path.extname(f.name).toLowerCase();
    if (ext !== '.svg') return;

    const base = f.name.replace(/_(top|profile)\.svg$/, '');
    const type = f.name.includes('_top') ? 'top' : f.name.includes('_profile') ? 'profile' : null;

    if (!groupedImages[base]) groupedImages[base] = {};
    if (type) groupedImages[base][type] = f.name;
  });

  const imageKeys = Object.keys(groupedImages);
  const regularFiles = files.filter(f =>
    !f.name.endsWith('_top.svg') &&
    !f.name.endsWith('_profile.svg') &&
    f.name !== 'README.md'
  );

  if (imageKeys.length > 0) {
    lines.push(`## Ship SVGs\n`);
    lines.push(`| Ship | Top View | Profile View |`);
    lines.push(`|------|-----------|---------------|`);

    imageKeys.forEach(key => {
      const top = groupedImages[key].top ? `![](${groupedImages[key].top})` : '—';
      const profile = groupedImages[key].profile ? `![](${groupedImages[key].profile})` : '—';
      lines.push(`| ${key} | ${top} | ${profile} |`);
    });
  }

  if (regularFiles.length > 0) {
    lines.push(`\n## Other Files`);
    regularFiles.forEach((f, i) => {
      lines.push(`${i + 1}. [${f.name}](./${f.name})`);
    });
  }

  if (folders.length > 0) {
    lines.push(`\n## Subfolders`);
    folders.forEach(sub =>
      lines.push(`- [${sub.name}/](./${sub.name}/README.md)`)
    );
  }

  fs.writeFileSync(path.join(dir, 'README.md'), lines.join('\n'), 'utf-8');

  folders.forEach(sub =>
    generateReadme(path.join(dir, sub.name), path.basename(dir))
  );
}

generateReadme(process.cwd());
