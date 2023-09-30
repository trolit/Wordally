<a id="top"></a>
<h2>Table of Contents</h2>
<ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#howto">How To Use</a></li>
    <li><a href="#howToContribute">How To Contribute</a></li>
    <li><a href="#projectStructure">Project Directory Structure</a></li>
    <li><a href="#notes">Notes</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#references">References</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h3 id="description">Description</h3>
<p align="justify">Wordally is a digital solution for those who seek an efficient way <strong>to learn foreign language vocabulary</strong> for school purposes or to extend their terminology stock. Acquire the habit of studying vocabulary using the Wordally scheme to shorten the time needed to memorize and strengthen memory.</p>
<h3 id="howto">How To Use</h3>
<p> Copy <a href="https://trolit.github.io/Wordally/?&word=dog&translation=pies&word=cat&translation=kot&word=ogre&translation=ogr&word=pigeon&translation=gołąb&word=monster&translation=potwór&word=fire&translation=ogień&word=kitchen&translation=kuchnia&word=house&translation=dom&word=shoot&translation=strzelać"> this link</a> into your web browser </p>
<ol>
    <li> Enter all words and their corresponding translations in the first page (Step 1). 
    <li> Guess the hidden translations in the right column. Press the magnifying glass to view the answer (Step 2).</li>
    <li> Guess the hidden word in the left column. Press the magnifying glass to view the answer (Step 3). </li>
    <li> Type out the word for the corresponding translation (Step 4). </li>
    <li> Verify your results and receive your score (Step 5). </li>
    <li> Copy the URL using the buttom on the bottom right to test your skills again! </li>
</ol>
<p>It's that simple. By repeating this method at least 3 times (with breaks between each try), it's possible to learn terminology in 30 minutes.</p>

<h3 id="howToContribute">How To Contribute </h3>
<ol>
    <li> Make sure you have installed Node.js </li>
    <li> Fork the repository </li>
    <li> Clone the repository <pre>git clone https://github.com/trolit/Wordally.git </li> </pre>
    <li> Create your feature branch <pre>git checkout -b my-new-feature </li></pre>
    <li> Test and commit your changes<pre>git commit -am 'added feature </li></pre>
    <li> Push to branch <pre>git push origin my-new-feature </li></pre>
    <li> Create a Pull Request </li>
</ol>

<h3 id="projectStructure">Project Directory Structure</h3>
<p> Here is a simplified project structure so that you can understand what goes into the creation of this project. </p>
<pre>
assets/
  ├── css/
  │   ├── blk-design-system.css
  │   ├── blk-design-system.css.map
  │   ├── blk-design-system.min.css
  │   ├── nucleo-icons.css
  │   ├── PlaylistRow.tsx
  │   ├── PlaylistSearch.tsx
  │   └── PlaylistTable.tsx
  ├── js/
  │   ├── core/
  │   ├── plugins/
  │   ├── blk-design-system.js
  │   ├── blk-design-system.js.map
  │   ├── blk-design-system.min.js
  │   ├── wordally_Misc.js
  │   └── wordally_Renderer.js
  ├── scss/
  │   ├── blk-design-system.scss
  │   └── blk-design-system/
  │       └── bootstrap/
  │           ├── mixins/
  │           └── utilities/
  │       └── custom/
  │           ├── cards/
  │           ├── mixins/
  │           ├── sections/
  │           ├── utilities/
  │           └── vendors/
  ├── fonts/
  ├── img/
  └── sounds/
</pre>

<h3 id="notes">Notes</h3>
<ul>
    <li> The link includes parameters in the URL so you won't have to write words and translations manually--they will be added automatically.</li>
    <li>Primarily, I wanted to make users only type words while translations would be served by Marak's <a href="https://github.com/marak/translate.js/">translate.js</a> library, but I didn't notice that it's an old solution and Google API used there was deprecated. Now, when Google API is limited to "quota cost," I've decided that Wordally will require writing those translations manually. However, after finishing all steps, you can generate a URL for your word/translation template, and when you use that generated URL, JavaScript will fill those inputs for you!</li>
    <li>Test it on your phone! </li>
    <li>Add at the end of the generated URL ```&onlytest=true``` param to force Wordally to redirect to the tab with a verification sequence and hide the back button. <a href="https://trolit.github.io/Wordally/?&word=holiday&translation=urlop/wakacje&word=see&translation=patrzeć&word=practice&translation=ćwiczyć&word=add&translation=dodać&word=fix&translation=poprawić&word=memory&translation=pamięć&word=personally&translation=osobiście&word=sidebar&translation=menu boczne&word=test&translation=testować&word=log in&translation=zalogować się&word=relieve&translation=ulżyć/odciążyć&word=obvious&translation=oczywiste&word=cover&translation=zasłonić&word=manage&translation=zarządzać&word=ask&translation=zapytać&word=screen&translation=ekran&word=skills&translation=umiejętności&word=lazy&translation=leniwy&word=introduce&translation=przedstawić&word=develop&translation=rozwijać&word=experience&translation=doświadczenie&word=request&translation=żądanie&word=command&translation=komenda&word=safe&translation=bezpieczny&word=company&translation=firma&word=button&translation=przycisk&word=surprise&translation=niespodzianka&word=example&translation=przykład&word=sort&translation=sortować&word=field&translation=pole&word=personalization&translation=personalizacja&word=tab&translation=zakładka&word=everything&translation=wszystko&word=letter&translation=list&word=language&translation=język&word=understand&translation=rozumieć&word=validation&translation=walidacja&word=drink&translation=pić&word=success&translation=sukces&word=remember&translation=pamiętać&word=forget&translation=zapomnieć&word=meet&translation=spotkać&word=secure&translation=zabezpieczyć&word=method&translation=metoda&word=attempt&translation=próba&word=customer&translation=klient&word=effect&translation=efekt&word=find&translation=znaleźć&word=change&translation=zmieniać&word=search&translation=wyszukiwać&word=set&translation=ustawiać&word=speak&translation=mówić&word=tell&translation=powiedzieć&word=tools&translation=narzędzia&word=favourite&translation=ulubione&word=describe&translation=opisać&word=suggest&translation=sugerować/proponować&word=work&translation=pracować&word=dependencies&translation=zależności&word=learn&translation=uczyć się&word=tomorrow&translation=jutro&word=rate&translation=ocenić&word=conversation&translation=konwersacja&word=achieve&translation=osiągać&word=found&translation=znaleziony&word=solution&translation=rozwiązanie&word=error&translation=błąd&word=remotely&translation=zdalnie&word=wait&translation=czekać&word=translate&translation=tłumaczyć&word=stay&translation=zostać&word=write&translation=pisać&word=have&translation=mieć&word=get&translation=dostać&onlytest=true">(example)</a></li>
</ul>

<h3 id="screenshots">Screenshots</h3>
<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/1.png" alt="#toadd" width="400" height="243"/></td>
        <td><img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/2.png" alt="#toadd" width="400" height="243"/></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/3.png" alt="#toadd" width="400" height="243"/></td>
        <td><img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/4.png" alt="#toadd" width="400" height="243"/></td>
    </tr>
</table>

<h3>Tech Stack</h3>
<p> This application was built using the following tools/libraries. </p>
<ul>
 <li> React - JavaScript library for building user interfaces </li>
 <li> Bootstrap 4 - Styling and UI components </li>
 <li> Clipboard.js - Copying clipboard functionality </li>
</ul>
<p> Refer below to the list of references to learn more about these resources. </p>
<h3 id="references">References</h3>
<ul>
    <li><a href="https://github.com/creativetimofficial/blk-design-system">BLK Design System (Bootstrap 4 Kit)</a></li>
    <li><a href="https://gulpjs.com/">gulp.js</a></li>
    <li><a href="https://nodejs.org/en/">Node.js v12.16.2</a></li>
    <li><a href="https://pixabay.com/vectors/jigsaw-puzzle-game-match-puzzle-1297102/">Wordally logo</a></li>
    <li><a href="https://clipboardjs.com/">clipboard.js</a></li>
    <li><a href="https://l-lin.github.io/font-awesome-animation/">Font Awesome Animation</a></li>
    <li><a href="https://iconify.design/">Iconify icons</a></li>
    <li><a href="https://nucleoapp.com/">Nucleo icons (shared by Creative Tim)</a></li>
    <li><a href="http://www.orangefreesounds.com/message-notification/">Error sound (licensed under CC BY-NC 4.0)</a></li>
</ul>

<h3 id="license">License</h3>
<p>Wordally is licensed under MIT and is open source :]</p>
<p>Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a></p>
