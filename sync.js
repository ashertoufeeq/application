#!/usr/bin/env node

const syncDirectory = require('sync-directory');
const { join } = require('path');

const mainDir = join(__dirname, 'shared');
const sync = (target) => {
  const absoluteTarget = join(__dirname, target, 'src', 'common');
  const watcher = syncDirectory(mainDir, absoluteTarget, {
    watch: true,
    exclude: ['node_modules', 'package.json'],
  });

  const { log } = console;

  watcher
    .on('ready', () => log(`Initial scan complete for ${target}. Ready for changes...`))
    .on('change', (path) => log(`File ${path} has been changed...`));
};

module.exports = sync;

const args = process.argv.slice(2);
if (args.length === 1) sync(args[0]);
