import { formatPrice } from '../utils/formatPrice';

describe('formatPrice utility', () => {
  
  it('formats a whole number correctly', () => {
    expect(formatPrice(10)).toBe('10,00 €');
  });

  it('formats decimals correctly', () => {
    expect(formatPrice(19.99)).toBe('19,99 €');
  });

  it('rounds up correctly according to currency rules', () => {
    // 10.555 pitäisi pyöristyä lähimpään senttiin
    expect(formatPrice(10.555)).toBe('10,56 €');
  });

  it('handles zero correctly', () => {
    expect(formatPrice(0)).toBe('0,00 €');
  });

});