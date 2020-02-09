<footer class="text-primary p-x1p5 ">
  <hr class="border border-primary mb-x1 md:mb-x0p5" />
  <div
    class="flex flex-col md:flex-row justify-between md:items-center mb-x1
    md:mb-x0p5">
    <h3 class="text-x4">Kontakt</h3>
    <a href="tel:+4951919313199" class="text-x2">Tel: 05191 931 31 99</a>
    <a href="mailto:info@musikversicherung.com" class="text-x2">
      info@musikversicherung.com
    </a>
  </div>
  <hr class="border border-primary mb-x1 md:mb-x0p5" />
  <div class="flex flex-col md:flex-row items-stretch mb-x1 md:mb-x0p5 text-x2">

    <p class="flex-1 ">
      Heiner Blaskewitz
      <br />
      Versicherungsfachmann (BWV)
      <br />
      Generalagentur der Mannheimer Versicherung AG
    </p>
    <p class="flex-1">
      SINFONIMA® und IM SOUND sind
      <br />
      eingetragene Marken der
      <br />
      Mannheimer Versicherung AG
    </p>
  </div>
  <hr class="border border-primary mb-x1 md:mb-x0p5" />
  <nav class="mb-x1 md:mb-x0p5 text-x2">
    {{}}
    <a href="/impressum">Impressum</a>
    &nbsp; · &nbsp;
    <a href="/datenschutz">Datenschutz</a>
    &nbsp; · &nbsp;
    <a href="/versicherungsbedingungen">Versicherungsbedingungen</a>
    {{}}
  </nav>
  <hr class="border border-primary mb-x1 md:mb-x0p5" />

  <!-- Include scripts defined in individual page frontmatter -->
  <!-- {{- range .Params.js }} -->
  <!--Concat path with filename given in md file-->
  <!-- {{ $path := printf "js/%s.js" .}}
	{{ $js := resources.Get $path | resources.Minify | resources.Fingerprint }}
	<script src="{{ $js.Permalink }}"></script>	{{- end }} -->
</footer>
