/**
 * height & width w.r.t parent child divs(block elements - non positioned)
 * 
 * height - if you give a percentage height to child , it first looks up to parent , if parent has non auto height(absolute height in px/vh or valid percentage height w.r.t to its parent)
 * then child height percentage is calculated & honoured else height of child is 0 if no content & if child div has some content inside it , child div's height will be content's height & percentage is not honoured.
 * This rule holds true even if parent has multiple children & one of them has absolute height , it doesn't help child with %height to be honoured unlike positioned elements case described in that section below.
 * By default , the height of a parent is auto i.e it's content's height.
 * 
 * width - Normally all block level elements has 100% width by default & the child blocks(divs) also honour that. percentage & all works as expected here
 * 
 * height & width w.r.t parent child divs(block elements - positioned(mainly absolute & not relative , static))
 * 
 * width - we r talking about default case here , even if it's a block element which should take 100% width , but once you make it absolutely/fixed positioned , it's width boils down to only its inner content's width , if no inner content then 0 width(collapse).
 * you need to explicitly set width property if you need additional width than content's width. width in % refers w.r.t positioned ancesstor's width.
 * absolute(units/px) width is honoured no matter what in this case.
 * by default content's width is preserved.
 * 
 * height - by default content's height is preserved. If parent has only 1 child div with position: absolute/fixed & if parent is on height: auto mode , then parent height collpases to 0 bcos positioned element is moved out of layout stack into new stack. this rule applies to relative parent as well.
 * If you give % height to absolute positioned child & if ancestral parent which is relatively positioned doesn't have a height property or invalid height then 
 * the child div's height gets corrected to 0 , even content's height is not honoured.(this rule applies only if the parent has single child)
 * If parent has multiple children , then child doesn't get collapsed to 0 height & parent has some height now due to other children.
 * ex: parent with flex,grid or normal parent with multiple children & one of them is not absolutely positioned.
 * if you don't give any height property , contents height is honoured.
 * If not positioned anscestor , then it looks up to viewport & honour % interms of vh.
 * 
 * Note: Above mentioned rules are only when child div is absolutely/fixed positioned. these doesn't apply when child is reatively/default static positioned(non-positioned follows legacy rules 1st section of page)
 * 
 * height: auto -> default height property and it always honours content size and it's not affected by positioning properties
 */

/**
 * whenever you give height property , it is usually for content height , if you give h:100%/100vh & then if you add some borders/margins , the content over-flows the screen 
 * because 100% of height will be given to content & then to accommodate with border thickness , margins etc etc page scrolls
 * To prevent this , add box-sizing: border-box , this means to include border width & margin space also in the height property mentioned.
 * by default , box-sizing: content-box.
 * It's very useful.
 */

/**
 * Absolute Positioning:
 * An absolutely positioned element (position: absolute) calculates its offsets (top, left, etc.) and percentage dimensions (e.g., width: 50%) relative to the nearest ancestor with a non-static position (relative, absolute, fixed, sticky).
 * If no such ancestor exists, it uses the viewport as its containing block.
 * 
 * When you set position: absolute/fixed without specifying top/left/right/bottom, the element remains in its original position in the normal document flow (as if it were still part of the layout but in a different stack) but is removed from the flow (siblings ignore it).
 * when position absolute/fixed , the element is removed from normal layout stack & placed in new stack , so the parent div(according to the layout) of the absolutely positioned
 * element may get collapsed to zero height even without offsets(if parent is on height: auto mode) as it doesn;t have any child in its stack. This height collapsing rule applies to relative element as well.
 * The positioned child honours the margin of its original layouts parent & start in that position as said in 1t line of para.
 * respecting that in new stack. but once you give top,left etc , it gets aligned according to positioned ancestor parent & those margins and all are gone.
 * But margins defined on child are respected even with offsets.
 * if we give top,bottom,left,right: 0 on positioned element without a height/width , it exapands and takes up the whole containing block , but once you add margin: auto , it shrinks and gets centered.
 * 
 * containing blocks:(reference parents)
 * static & relative positions - parent block is containing block.
 * absolute position - containing blocks within nearest non-static ancestor(rel,abs,fixed) or viewport if none. unless special conditions like(parent having transform property/filter/perspective)
 * fixed position - containing block within view port always unless special conditions like(parent having transform/filter/perspective property)
 * sticky -  The nearest scrollable ancestor (usually the viewport). While "stuck" (during scrolling), it behaves like fixed, but its containing block is the scrollable ancestor.
 * Ensure a threshold (e.g., top, left) is defined.Parent must not have overflow: hidden.
 * 
 * static & relative - not removed from original stack so their position in layout is honoured by childs,siblings etc etc
 * 
 * relative - when you apply top,left etc , the element is only moved visually but not in the actual layout & the visual movement is on top of any margin that are already present on the elemnt.
 * it will hover over adjacent elements if needed to satisy top , left properties etc...only margin etc is respected by layout not top,left etc
 * Additive effect(margin(layout) + offset(visual)) -> margin pushes others in layout but offset overlays
 * 
 * absolute & fixed - removed from original stack & positioned w.r.t to their containing blocks only when given offsets, their position in layout is not honoured by children,parent etc , may have to give z-index to avoid over-laps w.r.t to stacks
 * Additive effect(margin(layout) + offset(not sure if its visual here)) only w.r.t to containing block -> margin doesn't push layout as it is removed from original stack
 * 
 * sticky - behaves like relative(position in layout is honoured by others etc unlike fixed which is not honoured) until threshold is breached then it becomes sticky after threshold breach.
 * threshold(top,left etc) is v.imp to sticky else it won't stick. The threshold serves 2 purposes 
 * 1) it actually moves element
 * 2) shift from relative to sticky element
 * If sticky has a parent with overflow:scroll/auto then sticky child looks upto the parent w.r.t to threshold & visual offset else it always looks up to view port
 * Don't think so it's additive , margin changes layout & offset determines threshold typeof stuff + distance as well but think not additive.
 * As soon as threshold offset is met by parent , it sticks. if from beginning itself , threshold is honoured then sticks from beginning.
 * https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46
 * 
 * Sticky vs Fixed -> 
 * 1) layout respects elements position in sticky(bcos of same stack) but not in fixed(different stack)
 * 2) offsets always w.r.t viewport in fixed. In sticky offsets & thresholds w.r.t parent with scroll else viewport
 * 3) decision: 
 *    use sticky: places where original layout has to be maintained & need fixed behavour as well -  ex: Table Header(here table header should be respected in layout followed by rows) , Sticky column(same here columns should be first respected in layout)
 *                Also , it's imp to consider the scroll parent & threshold offset.
 *    use fixed: if they should be fixed w.r.t viewport ex: chatbot icon , nav bar
 * 
 * Sticky behaves like fixed when no scrollable parent and top:0 (it sticks to top always) but there is difference in how layout is handled.
 */

// Above are the verified rules , its upto you to remember & implement them , i mean you can practice not possible to implment at once

/**
 * src: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * display: flex
 * properties on parent & properties on children
 * 
 * baseline & crossline
 * 
 * parent:
 * flex-direction: row | column | row-reverse | column-reverse
 * flex-wrap: wrap | no-wrap | wrap-reverse(bottom lines  to top lines)
 * flex-flow: short-hand of above both default: row no-wrap
 * 
 * justify-content: defines the alignment along the main axis
 * j-c: space-around(10Child1010child10) , each child has same space around it but observe space between child & edge , child & child
 *      space-evenly(10child10child10) ,  items are distributed so that the spacing between any two items (and the space to the edges) is equal.
 * 
 * align-items: flex-start/flex-end/center/stretch(default)/baseline
 * 
 * align-content: Rules for this 1) Applies only to cross axis not to main axis 2) It will apply only when flex-wrap: wrap/wrap-reverse. 
 * it's need ?: when there are multi-line flex items(due to wrap) along cross axis , they form lot of gap between each line naturally (even only with justify-content: wrap & no align-items property),
 * align-items: stretch is the default property on this , that's why they stretch by default
 * even if you give align-items: flex-start/center , it content starts from top/center of y-axxis but it maintains lot of gap between lines & we don't have control over it.
 * That's why align-items doesn;t have property like space-between / space-around bcos by default space is maintained bbetween multi-line items, to control this space you need align-content.
 * 
 * But with align-content: flex-start , there is no gap between flex line items when u give flex-start/end/center/stretch but you'll see gap only if you apply space-between /space-around.
 * but it still has stretch property that makes it look like align-items: stretch i.r gap between flex lines.
 * 
 * justify always refers to main axis & align always refers to cross axis.
 * 
 * 
 * child:
 * flex-grow : proportion(no need of units) .If width is specified to children & 1 child has flex: grow , all child's width will be honoured first before expanding child with flex: grow.
 * In case of shrinkage , flex-grow is compromised before compromising child's width.
 * (not very powerful, it doesn't force other children to give width)
 * If no width is mentioned , then min-width to fit content is honoured before flex-grow. flex-grow is only considered when there is excess space laying around.
 * That extra space is divided proportionatly((total free space/sum of proportions) * current proportion) based on how many childs has this flex-grow property.
 * default value = 0 as flex items won't automatically grow in reality just because some extra space is there
 * this extra -space includes spaces on main axis after honouring elemnt's width/default content width properties including space-between/space-around etc etc.
 * 
 * the flex goes into scroll mode when flex-wrap: no-wrap && min-width/min-content-width is being compromised. Browser never lets min-content/min-width to be compromised , instead it goes into scroll mode.
 * 
 * flex-shrink: proportion , If there is a situation where all children of flex are to be shrinked , you can control which child should shrink more or which childs will not shrink at all/less.
 * shrinking will stop at min content width/height , after this point other children gets started shrinking. then scroll
 * if proportion is 0 , that means this element should never shrink no matter what , it will shrink others to min-width & scroll but never shrink the element(quite powerful)
 * propertion is 1 , default value , all childs should shrink equally
 * if proprtion of a child is higher than other child , then it will shrink more compared to other child
 * flex-shrink doesn't take effect if flex-wrap: wrap is defined , the flex-elements get wrapped as soon as given width property is compromised , let alone compromising min-width or content body width
 * 
 * 
 * flex-basis: it is the default size that a flex item should have in the flex layout. It is given more priority/honour w.r.t to width propertie of other children but not w.r.t min-width/max-width/content-width.
 * It even uses/over-powers other childs width to honours it's own basis width.(bit powerful forces others to give up width)
 * when by default if you want to assign a fixed width to flex items , you can use this.
 * default is flex-basis: auto (normal width mentioned), flex-basis: 0 (shrink the width to min content body width).
 * if needed to shrink , then shrink over-powers basis.
 * 
 * Also, texts like p tag, h tags wont increase in size/font-size just becuase we gave flex-grow/basis on them , they just expand and occupy more space as just white space
 * 
 * // It is a shorthand for flex-grow, flex-shrink, flex-basis & it's used decetly w.r.t responsivness across devices
 * ex: flex: 1 10% or 1 10px or 1
 * 
 * align-self: it has align-items options but it is specific to individual child/item alignment in flex;
 * doesn;t seem to work when flex-wrap:wrap is applied.
 * Imp: align is always w.r.t cross axis. In general scenario y-axis
 * defining height property to parent is v.imp in making use of this y-axis
 * ex: height: 100vh makes use of full vp , no height makes it height:auto which is just content's height
 * 
 * row-gap,column-gap
 * gap: row col: It is preserved at any cost , width is compromised to preserve gap.
 * min-width & default content width is not compromised but gap is also not compromised , so the flex container goes into scroll mode.
 * gap is like minimum gap required between rows/columns, it will come into effect only when that min-gap is being compromised. if space-around/between/evenly is manitaining that gap then great , gap doesnt come live else it automatically enforces.
 * 
 * flex-direction: columns - key points:
 * 1) All rules gets reversed w.r.t to flex-direction: row.
 *    align-items will be w.r.t row alignment
 *    justify-content will be w.r.t column alignment
 *    align-content will be w.r.t column alignment 
 * 
 * 2) parent should have a fixed/valid height property like vh,px or valid % else below properties won't work becuase of height: auto
 *    justify-content -> bcos height:auto , vertical space available is just content height , so no visible effect of applying propeties like center, space-around etc etc. need to have fixed extra space to have visible effect.
 *    flex-wrap -> it never wraps becuase of height: auto , we have infinite height. again need to limit height & then it wraps to next column after limit breach
 *    flex-basis -> works as it defines initial height & since we hv initial height , it is always respected.
 *    flex-grow -> grow works with extra space on flex layout & since height: auto gives only content space , no extra space
 *    flex-shrink -> shrink comes into picture if you're shortage of space but in this case we always have just enough space so wont work
 *
 * Flex tries its best to prevent hroizantal scrolling but it scroll when width available is less than minimum content of children. incase of parent width :100%(most divs) , it adds scroll automatically
 * But incase of fixed width(< vw) parent , children go beyond the parent boundary & you need to manually add a scroll bar or over-flow etc etc or wrap.
 * Even having flex-basis with good width don't enforce overflow/scroll , 
 * Always remember m if you dont defined height property , height: auto & it takes content height only , width on div/block elements ia always 100%(not incase of absolutely positioned) by default unless explicitly mentioned.
 * 
 */


/**
 * scrolling: 
 * 1) Most of the inline/inline-block items don't overflow/scroll/break parent width horizantally by default, unless explicitly specified otherwise by saying white-space: nowrap;
 * 2) texts also wrap when they think they are exceeding parent's width , again they break out even when minimum width(largest word) is also not possible. 
 * most likely they wont break out for regular sentances but for sentances with larger words/no white-spaces , you can use overflow-wrap: break-word , that helps fit within width.
 * 3) These properties apply to any block or inline element that has text as it's content. 
 *    Also if you apply this to a parent & if its children are inline/inline-block , then you can even control the alignment of children similar to flex-wrap even if you don't give flex to parent. 
 * 
 *    *all inline/inline-block elements gets wrapped by default within parent's width, so they wont overflow, you can use nowrap to prevent that.
 * 
 * 4) white-space: nowrap when applied to parent does not force block-level children to stay in a single line like incase of inline-block/inline children.
 *    But it still applies to texts of parent & text of children as well.
 *
 * 5) scroll along y-axis/x-axis is natural on vp(bcos on root overflow: scroll by default) , happens when child content height/width exceeds parent. scroll comes automatically & 
 *    also only flex tries to avoid scrolling by squeezing heights/widths(because flex-shrink: 1 by default on all elements)of children but in normal cases.
 *    child content height/width is  breaks out of parent height/width & scroll is formed naturally on vp. But if you want to create a scroll on parent did with vp , i think you need to mention accordingly
 * 
 */

/**
 * margin works/gives effect on individual element while positions & flex you have to keep an eye on parent & child & think of those rules
 * margin: auto(standard layout)
 * In standard layout , margin: auto works only with block level elements with fixed width(bcos block default width is 100% & no space for margins etc) , it can center a block level element horizantally only but not vertically.
 * you can also make a div move to right/left ends side of the viewport but doing margin-left: auto/margin-right: auto.
 * margin-top/bottom: auto doesn't center a flex item . but you can give absolute units like margin-top: 10px etc & they work normally
 * 
 * margin: auto(with positioned elements)
 * can be centered both vertically & horizantally but need offsets,fixed properties & margin-*: auto
 * ex: center vertically needs -> top,bottom,height,margin-top: auto & margin-bottom: auto; 
 *     center over-all -> needs everyting , top,bottom,left,right,margin: auto, height,width etc.
 * margin: auto centers if stretched and sized.
 * (with relative elements)
 * margin-auto only works horizantal center becuase giving offsets to relative element doesn't stretch it
 * 
 * In flex layout , margin: auto can center a flex item vertically(provided flex container has valid height) & horizantally also even without height/width property on flex item(because in flex div no more occupies 100% width , it only has content width so fixed width & hence margin: auto worked horizantally also)
 * you can also center along individual axis , horizantal -> margin-left&right: auto , vertical -> margin-top&bottom: auto
 * It applies the centering rules even when there are multiple flex items in the flex container.
 * 
 * Standard Flow: Prioritizes content flow (top-to-bottom), not dynamic space control.

Flexbox: Designed for precise space distribution in any direction.
Margin Collapsing:

Standard Flow: Vertical margins collapse (affects spacing between elements).
Flexbox: Margins don’t collapse, allowing precise control.

 * It can over-power Alignment Properties(justify-content etc etc) , ex: applying margin-left: auto will push element as right as possible while maintaining the order , Pushes the flex item as far to the left as possible along the main axis (horizontal by default).Absorbs all available space between the item and its siblings, distributing it to the right.
 * similarly it works for margin-right , top etc etc
 * How to Achieve full right Alignment in Flexbox
 * Use margin-left: auto on first element only, it pushes item to the right edge (main axis) since it has to maintain order it pushes others as well to right.
 * (if you have multiple flex items and apply margin-left: auto on all , it makes sure that all items has equal margin on left)
 * Use justify-content: flex-end on the container to align all items to the right (main axis).
 * margin: auto will center all elements while maintaing equal margins between items
 */

/**
 * Grid(rev from css tricks but some info below):
 * -> In a normal case , grid doesn't squeeze or expand a div(if we have already given a width prop but will expand to occupy 100% of cell if no w prop i.e default w nature of div ) to fit in a cell , div overflows the cell if needed.
 * -> giving 1fr 1fr auto , will limit 3rd column cell width to only the width of min-content width or any width prop assigned to grid item.
 * -> grid stretches grid item's height & width to match cell's height & width , if h&w is not specified on the grid item.
 * -> Grid layout is respected no matter what even if the grid container has to scroll(in normal conditions , no wrapping).
 * -> when using grid-template-columns: 1fr 1fr etc , no. of rows is kinda auto mode as we don't have to define but you can use grid-auto-rows: 100px so that all rows have 100px height.
 * 
 * grid-auto-flow(without specifyng any templating):
 * -> if you just specify display: grid , grid-auto-flow will be row & hence content is aligned row by row as we havent defined anyting about columns yet just like how normal divs behave
 * -> use grid-auto-flow: column without any row/column templating to align all children horizantally in 1 row column by column , this is just opposite to grid-auto-flow.
 * 
 * grid-template-columns: repeat(auto-fit, minmax(50px,100px))
 * these have ability to create a dynamic grid layout even without we defining templating rows & cols , as you can see , we just have to give info about col/cell min & maxx width
 * 
 * grid-auto-flow(with specifying templating):
 * -> if we have a well templated m*n or n*n(should not be auto mode ex: if spec only col & row is auto etc, then this won't work as expectd) grid then this auto-flow specifies in how(row by row or col by col) children have to be filled in a grid.
 * 
 * justify/align/place-self & justify/align/place-items does the same thing , 1st is applied on grid-item & 2nd is applied on grid container itself. 
 * These works on grid-item blocks & will work only if grid-item block has fixed width & height which is less then grid cell , these styles applies to grid-item block but not to the content inside the grid item block. use flex on grid item if you want to center content in a grid item.
 * Also , these properties will shrink the grid item to minimum content height & width if no implicit height & width is defined on the item.
 * 
 * grid row & grid col: By default they span over by 1 value , if you only specify grid-colmn , might behave unexpectedly(i.e show empty cells maybe due to default nature of trying to fill row by row ) so try to provide both row & col starters.
 * grid-template-cols only doesn't change order , so it adds the item to the next available col slot of the row.
 * 
 * 
 */


// scrolling , flex grow shrink etc , margin: auto etc ,  grids , infinite scrolling end , boundaries , height: fit-content etc etc
