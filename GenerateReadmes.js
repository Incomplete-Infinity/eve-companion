const fs = require('fs');
const path = require('path');

function generateReadme(dir, parent = null) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.filter(e => e.isFile() && e.name.endsWith('.js'));
  const folders = entries.filter(e => e.isDirectory());

  const lines = [];

  // Breadcrumb link to parent
  if (parent) lines.push(`📁 [⬅ Back to ${parent}](../README.md)\n`);

  // Title
  lines.push(`# ${path.basename(dir)}\n`);

  if (files.length) {
    lines.push(`## Files`);
    files.forEach(f => lines.push(`- [${f.name}](./${f.name})`));
  }

  if (folders.length) {
    lines.push(`\n## Subfolders`);
    folders.forEach(sub => lines.push(`- [${sub.name}](./${sub.name}/README.md)`));
  }

  fs.writeFileSync(path.join(dir, 'README.md'), lines.join('\n'), 'utf-8');

  // Recurse into subfolders
  folders.forEach(sub => generateReadme(path.join(dir, sub.name), path.basename(dir)));
}

// Start at current folder or specify your path
generateReadme(process.cwd());
