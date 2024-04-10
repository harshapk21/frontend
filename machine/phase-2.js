/**
 * height:0 hides like display:none
 * someting with wrapping and string literals
 * height:auto and using ref.current.scrollHeight/height to give height property dynamically
 * for compound design pattern , context API is the way forward , wrap all children in provider...
 */

/**
 * input types = number(you'll automatically get up and down arrows & step="by what amount u need inc/dec") , text,passowrd , date ,checkbox;
 * <Label>
 * <input
 * name="cricket"
 * type="checkbox"
 * checked={true | false}
 * onChange={(e)=>{}} // const {name,checked} = e; in general const {name,value} = e
 * />
 * Cricket
 * </Label>
 * 
 *         <select
          value={flightOption}
          onChange={(event) => {
            setFlightOption(event.target.value);
          }}>
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
 */

/**
 * use e.preventDefault to prevent loosing the state/form value on submit
 * also handle form onchange events dynamically like 
 * const onChange = (e)=>{
 * const {name,value} = e;
 * setFormValues((formValues)=>{
 * ...formValues,
 * [name]:value
 * })
 * }
 * 
 * this way you need only one handleChange fn
 * 
 * like wise , have a isValidateForm fn which return true or false based on errors , inside that fn , have a single obj error={}
 * as u find error during if else check add to errors like errors[field]=''
 * return isValidateForm is true if Object.keys(errors) is 0;
 */

/**
 * ref.current = new AbortController , then ref.current.signal , if we pass it as param to axios.get then req can be cancelled
 * like ref.current.abort()
 * 
 * axios.get('app.dev.com?'+new URLSearchParams({search:'',page:''}))
 * 
 * const ref.current = new IO((entries)=>{for(let entry of entries) if(entry.isIntersecting) dosmthing})
 * ref.current.disconnect() to stop listening and IO is garbage collected
 */

/**
 * auto in grid is similar to height:auto , height only limited to content
 * 
 * when u get new html,css req , think of grids , flex , positions , displayes , before/after etc...we do hv some idea on them
 * 
 * display:flex;
 * flex: 0 1 auto (flex-grow shrink basis)
 * grow is how excess space is distributed , by default its 0 means based on content size , 
 * if given 1 , all are distributed equally
 * 
 * if 1 child is given more than other , its relatively that times more
 * 
 * shrink:0 will never shrink the element
 * shrink:1 will shrink equally 
 * 
 * basis will try its best to give that width at initial distribution
 * 
 */

/**
 * When using the <input type="date"> in HTML, the value attribute should be set to a date string formatted as "YYYY-MM-DD", 
 * adhering to the ISO 8601 date format.
 * <input type="date" value="2024-03-23"> -> "March 23, 2024". 
 * 
 * let date = new Data(); //gives ms
 * data+(24*60*60*1000) -> next day;
 * date.getMonth().toString().padStart(2,'0')
 * date.getFullYear() , getDate()->present date
 * [year,month,date].join("-")
 * 
 * use it as value or also min attribute to input type date
 */

/**
 * .accordion-icon{
 *   border-width: 0 2px 2px 0; (top,right,bottom,left)-> forms right angled triangle, can use as icons
 *   transform: rotate(45deg); -> transform right there
 * //translateY(-2px)
 * }
 * 
 * .accordion-icon--rotated{
 * transform: rotate(-135deg);
 * }
 * 
 * 
 *               onClick={() => {
                const newOpenSections = new Set(
                  openSections,
                );
                newOpenSections.has(value)
                  ? newOpenSections.delete(value)
                  : newOpenSections.add(value);
                setOpenSections(newOpenSections);
              }}>


                          <div
              className="accordion-item-contents"
              hidden={!isExpanded}> // This works similar to display:none(no space occupied)
              {contents}
            </div>
 */

/**
 * you can use variables defined in js in css files using 2 ways
 * 1) style={{'--row':row}} & then in css row-count: var(--row)
 * 2) attach property on root , 
 * root=document.documentElement   
 * root.style.setProperty('--primary-color', primaryColor); works only for css
 * 3) you can getElementById and do ele.style.width=100% etc
 */

/**
 * Array.from({length:5}) == Array(5) => gives array of length 5 , filled with undefined
 * const arrayLike = 'hello';
const resultArray = Array.from(arrayLike, letter => letter.toUpperCase());
console.log(resultArray);

<table>
              <thead><tr><th></th</tr></thead>
              <tbody><tr><td></td></tr></tbody>
</table>
 */

/**
 * celsius to fahrenheit -> smart use of <label></label> to include div and inline & also prevented infinite render 
 * by handling state changes neeatly
 */

/**
 * By default , data/value from form input fields will come as strin , so use parseInt / parseFloat to 
 * convert to js and perform math
 * 
 * can use number.toFixed(4) or use string methods split() and slice etc to limit decimals 
 */

/**
 * The toLocaleString() method converts a number, date, or array into a localized string representation using the current locale.
For numbers, it formats the number according to the locale-specific formatting rules, including digit grouping, decimal separator, and currency symbol.
For dates, it formats the date and time according to the locale-specific conventions.

The localeCompare() method compares two strings in a locale-sensitive manner.
It returns a number indicating whether the string comes before, after, or is equal to the compare string in sort order.
This method is useful for sorting strings according to the rules of a particular locale.

const str1 = 'apple';
const str2 = 'banana';

// Perform a case-insensitive comparison using the 'en-US' locale
const comparisonResult = str1.localeCompare(str2, 'en-US', { sensitivity: 'accent', usage: 'sort' });
console.log(comparisonResult);
 */

/**
 * css pseudo selectors are insane...
 * .className:firstchild , :lastchildm , :nth-child()
 * 
 * and :not is very powerful
 * 
 * class1:not(class2):hover {
 * } //  for class 1 apply hover if it doesnt have class 2 in it
 * 
 * .tab-title:not(.active):hover {
  border: 1px solid orange;
    }
 *  
 */

/**
 * splice changes existing array
 * just do Accordian.Title , dont do export const Accordian.Title
 * closing tag also </Accordian.Provider>
 * 
 * while doing compound pattern , the way you'll be defining initial structure i preserved
 * and sending id is crucial at each section
 */