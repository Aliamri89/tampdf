import * as migration_20260715_005101 from './20260715_005101';

export const migrations = [
  {
    up: migration_20260715_005101.up,
    down: migration_20260715_005101.down,
    name: '20260715_005101'
  },
];
