/**
 * useEffect takes 2 params 
 * arrow fn and dep array
 */

useEffect(()=>{

},[])

/**
 * Add keys to element you render inside the map 
 * Destructure instead of having object
 * try to use () if returning jsx
 */

data?.map(({ title, id }) => (<ul key={id}>{title}</ul>))


data?.map(({ title, id, description }) => (
    <>
      <span>{description}</span>
      <ul key={id}>{title}</ul>
    </>
  ))

/**
 * ol , ul , li 
 * Its ol or ul outside and li inside
 * and li looks like block level element
 * 
 * 
 * <ul>
    <li></li>
</ul>
 */

/**
 * Its always </div> for closing
 * / is next to shift and it should be at begin like </div> not at end like <div/>
 */


/**
 * 
 * classname in react , no need to put in {} , just ""
 * 
 *         <button className="button">Next</button>
 * and no need of "" for either properties or values in css files
 */


/**
 *         <span>{`${page + 1} out of ${totalPages}`}</span>
 *          <span>{page + 1} out of {totalPages}</span>
 * 
 * 
 *           <div className={`Page ${page == i + 1 ? "Page-active" : ""}`}>
            {i + 1}
          </div>
 */

/**
 * `` backticks are applied inside {} , to have a combination of fixed and dynamic data - ${}
 */

/**
 * [...Array(5)] = [0,1,2,3,4]
 */

/**classname should be all small */


