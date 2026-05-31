const nodemailer = require("nodemailer");

const helpLabels = {
  info: "Ik wil graag meer informatie",
  demo: "Ik wil graag een vrijblijvende demo",
  anders: "Anders",
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
];

function getMissingConfig() {
  return requiredEnvVars.filter((name) => !process.env[name]);
}

function cleanText(value, maxLength = 1000) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return cleanText(value, 4000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getPayload(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return JSON.parse(req.body);
  }

  if (req.rawBody) {
    return JSON.parse(req.rawBody);
  }

  return {};
}

function makeTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || "").toLowerCase() === "true" || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function makeEmail({ firstName, lastName, email, phone, company, helpWith, message }) {
  const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "Finstri contactaanvraag";
  const helpLabel = helpLabels[helpWith] || helpLabels.demo;
  const fullName = `${firstName} ${lastName}`.trim();

  const fields = [
    ["Naam", fullName],
    ["E-mail", email],
    ["Telefoonnummer", phone || "-"],
    ["Bedrijfsnaam", company || "-"],
    ["Hulpvraag", helpLabel],
    ["Bericht", message || "-"],
  ];

  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = fields
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;white-space:pre-line;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    from: process.env.CONTACT_FROM_EMAIL,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `${subjectPrefix}: ${fullName}`,
    text,
    html: `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#111827;">${htmlRows}</table>`,
  };
}

module.exports = async function contact(context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204 };
    return;
  }

  try {
    const missingConfig = getMissingConfig();

    if (missingConfig.length > 0) {
      context.log.error(`Missing contact form config: ${missingConfig.join(", ")}`);
      context.res = {
        status: 500,
        body: { message: "Het contactformulier is nog niet geconfigureerd." },
      };
      return;
    }

    const payload = getPayload(req);

    if (cleanText(payload.website, 200)) {
      context.res = { status: 200, body: { ok: true } };
      return;
    }

    const data = {
      firstName: cleanText(payload.firstName, 80),
      lastName: cleanText(payload.lastName, 80),
      email: cleanText(payload.email, 200).toLowerCase(),
      phone: cleanText(payload.phone, 80),
      company: cleanText(payload.company, 160),
      helpWith: cleanText(payload.helpWith, 20),
      message: cleanText(payload.message, 2000),
      consent: payload.consent === true,
    };

    if (!data.firstName || !data.lastName || !isEmail(data.email) || !data.consent) {
      context.res = {
        status: 400,
        body: { message: "Controleer de verplichte velden en probeer het opnieuw." },
      };
      return;
    }

    await makeTransporter().sendMail(makeEmail(data));

    context.res = { status: 200, body: { ok: true } };
  } catch (error) {
    context.log.error("Contact form submission failed", error);
    context.res = {
      status: 500,
      body: { message: "We konden je bericht niet versturen. Probeer het later opnieuw." },
    };
  }
};
