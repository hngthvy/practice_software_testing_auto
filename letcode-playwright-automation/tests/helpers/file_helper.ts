import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { XMLParser } from 'fast-xml-parser';

/**
 * Resolve file path in download folder
 */
function resolveFile(fileName: string): string {
  return path.resolve(process.cwd(), 'download', fileName);
}

export function readCsvFile(
  fileName: string
): Record<string, string>[] {

  const content = fs.readFileSync(resolveFile(fileName), 'utf-8');

  const records = parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as Record<string, string>[];

  return records;
}

export function readJsonFile<T = any>(fileName: string): T {
  const filePath = resolveFile(fileName);
  const content = fs.readFileSync(filePath, 'utf-8');

  return JSON.parse(content);
}

export function readJdfFile(fileName: string): any {
  const filePath = resolveFile(fileName);
  const content = fs.readFileSync(filePath, 'utf-8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
  });

  return parser.parse(content);
}

