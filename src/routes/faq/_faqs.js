import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export function getFaqs() {
  // Find all yml files in faq folder and store slugs
  const slugs = fs
    .readdirSync("faq")
    .filter(file => path.extname(file) === ".yml")
    .map(file => file.slice(0, -4));

  return slugs.map(getFaq);
}

export function getFaq(slug) {
  // Set file by inserting slug and check if exists
  const file = `faq/${slug}.yml`;
  if (!fs.existsSync(file)) return null;

  // Read file
  const content = fs.readFileSync(file, "utf-8");

  // Convert yml to json
  let jsonContent;
  try {
    jsonContent = yaml.safeLoad(content);
  } catch (e) {
    console.log(e);
  }

  return jsonContent;
}
