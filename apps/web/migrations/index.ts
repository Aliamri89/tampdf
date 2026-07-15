import * as migration_20260715_005101 from './20260715_005101';
import * as migration_20260716_120000_add_tool_usage_error_fields from './20260716_120000_add_tool_usage_error_fields';

export const migrations = [
  {
    up: migration_20260715_005101.up,
    down: migration_20260715_005101.down,
    name: '20260715_005101'
  },
  {
    up: migration_20260716_120000_add_tool_usage_error_fields.up,
    down: migration_20260716_120000_add_tool_usage_error_fields.down,
    name: '20260716_120000_add_tool_usage_error_fields'
  },
];
