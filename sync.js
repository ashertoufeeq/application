#!/usr/bin/env node

const syncDirectory = require('sync-directory');
const { join } = require('path');

const mainDir = join(__dirname, 'shared');
const sync = (target, watch = true) => {
  const absoluteTarget = join(__dirname, target, 'src', 'common');
  const watcher = syncDirectory(mainDir, absoluteTarget, {
    watch,
    exclude: ['node_modules', 'package.json'],
  });

  if (watcher)
    watcher
      .on('ready', () =>
        console.log(`Initial scan complete for ${target}. Ready for changes...`),
      );
};

module.exports = sync;

const args = process.argv.slice(2);
if (args.length > 0) sync(args[0], args[1] !== 'false');
