# Finstri

Premium FinTech SaaS landing page for Finstri, built with Vite, React, TypeScript, Tailwind CSS, and Lucide React.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production output is generated in `dist/`, suitable for deployment as an Azure Static Web App.

## Contact Form Email

The contact form posts to `/api/contact`. The API is an Azure Static Web Apps Function in `api/contact` and sends mail through SMTP using server-side application settings. Do not put SMTP credentials in React code or in GitHub.

### Local API dependencies

```bash
npm install --prefix api
```

### Azure Static Web Apps settings

In the Azure Portal, open the Static Web App, go to **Configuration**, and add these application settings:

```text
SMTP_HOST=smtp.transip.email
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=<real TransIP mailbox address, not an alias>
SMTP_PASS=<password for that mailbox>
CONTACT_FROM_EMAIL=<same mailbox address, or a sender address TransIP allows for that mailbox>
CONTACT_TO_EMAIL=info@finstri.nl
CONTACT_SUBJECT_PREFIX=Finstri contactaanvraag
```

If TransIP shows different SMTP settings for the mailbox, use those exact values. Port `465` normally uses `SMTP_SECURE=true`; port `587` normally uses `SMTP_SECURE=false` with STARTTLS.

If `info@finstri.nl` is only an alias, use it as `CONTACT_TO_EMAIL`, not as `SMTP_USER`. SMTP login needs a real mailbox with a password. The safest deliverability setup is to also use that same real mailbox as `CONTACT_FROM_EMAIL`, while replies still go to the visitor because the API sets `replyTo` to the submitted email address.

### TransIP mailbox setup

1. In TransIP, make sure `finstri.nl` has an active email product and that at least one real mailbox exists, for example `mailbox@finstri.nl`, `noreply@finstri.nl`, or another address you manage.
2. Keep `info@finstri.nl` as an alias if you like, and forward it to the people who should receive contact requests.
3. Set or reset the real mailbox password and store it securely.
4. Use the full real mailbox address as `SMTP_USER` and its password as `SMTP_PASS`.
5. Use `info@finstri.nl` as `CONTACT_TO_EMAIL` if that alias should receive the contact requests.
6. Add SPF/DKIM/DMARC DNS records recommended by TransIP for `finstri.nl`, so contact form mail is less likely to land in spam.
7. After these settings are saved in Azure, redeploy the Static Web App from GitHub Actions.

The endpoint validates required fields, ignores a hidden spam field, escapes HTML output, and keeps SMTP credentials only in Azure. The endpoint is still public, so production spam protection should be strengthened later with provider-side rate limits, CAPTCHA/Turnstile, or Azure Front Door/WAF rules if abuse appears.
