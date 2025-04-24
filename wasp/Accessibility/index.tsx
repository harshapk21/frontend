/**
 * we have some roles like button, textbox, select, navigation, dialog, checkbox etc
 * we can make use of these roles with accessible names to access the elements , this helps with testing & also for screen readers.
 * 
 * you can assign accessible name using aria-label , aria-labelledby etc
 * ex: 1) <input type="text" aria-label="Search" />
 *     2) <button aria-label='add-item'>add</button>
 *          screen.getByRole('textbox',{name: /search/i})
 *          screen.getByRole('button',{name: /add-item/i})
 * 
 * You can use getByLabelText if an element has a label associated/linked with it
 * ex: 1) <label htmlFor="country">Select a country</label>
        <select id="country" aria-label="Country">
            <option value="US">United States</option>
            <option value="IN">India</option>
        </select>

        2) <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            screen.getByLabelText(/country/i);
            screen.getByLabelText(/username/i);


 *  p,span , div etc are not semantic and dont have a role , so we can use screen.getByText() to test the content rendered
 */
/**
 * Testing is meant to be done by what user sees on the screen so we need to access the elements by accessibility principles but not through
 * logical code like queryelectors , testids etc
 *
 * so lets use getByRole, getByLabelText as much as we can
 * lets keep querySelectors & getByTestId as last priorities & also screen is an object so you cannot use query selector directly
 * You need to use screen.container.querySelector('input[type="text"]');
 */

/**
 * divs, p & span are not semantics i.e they have no meaningful role by default, hence screen readers/assistive tech ignore them unless you give them an aria-label or role or some text content.
 * 
 * <span>Hello world</span>
Screen reader will say: “Hello world”

<span><img src="icon.svg" /></span> - ignored by SR's

<span aria-label="Search">
  <img src="search.svg" />
</span>
Now the screen reader will say: - "Search"

 * 
 * <div role="region" aria-label="Profile Info">
  <p>Name: Tony Stark</p>
  <p>Company: Stark Industries</p>
</div>
A screen reader will now announce: "Profile Info, region"
Useful when grouping UI that needs a name but doesn’t have a semantic tag.

🚫 Don’t Do This:
<span onClick={handleClick}>Click me</span> // BAD!

Use:
<button onClick={handleClick}>Click me</button>
Or if you must use a <span> or <div> (say, for styling reasons):

<div
  role="button"
  tabIndex={0}
  aria-label="Click me"
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>

use form items like input,select with connected labels or atleast aria-labels
if a non-sematic element like div/span does something actionable , add a role & aria-label to it
wrap imp text content inside main,sider,header,footer,section etc etc
Use getByLabelText for form-related things
For non-accessible text (visual-only) fallback to getByText
Use getByRole for h tags, buttons, inputs , selects etc 
 */

/**
 *ARIA States: Use ARIA properties like aria-expanded, aria-checked, aria-disabled, aria-live, aria-controls, aria-controlledBy etc etc etc. huge list, to reflect dynamic states or attributes of elements.
ARIA Describedby: For error messages or instructions related to form fields, use aria-describedby to associate the input with the help text.
These properties(ARIA States) have nothing to do with the actual functionality , they help screen reader know the current state of web page , lets say if something is
required, expanded, invalid etc etc etc
 */

/**
 * accessible navigation:
 * 
 * you need tabIndex={0} to focus the element(tab navigation) , this is what allows you to traverse page(form elements) using tabs.
 * Native elements like <button>, <a href>, <input>, <select>(fully navigable by keyboard by default) are automatically included in the tab order i.e we dont have to have tabIndex=0 explicitly.
 * these native elements also listen to enter & space button clicks when they're highlighted and map that to their onClick handlers , you don't need mouse clicks
 * 
 * This is why we say "use native elements whenever possible" — they come with all this behavior out of the box.
 * 
 * Custom elements (like div, span) by default: Are not focusable, Do not respond to keyboard events like Enter/Space triggering clicks, Are ignored in tab navigation
 * 
 * To make a div accessible , you need to do this
 * <div
  role="button"
  tabIndex={0}
  aria-expanded={isOpen}
  onClick={toggleOpen}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleOpen();
    }
  }}
>
  Toggle Dropdown
</div>
 */

// Once you read all this , pls go through the SS i shared , it sumarises nicely