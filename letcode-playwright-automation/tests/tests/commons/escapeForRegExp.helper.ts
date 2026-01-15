
/** Utility to escape strings for RegExp construction */
function escapeForRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
