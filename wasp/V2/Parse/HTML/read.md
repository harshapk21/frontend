Encoding - Process of converting HTML special characters into HTML Entity(&gt;,&lt;) to escape direct HTML interpretation , used for prevent XSS attack , while sending HTML as api req/res , show raw HTML.

Assigning HTML to innerHTML executes it & it prints actual content (italic,bold etc)
Assigning HTML to textContent or innerText doesn't execute it and it renders tags as is (ex: <i>hello</i>)

some frameworks/ide's has auto-escape html characters for XSS safety , we by-pass them by dangerously setting inner HTML which is equi to element.innerHTML & it is dangerous because browser exceutes(interprets) this code(ex: any scrip or alert in it is executed)

Decoding - process of converting HTML entities to HTML special characters is called decoding
ex: urls encoded - %20 for space & for html &gt; for > html tag

Decoding doesn't hapen when you assign HTML entity to node.textContent 
but it happens when you assign to innerHTML , Only decoding happens but HTML interpretation/execution still doesn't happen(script doesn't run & italic is not printed in both the cases)
It also happens when you place this encoded text directly between html tags , again non interpretation
No interpretation when you assign actual HTML tags(not entity) to textContent or innerText
Interpretation happens if you assign direct actual HTML tags strings to inner HTML or between actual HTML tags

<div id="output">
'<i>Hello</i>'
</div> // This is also interpreted as browser treats string as HTML similar to .innerHTML = '<i>Hello</i>'

If you want to escape HTML(i.e not interpret/exceute HTML but only print tags as is)(even if input has html tags) , use textContent/innerText or encode the input & use innerHtml/place below parent. 

If you try to console.log of HTML , some IDEs frameworks escape HTML & show encoded HTML as log/output

<!-- Some gap/time to process above content -->

innerHTMl & outerHTML -> innerhtml of a container doesn't container itself but outerHTML of a container prints/replaces both container tags & child content.
outerHTML only works if container has parent to it. read more on mdn

new DOMParser().parseHTMLFromString() method parses string representation of HTML & retunrs a HTML document where you can do all sorts of crud , useful when you receive html string from api response & need to perform some operations & them append to main document.
This returns an document object which is similar to window.document instance or object both of which are objects of Document Interface which is part of the DOM api. This provides all the methods like querySelector, getELementById etc etc which helps with manipulation of actual DOM created by browser from html document.
HTML document(raw content that we write in .html file) is an entry point that isb read by browser internally creates a DOM so that we can update stuff of html documnet through DOM , DOM is live in-memory rep of html docu but it is structured with tree-like rep of elements , attributes etc. DOM allows you to directly interact & modify HTML Document.

incase of CSR -> this does not update the source HTML served by s3 or server but changes are made to the live document page but lost on refresh as new source HTML comes from s3 or server
incase of SSR -> you can actually hit api with this new updated html document & server can update its db to send this new html everytime.

Good thing with this is , it also corrects any incorrect closing tags that are present in the string rep of html that can help in solving the WYSIWYG problem
similar to JSON.parse -> which receives string representation of JSON & parses it to JSON object
It also has serialise() method which converts xml rep to string

React escapes HTML tags when rendering dynamic content using {country.name} , as it escapes(convert tags to html entities) HTML tags , it is safe from XSS & we've seen above also that html entities are only decoded & rendered but they are not executed / interpreted & hence safe from XSS attack as no script is executed.

React also seems to uses textContent to change content & text content by default escapes HTML by using encoding & that's the reeason we see HTML as is(encoded & decoded back by browser but no interpretation) when assing html string to textContet.
Above thing this is similar to :
<p id="output">
&lt;i&gt;hello&lt;/i&gt;
</p> 
That's why only decoding & rendering , no execution

where as,
innerHTML doesn't do any escaping and assinging a str rep of html using innerHTML actually adds html child to the parent similar to , html interpretation happens
<p id="output">
<i>hello</i> // prints italic hello
</p>
 veirified all the above content by execution on fiddle , you can also do again if needed


/**/
i mean both have their own use-cases so it's important to understand what both does interms of encoding,decoding & interpretation so that you can use them according to your requirements.

But if you want to display htm tags as is without need to interpretations:
in vanilla js: assing html string to textContent or encode the html string and assign it to innerHTML
in react js: by default escaping happens so no need for extra care but for if you don't need escaping use dangerously inner html


