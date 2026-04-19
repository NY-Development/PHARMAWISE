// ─── Backend i18n Utility ─────────────────────────────────────────────
// Lightweight translation layer with nested key support and fallback to English.
// This intentionally avoids heavy i18n libraries — the backend only needs
// server-rendered messages (errors, disclaimers), not full UI translation.

export type SupportedLang = "en" | "am" | "or";

const SUPPORTED: readonly SupportedLang[] = ["en", "am", "or"] as const;

type TranslationMap = Record<string, string | Record<string, string>>;

// ── English (authoritative) ──────────────────────────────────────────
const en: TranslationMap = {
  // Auth
  "auth.emailInUse": "Email already in use",
  "auth.invalidCredentials": "Invalid credentials",
  "auth.unauthorized": "Unauthorized",
  "auth.invalidToken": "Invalid token",
  "auth.forbidden": "Forbidden",

  // Validation
  "validation.missingFields": "Missing required fields",
  "validation.invalidInput": "Invalid input",
  "validation.fileTooLarge": "File size exceeds limit",

  // Drug
  "drug.searchRequired": "Search query required",
  "drug.disclaimer":
    "openFDA data is for educational purposes only and does not constitute medical advice.",
  "drug.serviceUnavailable": "FDA service is temporarily unavailable. Please try again later.",
  "drug.notFound": "No drug information found for this query.",

  // OCR
  "ocr.noText": "No text provided",
  "ocr.disclaimer":
    "OCR results are machine-generated and require human confirmation before any medical use.",
  "ocr.lowConfidence":
    "Low confidence in OCR results. Please verify the extracted information carefully.",

  // AI
  "ai.disclaimer":
    "This is not medical advice and does not diagnose, treat, or prescribe. Always consult a licensed healthcare professional.",
  "ai.unsafeRequest": "This request contains terms that require professional medical guidance.",

  // Doctor
  "doctor.titleRequired": "Title and explanation are required",

  // Common
  "common.serverError": "An unexpected error occurred. Please try again.",
  "common.notFound": "Resource not found",
  "common.rateLimited": "Too many requests. Please wait before trying again.",
};

// ── Amharic ──────────────────────────────────────────────────────────
const am: TranslationMap = {
  "auth.emailInUse": "ኢሜይሉ አስቀድሞ ጥቅም ላይ ነው",
  "auth.invalidCredentials": "ልክ ያልሆነ ማረጋገጫ",
  "auth.unauthorized": "ያልተፈቀደ",
  "auth.invalidToken": "ልክ ያልሆነ ቶከን",
  "auth.forbidden": "የተከለከለ",

  "validation.missingFields": "ያስፈልጉ መስኮች ጠፍተዋል",
  "validation.invalidInput": "ልክ ያልሆነ ግብዓት",

  "drug.searchRequired": "የፍለጋ ቃል ያስፈልጋል",
  "drug.disclaimer":
    "የ openFDA መረጃ ለትምህርት ዓላማ ብቻ ነው፤ የሕክምና ምክር አይደለም።",
  "drug.serviceUnavailable": "የ FDA አገልግሎት ጊዜያዊ ችግር አለበት። እባክዎ ቆይተው ይሞክሩ።",

  "ocr.noText": "ጽሑፍ አልቀረበም",
  "ocr.disclaimer":
    "የ OCR ውጤቶች በማሽን የተፈጠሩ ናቸው፤ ለማንኛውም ህክምና ከመጠቀምዎ በፊት ያረጋግጡ።",

  "ai.disclaimer":
    "ይህ የሕክምና ምክር አይደለም፤ ሁልጊዜ ባለሙያ ሐኪምዎን ያማክሩ።",
  "ai.unsafeRequest": "ይህ ጥያቄ ሙያዊ የሕክምና ምክር ይጠይቃል።",

  "common.serverError": "ያልተጠበቀ ስህተት ተከስቷል። እባክዎ ደግመው ይሞክሩ።",
  "common.notFound": "መረጃ አልተገኘም",
};

// ── Oromo (Afaan Oromoo) ─────────────────────────────────────────────
const or: TranslationMap = {
  "auth.emailInUse": "Imeeliin kun duraan fayyadamaa jira",
  "auth.invalidCredentials": "Ragaa sirrii miti",
  "auth.unauthorized": "Hayyamaa hin qabdu",
  "auth.invalidToken": "Tokeeniin sirrii miti",
  "auth.forbidden": "Dhorkamaa",

  "validation.missingFields": "Dirreen barbaachisan guutamuu qaba",
  "validation.invalidInput": "Galtee sirrii miti",

  "drug.searchRequired": "Jecha barbaachaa galchaa",
  "drug.disclaimer":
    "Ragaan openFDA barumsa qofaaf; gorsa yaalaa miti.",
  "drug.serviceUnavailable": "Tajaajilli FDA yeroo gabaabdhaaf hin argamu. Irra deebi'aa yaalaa.",

  "ocr.noText": "Barruun hin dhiyaanne",
  "ocr.disclaimer":
    "Bu'aaleen OCR maashiniin kan uumaman; yaalii kamiyyuuf fayyadamuu dura mirkaneeffadhaa.",

  "ai.disclaimer":
    "Kun gorsa yaalaa miti; ogeessa fayyaa hayyama qabuun mari'adhaa.",
  "ai.unsafeRequest": "Gaaffiin kun gorsa yaalaa ogeessaa barbaada.",

  "common.serverError": "Dogoggorri hin eegamne uumame. Irra deebi'aa yaalaa.",
  "common.notFound": "Maddi hin argamne",
};

// ── Dictionary lookup ────────────────────────────────────────────────
const dictionaries: Record<SupportedLang, TranslationMap> = { en, am, or };

/**
 * Resolves the best supported language from a raw language string.
 * Handles full locale tags like "am-ET" → "am".
 */
export function resolveLang(raw?: string | null): SupportedLang {
  if (!raw) return "en";
  const primary = raw.split(/[-_,;]/)[0].toLowerCase().trim();
  return SUPPORTED.includes(primary as SupportedLang)
    ? (primary as SupportedLang)
    : "en";
}

/**
 * Translate a key to the given language, falling back to English.
 *
 * Supports dot notation: `t("auth.emailInUse", "am")`
 */
export function t(key: string, lang?: string | null): string {
  const resolved = resolveLang(lang);
  const dict = dictionaries[resolved];
  const value = dict[key];

  // Direct hit
  if (typeof value === "string") return value;

  // Fallback to English
  if (resolved !== "en") {
    const fallback = dictionaries.en[key];
    if (typeof fallback === "string") return fallback;
  }

  // If nothing found, return the key itself (safe for debugging)
  return key;
}
