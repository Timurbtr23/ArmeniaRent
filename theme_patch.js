import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Basic colors
  content = content.replace(/bg-white/g, 'bg-zinc-900');
  content = content.replace(/text-gray-900/g, 'text-zinc-50');
  content = content.replace(/text-gray-800/g, 'text-zinc-200');
  content = content.replace(/text-gray-700/g, 'text-zinc-300');
  content = content.replace(/text-gray-600/g, 'text-zinc-400');
  content = content.replace(/text-gray-500/g, 'text-zinc-500');
  
  // Backgrounds
  content = content.replace(/bg-gray-50/g, 'bg-zinc-800');
  content = content.replace(/bg-gray-100/g, 'bg-zinc-800');
  content = content.replace(/bg-gray-200/g, 'bg-zinc-700');
  content = content.replace(/bg-brand-50/g, 'bg-zinc-800');
  content = content.replace(/bg-brand-100/g, 'bg-zinc-800');
  
  // Borders
  content = content.replace(/border-gray-100/g, 'border-zinc-800');
  content = content.replace(/border-gray-200/g, 'border-zinc-700');
  content = content.replace(/border-brand-100/g, 'border-zinc-800');
  content = content.replace(/border-brand-200/g, 'border-zinc-800');
  
  // Nav changes to make it dark
  if (file.includes('App.jsx')) {
    content = content.replace('bg-white/95', 'bg-zinc-900/95');
  }

  // HTML body
  if (file.includes('index.html')) {
    content = content.replace('<body class="antialiased">', '<body class="antialiased bg-zinc-900 text-zinc-50">');
  }

  fs.writeFileSync(file, content, 'utf8');
});
console.log('Dark theme patch applied');
