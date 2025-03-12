/**
 * height & width w.r.t parent child divs(block elements - non positioned)
 * 
 * height - if you give a percentage height to child , it first looks up to parent , if parent has non auto height(absolute height in px/vh or valid percentage height w.r.t to its parent)
 * then child height percentage is calculated & honoured else height of child is 0 if no content & if child div has some content inside it , child div's height will be content's height & percentage is not honoured.
 * By default , the height of a parent is auto i.e it's content's height.
 * 
 * width - Normally all block level elements has 100% width by default & the child blocks(divs) also honour that. percentage & all works as expected here
 * 
 * height & width w.r.t parent child divs(block elements - positioned(mainly absolute & not relative , static))
 * 
 * width - we r talking about default case here , even if it's a block element which should take 100% width , but once you make it absolutely positioned , it's width boils down to only its inner content's width , if no inner content then 0 width.
 * you need to explicitly set width property if you need additional width than content's width. width in % refers w.r.t positioned ancesstor's width.
 * absolute width is honoured no matter what in this case.
 * by default content's width is preserved
 * 
 * height - by default content's height is preserved. If you give % height & if ancestral parent which is relatively positioned doesn't have a height property or invalid height then 
 * the div's height gets corrected to 0 , even content's height is not honoured.
 * if you don't give any height property , contents height is honoured
 * If not positioned anscestor , then it looks up to viewport & honour % interms of vh.
 * 
 * Note: Above mentioned rules are only when child div is absolutely positioned. these doesn't apply when child is reatively/default static positioned(non-positioned follows legacy rules 1st section of page)
 * 
 * height: auto -> default height property and it always honours content size and it's not affected by positioning properties
 */

/**
 * whenever you give height property , it is usually for content height , if you give h:100%/100vh & then if you add some borders/margins , the content over-flows the screen 
 * because 100% of height will be given to content & then to accommodate with border thickness , margins etc etc page scrolls
 * To prevent this , add box-sizing: border-box , this means to include border width & margin space also in the height property mentioned.
 * by default , box-sizing: content-box.
 * It's very useful
 */

/**
 * Absolute Positioning:
 * An absolutely positioned element (position: absolute) calculates its offsets (top, left, etc.) and percentage dimensions (e.g., width: 50%) relative to the nearest ancestor with a non-static position (relative, absolute, fixed, sticky).
 * If no such ancestor exists, it uses the viewport as its containing block.
 * 
 * containing blocks:
 * static & relative positions - parent block is containing block.
 * absolute position - containing blocks within nearest non-static ancestor(rel,abs,fixed) or viewport if none. unless special conditions like(parent having transform property/filter/perspective)
 * fixed position - containing block within view port always unless special conditions like(parent having transform/filter/perspective property)
 * static -  The nearest scrollable ancestor (usually the viewport). While "stuck" (during scrolling), it behaves like fixed, but its containing block is the scrollable ancestor.
 * Ensure a threshold (e.g., top, left) is defined.Parent must not have overflow: hidden.
 * 
 * static & relative - not removed from original stack so their position in layout is honoured by childs,siblings etc etc
 * 
 * relative - when you apply top,left etc , the element is only moved visually but not in the actual layout & the visual movement is on top of any margin that are already present on the elemnt.
 * it will hover over adjacent elements if needed to satisy top , left properties etc...only margin etc is respected by layout not top,left etc
 * Additive effect(margin(layout) + offset(visual)) -> margin pushes others in layout but offset overlays
 * 
 * absolute & fixed - removed from original stack & positioned w.r.t to their containing blocks , their position in layout is not honoured by children,parent etc , may have to give z-index to avoid over-laps w.r.t to stacks
 * Additive effect(margin(layout) + offset(not sure if its visual here)) only w.r.t to containing block -> mergin doesn't push layout as it is removed from original stack
 * 
 * sticky - behaves like relative(position in layout is honoured by others etc unlike fixed which is not honoured) until threshold is breached then it becomes sticky after threshold breach.
 * threshold(top,left etc) is v.imp to sticky else it won't stick. The threshold serves 2 purposes 
 * 1) it actually moves element
 * 2) shift from relative to sticky element
 * If sticky has a parent with overflow:scroll/auto then sticky child looks upto the parent w.r.t to threshold & visual offset else it always looks up to view port
 * Don't think so it's additive , margin changes layout & offset determines threshold typeof stuff + distance as well but think not additive.
 * As soon as threshold offset is met by parent , it sticks. if from beginning itself , threshold is honoured then sticks from beginning.
 * 
 * Sticky vs Fixed -> 
 * 1) layout respects elements position in sticly(bcos of same stack) but not in fixed(different stack)
 * 2) offsets always w.r.t viewport in fixed. In sticky offsets & thresholds w.r.t parent with scroll else viewport
 * 3) decision: 
 *    use sticky: places where original layout has to be maintained & need fixed behavour as well -  ex: Table Header(here table header should be respected in layout followed by rows) , Sticky column(same here columns should be first respected in layout)
 *                Also , it's imp to consider the scroll parent & threshold offset.
 *    use fixed: if they should be fixed w.r.t viewport ex: chatbot icon , nav bar
 * 
 * Sticky behaves like fixed when no scrollable parent and top:0 (it sticks to top always) but there is difference in how layout is handled.
 */

// Above are the verified rules , its upto you to remember & implement them , i mean you can practice not possible to implment at once


// scrolling , flex grow shrink etc , height: fit-content etc etc
