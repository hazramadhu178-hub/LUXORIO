// Legal page content used by the footer modals.
// A LegalPageKey is "terms" or "privacy".

// Each "LegalSection" object has these fields:
//   title - text
//   paragraphs - list of text
//   bullets - list of text (optional)

// Each "LegalPage" object has these fields:
//   label - text
//   title - text
//   summary - text
//   updated - text
//   sections - list of LegalSection objects

export const LEGAL_PAGES = {
  terms: {
    label: "Terms & Conditions",
    title: "Terms & Conditions",
    summary: "These terms explain the rules that apply when you use the Luxorio website or reserve a stay with us.",
    updated: "January 15, 2026",
    sections: [
      {
        title: "1. Acceptance Of Terms",
        paragraphs: [
          "By accessing this website, submitting a reservation, or using our resort services, you agree to these Terms & Conditions. If you do not agree, please do not use the website or complete a booking.",
        ],
      },
      {
        title: "2. Reservations And Guest Information",
        paragraphs: [
          "You must provide accurate contact, payment, and guest information when making a reservation. The person completing the booking must be at least 18 years old and authorized to act for every guest included in the reservation.",
        ],
        bullets: [
          "Room availability and prices may change until a reservation is confirmed.",
          "A valid payment method may be required to secure your booking.",
          "Special requests are subject to availability and are not guaranteed.",
        ],
      },
      {
        title: "3. Rates, Payments And Taxes",
        paragraphs: [
          "Displayed rates are charged in the currency shown during booking. Taxes, resort fees, deposits, and optional services will be clearly identified before payment where applicable.",
          "You authorize Luxorio and its payment providers to charge the payment method supplied for confirmed amounts, cancellation fees, damages, or approved extras.",
        ],
      },
      {
        title: "4. Cancellations And Changes",
        paragraphs: [
          "Cancellation and amendment conditions depend on the selected rate. Your confirmation will show the deadline and any applicable fee. No-show reservations may be charged up to the full value of the stay.",
        ],
      },
      {
        title: "5. Guest Conduct And Property",
        paragraphs: [
          "Guests must respect resort staff, other guests, local laws, and property rules. Luxorio may end a stay without refund when conduct threatens safety, causes serious disruption, or damages resort property.",
        ],
      },
      {
        title: "6. Website Use",
        paragraphs: [
          "Website text, branding, images, and design are protected content. You may use the website for personal travel planning, but may not copy, resell, disrupt, or misuse its content or systems.",
        ],
      },
      {
        title: "7. Liability And Contact",
        paragraphs: [
          "To the extent permitted by law, Luxorio is not responsible for indirect loss, third-party services, or events outside its reasonable control. Nothing in these terms limits rights that cannot legally be excluded.",
          "Questions about these terms can be sent to hello@luxorio.com or discussed with our guest services team.",
        ],
      },
    ],
  },
  privacy: {
    label: "Privacy Policy",
    title: "Privacy Policy",
    summary: "This policy explains what personal information Luxorio collects, why we use it, and the choices available to you.",
    updated: "January 15, 2026",
    sections: [
      {
        title: "1. Information We Collect",
        paragraphs: [
          "We collect information you provide while browsing, contacting us, making a reservation, or staying at the resort.",
        ],
        bullets: [
          "Name, email address, telephone number, and postal address.",
          "Reservation dates, room preferences, guest details, and special requests.",
          "Payment confirmation and limited transaction information.",
          "Website usage data, device details, and cookie information.",
        ],
      },
      {
        title: "2. How We Use Your Information",
        paragraphs: [
          "We use personal information to provide requested services, manage reservations, process payments, personalize your stay, answer questions, maintain security, and meet legal obligations.",
        ],
      },
      {
        title: "3. Sharing Information",
        paragraphs: [
          "We do not sell personal information. We may share only the information needed with trusted payment processors, booking providers, technology partners, professional advisers, and public authorities where required by law.",
        ],
      },
      {
        title: "4. Cookies And Analytics",
        paragraphs: [
          "Cookies help the website remember preferences, understand performance, and improve your experience. You can restrict cookies in your browser, although some website features may not work as expected.",
        ],
      },
      {
        title: "5. Data Security And Retention",
        paragraphs: [
          "We use reasonable technical and organizational safeguards to protect personal information. Information is retained only for as long as needed for the purposes described here, including legal, accounting, and dispute requirements.",
        ],
      },
      {
        title: "6. Your Privacy Choices",
        paragraphs: [
          "Depending on your location, you may have rights to access, correct, delete, restrict, or receive a copy of your information. You may also withdraw consent or object to certain uses.",
        ],
      },
      {
        title: "7. Contact Us",
        paragraphs: [
          "For privacy questions or requests, contact hello@luxorio.com. We may ask you to verify your identity before completing a privacy request.",
        ],
      },
    ],
  },
};