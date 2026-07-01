// INTENTIONAL - ini untuk demo secret detection
// JANGAN lakukan ini di project asli!
const config = {
  // gitleaks akan mendeteksi ini (nilai PALSU, hanya untuk demo):
  // Catatan: jangan pakai 'AKIAIOSFODNN7EXAMPLE' — itu key contoh resmi AWS
  // yang justru di-allowlist Gitleaks, jadi TIDAK akan terdeteksi.
  apiKey: 'AKIAZ7XQ4WPN3RVK2HBD',           // format AWS key, bukan "EXAMPLE"
  awsSecret: 'wJalrPxR9fK2bQ7mN4tZ8vC1dL6hG3sY0uE5aWq', // high-entropy secret
  dbPassword: 'password123',
};

module.exports = config;