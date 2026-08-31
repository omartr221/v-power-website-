import type { Locale } from "../config";

/**
 * Chrome strings for the Contact page that are not part of the JSON content files.
 * Form field `name` attributes and `<option>` values are locale-independent
 * (they must match `public/__forms.html` for Netlify Forms), so only the
 * human-visible text lives here.
 */
const dictionaries = {
  ar: {
    eyebrow: "تواصل معنا",
    title: "نحن هنا لمساعدتكم",
    subtitle: "تواصلوا معنا بأي طريقة تناسبكم وسنرد عليكم في أقرب وقت",
    infoTitle: "معلومات التواصل",
    info: {
      email: "البريد الإلكتروني",
      phone: "هاتف",
      whatsapp: "واتساب",
      whatsappValue: "تواصل عبر واتساب",
      location: "موقعنا",
    },
    social: {
      instagram: "إنستغرام",
      facebook: "فيسبوك",
    },
    whatsappCta: {
      title: "أسرع طريقة للتواصل",
      desc: "أرسلوا لنا رسالة عبر واتساب وسنرد عليكم فوراً",
      button: "تواصل عبر واتساب",
    },
    form: {
      title: "أرسل رسالة",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "09XXXXXXXX",
      emailLabel: "البريد الإلكتروني (اختياري)",
      emailPlaceholder: "example@email.com",
      serviceLabel: "نوع الخدمة",
      servicePlaceholder: "اختر نوع الخدمة",
      serviceOptions: {
        parts: "قطع غيار",
        maintenance: "صيانة",
        training: "تدريب",
        consulting: "استشارات إدارية",
        other: "أخرى",
      },
      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",
      submit: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال رسالتك بنجاح، سنتواصل معك قريباً",
      error: "حدث خطأ، يرجى المحاولة مرة أخرى أو التواصل عبر واتساب",
    },
  },
  en: {
    eyebrow: "Contact Us",
    title: "We Are Here to Help",
    subtitle: "Reach out however suits you best and we will get back to you as soon as possible",
    infoTitle: "Contact Information",
    info: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat on WhatsApp",
      location: "Our Location",
    },
    social: {
      instagram: "Instagram",
      facebook: "Facebook",
    },
    whatsappCta: {
      title: "The Fastest Way to Reach Us",
      desc: "Send us a message on WhatsApp and we will reply right away",
      button: "Chat on WhatsApp",
    },
    form: {
      title: "Send a Message",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "09XXXXXXXX",
      emailLabel: "Email (optional)",
      emailPlaceholder: "example@email.com",
      serviceLabel: "Service Type",
      servicePlaceholder: "Select a service type",
      serviceOptions: {
        parts: "Spare Parts",
        maintenance: "Maintenance",
        training: "Training",
        consulting: "Management Consulting",
        other: "Other",
      },
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Your message has been sent successfully — we will be in touch soon",
      error: "Something went wrong. Please try again or reach us on WhatsApp",
    },
  },
} as const;

export type ContactStrings = (typeof dictionaries)["ar"];

export const getContactStrings = (locale: Locale) => dictionaries[locale] as ContactStrings;
