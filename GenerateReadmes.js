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

  // Breadcrumb
  if (parent) lines.push(`📁 [⬅ Back to ${parent}/](../README.md)\n`);

  // Title
  lines.push(`# ${path.basename(dir)}/\n`);

  // Files
  if (files.length) {
    lines.push(`## Files\n`);
    lines.push(`| Name | Preview |`);
    lines.push(`|------|---------|`);

    files.forEach(f => {
      const ext = path.extname(f.name).toLowerCase();
      const link = `./${f.name}`;

      if (IMAGE_EXTS.includes(ext)) {
        lines.push(`| [${f.name}](${link}) | ![](${link}) |`);
      } else {
        lines.push(`| [${f.name}](${link}) | — |`);
      }
    });
  }

  // Folders
  if (folders.length) {
    lines.push(`\n## Subfolders`);
    folders.forEach(sub =>
      lines.push(`- [${sub.name}/](./${sub.name}/README.md)`)
    );
  }

  fs.writeFileSync(path.join(dir, 'README.md'), lines.join('\n'), 'utf-8');

  // Recurse
  folders.forEach(sub =>
    generateReadme(path.join(dir, sub.name), path.basename(dir))
  );
}

generateReadme(process.cwd());
