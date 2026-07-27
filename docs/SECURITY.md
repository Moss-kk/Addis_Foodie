# SECURITY & DATA PRIVACY SPECIFICATION (v5.0)

## Security Guidelines
- **Webhook Signature Verification**: Secret hash HMAC validation for Instagram and Telegram incoming webhooks.
- **Rate Limiting**: Redis-backed API rate limiting (100 req/min per IP) to prevent scraping.
- **Accidental Data Loss Prevention**: Enforces explicit confirmation before database drop or truncation operations.
