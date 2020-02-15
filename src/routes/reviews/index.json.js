import { getReviews } from "./_reviews.js";

// Declare contents for later use
let contents;
let months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

export async function get(req, res, next) {
  // If contents is undefined or in production
  if (!contents || process.env.NODE_ENV !== "production") {
    // Call getReviews and the results
    const reviews = getReviews().map(review => ({
      name: review.name,
      rating: review.rating,
      date: `${review.date.slice(8, 10)}. ${
        months[parseInt(review.date.slice(5, 7))]
      } ${review.date.slice(0, 4)}`,
      review: review.review
    }));

    // If reviews is NOT null set headers and stringify
    if (reviews !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(reviews));
    } else {
      next();
    }
  }
}
