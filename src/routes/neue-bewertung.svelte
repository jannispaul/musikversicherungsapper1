<script>
  let rating = 5;
  import Layout from "./_layouts/_layout.svelte";
</script>

<Layout>
  <h1>Wir freuen uns über Deine Bewertung!</h1>

  <div class="w-full max-w-xs">
    <form
      class="px-8 pt-6 pb-8 mb-4"
      method="POST"
      action="https://mystaticman.herokuapp.com/v3/entry/github/jannispaul/musikversicherung/master/src/reviews">
      {rating}
      <input
        type="hidden"
        name="options[redirect]"
        value="https://musikversicherung.com/bewertung-erfolgreich" />
      <fieldset class="stars ">
        <label
          for="customer-rating[star-1]"
          class="inline-block float-left"
          tabindex="0"
          aria-label="1 Stern">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 48 48"
            style="vertical-align: middle;"
            fill="yellow">
            <path
              d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
              17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
              44.831L24 36.5681Z" />
          </svg>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-1]"
            bind:group={rating}
            value={1}
            class="hidden" />
        </label>
        <label
          for="customer-rating[star-2]"
          class="float-left"
          tabindex="0"
          aria-label="2 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 2 ? 'yellow' : 'gray'}>
              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>

          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-2]"
            bind:group={rating}
            value={2}
            class="hidden" />
        </label>

        <label
          for="customer-rating[star-3]"
          class="float-left"
          tabindex="0"
          aria-label="3 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 3 ? 'yellow' : 'gray'}>
              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-3]"
            bind:group={rating}
            value={3}
            class="hidden" />
        </label>

        <label
          for="customer-rating[star-4]"
          class="float-left"
          tabindex="0"
          aria-label="4 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 4 ? 'yellow' : 'gray'}>

              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-4]"
            bind:group={rating}
            value={4}
            class="hidden" />
        </label>
        <label
          for="customer-rating[star-5]"
          class="float-left"
          tabindex="0"
          aria-label="5 Sterne">
          <div>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 48 48"
              style="vertical-align: middle;"
              fill={rating >= 5 ? 'yellow' : 'gray'}>

              <path
                d="M24 36.5681L10.3662 44.831L13.9812 29.338L2 18.9061L17.8028
                17.5634L24 3L30.1972 17.5634L46 18.9061L34.0188 29.338L37.6338
                44.831L24 36.5681Z" />
            </svg>
          </div>
          <input
            type="radio"
            name="fields[rating]"
            id="customer-rating[star-5]"
            checked=""
            bind:group={rating}
            value={5}
            class="hidden" />
        </label>
      </fieldset>

      <label class="block text-sm font-bold mb-2">
        <span>Ihr Name</span>
        <input
          type="text"
          id="form[name]"
          name="fields[name]"
          required
          class="shadow appearance-none border w-full py-2 px-3 leading-tight
          focus:outline-none focus:shadow-outline" />
      </label>

      <label class="block text-sm font-bold mb-2">
        <span>Ihre Rezension</span>
        <textarea
          name="fields[review]"
          required
          class="shadow appearance-none border w-full py-2 px-3 leading-tight
          focus:outline-none focus:shadow-outline" />
      </label>

      <button
        class="focus:outline-none focus:shadow-outline"
        type="submit"
        name="action">
        Absenden
      </button>

    </form>
  </div>

</Layout>
