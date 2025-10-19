/**
 * Format number consistently for both server and client
 * Prevents hydration errors from locale differences
 */
export function formatNumber(num: number): string {
  // Use en-US locale explicitly to prevent hydration mismatches
  return num.toLocaleString('en-US')
}

/**
 * Format currency with $ symbol
 */
export function formatCurrency(num: number): string {
  return `$${formatNumber(num)}`
}

/**
 * Format currency with optional decimal places
 */
export function formatCurrencyWithDecimals(num: number, decimals: number = 2): string {
  return `$${num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`
}
