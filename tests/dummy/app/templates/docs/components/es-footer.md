# Footer

{{#docs-demo as |demo|}}
  {{#demo.example name='demo1'}}
    {{es-footer }}
  {{/demo.example}}
  {{demo.snippet 'demo1'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='demo2'}}
    {{es-footer tagline="A framework for ambitious web developers"}}
  {{/demo.example}}
  {{demo.snippet 'demo2'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='demo3'}}
    {{!-- Check out the component blocks and their respective
    configuration --}}
    {{#es-footer as |f|}}
      {{f.info infoLinks=infoLinks}}
      {{f.statement socialLinks=socialLinks}}
      {{f.contributions contributorLinks=contributorLinks}}
    {{/es-footer}}
  {{/demo.example}}
  {{demo.snippet 'demo3'}}
{{/docs-demo}}

{{#docs-demo as |demo|}}
  {{#demo.example name='demo4'}}
    {{!-- You can also add your own content on each component block --}}
    {{#es-footer as |f|}}
      {{#f.info}}
        <br/>
        <a>Team</a>
        <br/>
        <a>Contact</a>
      {{/f.info}}
      {{#f.statement}}
        Highly Productive Out of the Box
      {{/f.statement}}
      {{#f.contributions}}
        <div class="contributor">
          <p>Hosted by:</p>
          <a href="https://www.heroku.com/emberjs">
            {{svg-jar "heroku-logo" class="contributor-logo"}}
          </a>
        </div>
      {{/f.contributions}}
    {{/es-footer}}
  {{/demo.example}}
  {{demo.snippet 'demo4'}}
{{/docs-demo}}


<aside role="note">

Have ideas for this component? Submit an issue or a PR at [https://github.com/ember-learn/ember-styleguide](https://github.com/ember-learn/ember-styleguide).

</aside>
