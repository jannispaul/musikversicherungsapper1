import { getFaqs } from "./_faqs.js";

// Declare contents for later use
let contents;

export async function get(req, res, next) {
  // If contents is undefined or in production
  if (!contents || process.env.NODE_ENV !== "production") {
    // Call getFaqs and the results
    const faqs = getFaqs().map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));

    // If faqs is NOT null set headers and stringify
    if (faqs !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(faqs));
    } else {
      next();
    }
  }
}
