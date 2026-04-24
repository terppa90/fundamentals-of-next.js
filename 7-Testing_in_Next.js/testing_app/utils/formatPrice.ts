// Muotoilee numeron eurohinnaksi (esim. 10 -> 10,00 €)
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('fi-FI', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount).replace(/\u00a0/g, ' '); // Korvataan non-breaking space tavallisella välilyönnillä testauksen helpottamiseksi
}