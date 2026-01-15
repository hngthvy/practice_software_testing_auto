import { expect } from "@playwright/test";

export function verifyXmfTicket(
  xmf: any,
  expected: {
    customer: string;
    totalPages: string;
  }
) {
  expect(xmf.Job.Customer).toBe(expected.customer);
  expect(xmf.Job.TotalPages).toBe(expected.totalPages);
}
