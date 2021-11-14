<h2>Wordally</h2>

09.08.2020 - 13.08.2020 (v1.0)

<h3>Description</h3>

<p align="justify">Wordally is digital solution for those who seek efficient way <strong>to learn foreign language vocabulary</strong> for school purposes or to extend terminology stock. Acquire habit to study vocabulary like in Wordally scheme to shorten the time needed to memorize and strengthen memory. Implemented idea comes from author's private experience from learning english words. 
 
> Method relies on 3 steps. In first two, cover one column and try to guess hidden words by looking at visible column, then swap(do the same for opposite column). If you don't know something, don't worry just repeat that step few times. It's also worth to not guess words in the same order. In last step, write translations on sheet of paper(again, don't always write them in the same order) and then try to write all words. It's that simple. By doing that method at least 3 times(with breaks between each try) it's possible to learn terminology in 30 minutes(motivation also matters) :) </p>

<h3>Notes</h3>

- If you want to check Wordally, click on <a href="https://trolit.github.io/Wordally/?&word=dog&translation=pies&word=cat&translation=kot&word=ogre&translation=ogr&word=pigeon&translation=gołąb&word=monster&translation=potwór&word=fire&translation=ogień&word=kitchen&translation=kuchnia&word=house&translation=dom&word=shoot&translation=strzelać">this link</a> (it includes parameters in URL so you won't have to write words and translations manually, they will be added automatically)
- Primarily I wanted to make user only type words while translations would be served by Marak's <a href="https://github.com/marak/translate.js/">translate.js</a> library but didn't notice that it's old solution and Google API used there was depracated. Now when Google API is limited to "quota cost", I've decided that Wordally will require to write those translations manually. However, after finishing all steps you can generate URL for your word/translation template and when you use that generated URL JavaScript will will those inputs for you! 
- Test it on phone:P  
- Add at the end of generated URL ```&onlytest=true``` param to force Wordally to redirect to tab with verification sequence and hide back button. <a href="https://trolit.github.io/Wordally/?&word=holiday&translation=urlop/wakacje&word=see&translation=patrzeć&word=practice&translation=ćwiczyć&word=add&translation=dodać&word=fix&translation=poprawić&word=memory&translation=pamięć&word=personally&translation=osobiście&word=sidebar&translation=menu boczne&word=test&translation=testować&word=log in&translation=zalogować się&word=relieve&translation=ulżyć/odciążyć&word=obvious&translation=oczywiste&word=cover&translation=zasłonić&word=manage&translation=zarządzać&word=ask&translation=zapytać&word=screen&translation=ekran&word=skills&translation=umiejętności&word=lazy&translation=leniwy&word=introduce&translation=przedstawić&word=develop&translation=rozwijać&word=experience&translation=doświadczenie&word=request&translation=żądanie&word=command&translation=komenda&word=safe&translation=bezpieczny&word=company&translation=firma&word=button&translation=przycisk&word=surprise&translation=niespodzianka&word=example&translation=przykład&word=sort&translation=sortować&word=field&translation=pole&word=personalization&translation=personalizacja&word=tab&translation=zakładka&word=everything&translation=wszystko&word=letter&translation=list&word=language&translation=język&word=understand&translation=rozumieć&word=validation&translation=walidacja&word=drink&translation=pić&word=success&translation=sukces&word=remember&translation=pamiętać&word=forget&translation=zapomnieć&word=meet&translation=spotkać&word=secure&translation=zabezpieczyć&word=method&translation=metoda&word=attempt&translation=próba&word=customer&translation=klient&word=effect&translation=efekt&word=find&translation=znaleźć&word=change&translation=zmieniać&word=search&translation=wyszukiwać&word=set&translation=ustawiać&word=speak&translation=mówić&word=tell&translation=powiedzieć&word=tools&translation=narzędzia&word=favourite&translation=ulubione&word=describe&translation=opisać&word=suggest&translation=sugerować/proponować&word=work&translation=pracować&word=dependencies&translation=zależności&word=learn&translation=uczyć się&word=tomorrow&translation=jutro&word=rate&translation=ocenić&word=conversation&translation=konwersacja&word=achieve&translation=osiągać&word=found&translation=znaleziony&word=solution&translation=rozwiązanie&word=error&translation=błąd&word=remotely&translation=zdalnie&word=wait&translation=czekać&word=translate&translation=tłumaczyć&word=stay&translation=zostać&word=write&translation=pisać&word=have&translation=mieć&word=get&translation=dostać&onlytest=true">(example)</a>

<h3>Screenshots</h3>

| | |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/1.png" alt="#toadd" width="400" height="243"/> | <img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/2.png" alt="#toadd" width="400" height="243"/> |
| <img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/3.png" alt="#toadd" width="400" height="243"/> | <img src="https://raw.githubusercontent.com/trolit/Wordally/images/images/4.png" alt="#toadd" width="400" height="243"/> |
<!-- For image table, it's highly recommended to have the same resolution images. 
 To find best results(no stretches, equal cells), both axis should be adjusted manually. -->

<h3>References</h3>

- <a href="https://github.com/creativetimofficial/blk-design-system">BLK Design System (Bootstrap 4 Kit)</a>
- <a href="https://gulpjs.com/">gulp.js</a>
- <a href="https://nodejs.org/en/">Node.js v12.16.2</a>
- <a href="https://pixabay.com/vectors/jigsaw-puzzle-game-match-puzzle-1297102/">Wordally logo</a>
- <a href="https://clipboardjs.com/">clipboard.js</a>
- <a href="https://l-lin.github.io/font-awesome-animation/">Font Awesome Animation</a>
- <a href="https://iconify.design/">Iconify icons</a>
- <a href="https://nucleoapp.com/">Nucleo icons(shared by Creative Tim)</a>
- <a href="http://www.orangefreesounds.com/message-notification/">Error sound(licensed under CC BY-NC 4.0)</a>

<h3>License</h3>

Wordally is licensed under MIT and is open source :]

<br/>
<br/>

Template generated using <a href="https://github.com/trolit/EzGitDoc">EzGitDoc</a>
