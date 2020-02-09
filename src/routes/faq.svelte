<script>
  // Accordion code by Chris Ferdinandi: https://gomakethings.com/building-an-accessible-show/hide-disclosure-component-with-vanilla-js/
  // Get the disclosure buttons
  var disclosures = Array.prototype.slice.call(
    document.querySelectorAll("[data-disclosure]")
  );

  // Loop through them with Array.forEach()
  disclosures.forEach(function(disclosure) {
    // Get the content associated with the button
    var content = document.querySelectorAll(
      "#" + disclosure.getAttribute("aria-controls")
    );

    // If there's no content, don't show the button
    if (!content) return;

    // Show the button and hide the content
    content.forEach(function(element) {
      // disclosure.removeAttribute('hidden');
      element.setAttribute("hidden", "");
    });
  });

  // Toggle content on click
  document.addEventListener("click", function(event) {
    // Only run on elements that have the [data-disclosure] attribute
    // If the event.target doesn't have the attribute, return ends the callback function
    if (!event.target.hasAttribute("data-disclosure")) return;

    // Get the content to toggle
    // If no matching content is found, end the function with return
    var content = document.querySelector(
      "#" + event.target.getAttribute("aria-controls")
    );
    if (!content) return;

    // If the content is visible, hide it
    // Otherwise, show it
    if (event.target.getAttribute("aria-expanded") === "true") {
      event.target.setAttribute("aria-expanded", false);
      content.setAttribute("hidden", "");
    } else {
      event.target.setAttribute("aria-expanded", true);
      content.removeAttribute("hidden");
    }
  });
</script>

<div itemscope itemtype="https://schema.org/FAQPage">
  <section class="px-x1p5">
    <h1 class="text-primary text-x7 md:text-x5 border-solid">
      Häufig gestellte Fragen
    </h1>

    <!-- {{ range $index, $element := .Site.Data.faq  }}
<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="-mt-2">
    <button itemprop="name" data-disclosure aria-controls="answer{{ $index }}" aria-expanded="false"
        class="w-full bg-transparent text-primary text-x2 text-left border-solid border-0 border-b-2 border-t-2 border-primary py-x0p5">{{ $element.question }}</button>
    <div id="answer{{ $index }}" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text" class="text-x2 my-x0p5">
            {{ $element.answer | markdownify }}
        </div>
    </div>
</div>
{{ end }} -->

  </section>
</div>
