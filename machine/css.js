// opacity: 0 will hide

//object-fit : smthign helps fit images

// grid-template-columns : fr fr fr

/**
 * If you give proper width(px or % or vh) and height(preferable px or vh , as % will look for body height which is content height)
 *  along with display:flex , everything is honoured
 *
 * offset width is width included with borders and paddings
 * You can give display: flex and give justify,align center even if only one element is there inside or no element also like \
 * <div>{count}</div> , you can make count come exactly in center within the div of flex
 */

/**
 * Do not write classnames beforehand , start with div and design html template , then go with relevent classnames
 */

/**
 * Use Css Variables and em,rem when needed , reuse css variables
 * :root is pseudo selector that gets us root/docu
 * :root {
 * --primary-white: white;
 * }
 * declaration --smthing-smthing
 * var(--primary-white)
 */

/**
 * z-index is honoured only when position is non-static i.e you've give some position:absolute/relative for
 * z-index to work correctly
 *
 * and try to give some background-color like grey , instead on leaving white
 */

/**
 * `` => I want to put a string , that will also have some dynamic content represented with ${}
 * 
 * Use curly braces {} when you want to include dynamic content or JavaScript expressions directly within JSX.
Use ${} inside backticks (template literals) when you want to embed dynamic values or expressions within a string, 
especially if the string spans multiple lines or contains HTML-like syntax.
 */

/**
 * Progress Bar kind of situations or anything that need to indicate progress within initial container
 * have a nested container with height:100% & green background and dynamically give width through style={{}}
 *
 */

/**
 * 
Block-level elements that you've seen so far include: Headings. Paragraphs (p) Lists and list items (ul, ol, li)
 * Images and Inputs are inline by default
 */

<form onSubmit={() => null}>
  <button type='submit'></button>
</form>;

/**
 * Default behaviour of submit inside form is to refresh page , so do e.preventDefault()...to prevent that
 *
 * State value is lost on refresh but preserved between renders
 */

/**
 * Events:
 *
 * onChange , onKeyDown and onClick , setSelectionRange(start,end) => no effect when empty element
 *
 * onChange doesn't get triggered on enter and backspace presses , but onKeyDown does
 * onKeyDown gets triggered for key downs and might be useful for keywords shortcut cmds
 * e.key=='enter' , e.key=='backspace'
 *
 * onClick helps with selection range
 */

/**
 * Array of refs has decent usecases like build otp components and also can track individual elements like focus and
 * shift focus etc
 * width , height , offsetWidth etc
 *
 * const ref = useRef([]);
 * <div
 * ref={(ele)=>ref.current[index] = ele}
 * />
 *
 * you can also create illusion with css and key events especially with inputs and large dropdowns below it
 */

/**
 * .MultiSearch-Input-Component input:focus {
    outline: none;
 }
 */

/**
  * visibility: hidden:

This property hides an element while still taking up space in the layout. It's as if the element is invisible, but its dimensions and position affect the surrounding elements.
Elements with visibility: hidden are not rendered visually, but they still affect the layout flow.
Useful when you want to hide an element but maintain its space in the layout, for example, for animation effects or to preserve layout structure.
Example: visibility: hidden;
opacity: 0:

This property makes an element completely transparent, but it still occupies space in the layout.
Unlike visibility, setting opacity: 0 doesn't affect the layout flow; other elements will be positioned as if the element with opacity: 0 were not there.
Useful when you want to visually hide an element but don't need it to affect the layout.
Often used in conjunction with CSS transitions or animations for fading effects.
Example: opacity: 0;
display: none:

This property completely removes the element from the layout. The element is not rendered at all, and it doesn't occupy any space.
Unlike visibility and opacity, elements with display: none do not affect the layout in any way.
Useful when you want to completely hide an element and remove it from the layout flow, for example, for hiding/showing content dynamically.
Example: display: none;
  */

/**
 * You can give width:50% to block element and it honours it
 */

/**
 * Transform and transition properties are not difficult to use , but once you learn them , the impact is good
 * we know how transform - transforms along x , y , angle and even scale....you can literally make
 * element hide , visible and shrink on screen when specific style is added dynamically, that effect can be seen if style added
 * dynamically
 *
 * and transition is how smoothly a particular transform happen after particular dynamic css    
 */

/**
 * To Apply translate, element should be on screen i.e display should not be none , but can do visibilityLhidden or opacity 0
 */

/**
 * You should honour your CSS rules written here and above CSS folder , else you'll be struck
 *
 * again faced issues bcos of
 * Iss: width not honoured , trying to apply width in %
 * sol: need to give in px or vh/vw
 * Reason: % is gonna look at parent & when parent doesnt has content , its width is 0
 *
 * Issue: Psuedo element before/after is not honouring width/height even when given in px
 * Sol: make position:absolute or display:inline-block
 * Reason: Pseudo r inline by nature so width is not honoured
 */

/**
 * In Html , when you wrap an input with label , even when you click label/outer portion , any checkbox
 * or things inside it , events get triggered
 *
 * even if you associate like <label for="id_of_element"/> , its going to be triggered , helps with accessibility
 */

/**
 * Observe the way we wrote classes for knob/switch/slider
 * we used input:checked + slider::before {} for siblings
 *
 * div.className
 * classname div -> all div childs
 * classname > div -> immediate child
 */

/**
 * Remember the dark vs normal mode , where we applied styles to document.setAttribute('data-theme','dark/white')
 * & then we did [data-theme="dark/white"] {} to apply styles
 *
 * above is based on pure data property attribute styling
 *
 * you can do it for tag level as well , like
 * input[value='yes'] {...}
 * input[type="checkbox"][value="someValue"] {...   }
 *
 * :checked , :disabled :focus :hover all are pseudo classes &
 * ::before ::after ::placeholder etc all are pseudo elements
 */

/**
 * box-sizing:content-box -> by default any width we give to tag/element is applied only to content , in reality the element/tag if u 
 * inspect in browser , width of element would be given w + border + padding (no margin)
 * 
 * sometimes this will lead to unexpected increase in width , to prevent that , we do
 * box-sizing:border-box , if u do it at root level then , then all elements will honour it
 * 
 * * {
  box-sizing: border-box;
}
 */

/**
 * height:auto is the default nature and its the one which helps div's resize acc to inner content
 * if u hard-code the height , inner content will overflow parent
 */

/**
 * Inline elements does not honour both height and width.
 * they honour only horizantal levels like marginLeft,right etc
 * complete ignore vertical like paddingTop,bottom etc
 *
 * Inline-block can be applied to both inline & block elements.
 * if applied on block, block ele behaves like inline ex: doesn't occupy full width but still respects height,width all margins/paddings etc.
 * if applied on inline, inline ele starts honours width, height, ml-mr, pt-pb properties applied to them. but they still don't occupy full width only content width.
 * display:block = similar to block i.e occupy full row horizantal.
 * You can apply display: inline to a block element and display: block to an inline element. They both change their natural properties and adapt to new properties as per new display rule]
 *
 * 
 * top,left etc can only be used when display is not static
 * By default, absolutely positioned elements shrink-wrap to fit their content, similar to inline elements.
 *  However, you can explicitly set their width and height, and they can behave like block-level elements in terms of sizing.
 */

/**
 * margin:auto works only on block level elements which has some specified width to it...
 * If no width , block means element takes full size , then no space left for margins
 * if u give w:50% , then it adjusts element horizantally center by automatically giving margins...
 */

/**
 * You can send particular vallue from jsx to css file with style property
 * style={{'--background-width':dynamic value}}
 * 
 * in css file
 * width:var(--background-width)
 */


/**
 * In a flex container with flex-direction: column, the inline-level children elements (like <span>) are treated as 
 * block-level elements in terms of layout, which allows them to properly respect margins.
 * 
 * also widths are compromised , read abt 
 * flex-grow/shrink etc
 * flex:1 etc....
 * 
 * flex-direction: column seems bit dangerous....
*/