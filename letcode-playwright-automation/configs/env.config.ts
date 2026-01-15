import dotenv from 'dotenv';
import path from 'path';
dotenv.config(
  {
    path: path.resolve(process.cwd(), '.env'),
  }
);

/**
 * Helper to require env variables
 */
function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env variable: ${key}`);
  }
  return value;
}

export const env = {
  baseUrlQA: required('BASE_URL_QA'),
  adminUser: required('ADMIN_USER'),
  adminPassword: required('ADMIN_PASSWORD'),

  timeout: Number(process.env.TIMEOUT ?? 30000),
  browser: process.env.BROWSER ?? 'chromium',
   proxy: {
    host: required('PROXY_IP_ADDRESS'),
    port: required('PROXY_PORT'),
  },
};
