import { getReviews } from "./_reviews.js";

// Declare contents for later use
let contents;

export async function get(req, res, next) {
  // If contents is undefined or in production
  if (!contents || process.env.NODE_ENV !== "production") {
    // Call getReviews and the results
    const reviews = getReviews().map(review => ({
      name: review.name,
      rating: review.rating,
      date: review.date,
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
