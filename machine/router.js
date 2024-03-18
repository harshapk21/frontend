/**
 *
 * import {BrowserRouter,Routes,Route,Link} from react-router-dom and wrap your entire project with BrowserRouter
 *
 * <Routes>
 *  <Route path='/:id' element={<Home/>}></Route>
 * </Routes>
 *
 * whereever you keep Routes , that's where Page is going to be rendered
 *
 * You can control Styling like this
 * <div>
 * <Header/>
 * <Sidebar/>
 * <Routes></Routes>
 * </div>
 */

/**
 * You can style Link tag using a {
 * text-transform: capitalise // looks good
 * }
 *
 * <Link></Link>
 *
 *
 * Key thing is name paths correctly in Route , it should be in a hierarchy like products/1 etc
 * You can use / for home page and hardcode it ...
 *
 * while showing breadcrumbs , add it up at each level , it helps with <Link to=""/> to have a proper path
 * with hierarchy  rather than general asumption of helping with UI/display
 *
 */

/**
 * Map usually returns array but when we return jsx from map , it render jsx
 *
 */

/**
 * const {pathname , search} = useLocation
 * useParams gives us dynamic id's like <Route path='/product/:id'/> , <Link to='/product/${id}'/>
 * const { id } = useParams
 * what gives us query params ? and how to pass ?
 *
 * useLocation gives us that and not useParams
 *
 */

/**
 * In a URL, query parameters are part of the search string, which comes after the ? symbol in the URL. 
 * The search string contains key-value pairs separated by & symbols.
For example, in the URL http://example.com/path?param1=value1&param2=value2, the query parameters are param1=value1 and 
param2=value2, and they are part of the search string.

In React Router, when you use the useLocation hook to access the current location, the location.search property 
specifically refers to the search string portion of the URL. It does not include the path or the domain.
 */

/**
 * Need to build smthing with images , react router , em/rem , fixed header navigation etc , will try to add infinite scroll
 * to it
 */
