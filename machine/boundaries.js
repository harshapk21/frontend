/**
 * Each and every element has right to know about it height(client & offset), width(client & offset) & total scroll height i.e content height(irrespective of having scroll prop to it)
 * Each and every element has access to getBoundingClientRect() which gives us top,bottom,left,right of an element w.r.t to vp's(not document) top,right. doesn't matter even if parent is a scrollable container it always w.r.t vp
 * ScrollTop, ScrollLeft, ScrollBy(x(pixels),y(pixels)), ScrollTo(x,y) are the only prop that's only available to elements with scroll prop to them.
 * client h/w === conatainer h/w (irrespective of overflow/content h/w like vp height / width with inner h/w)
 * offset h/w === content's h/w with paddings & borders
 * scroll h/w === content's h/w w/o paddings & borders
 * sometimes i wasn;t able to access offset h/w , so in that case , just use scroll h/w
 * 
 * use only innerHeight,innerWidth on window to get data about viewports height/width.
 * use document.documentElement.scrollHeight (to get total content height without including paddings/borders) , offsetHeight(to get height including borders & padding)
 * document.documentElement.scrollTop to get how much it has been scrolled
 * 
 * window.scrollY similar to scrollTop , just that it is writable as well
 * 
 * ex: const rect = buttonRef.current.getBoundingClientRect();
 *    buttonRef.current.scrollH/W , clientH/W etc etc
 * 
 *  const box = document.querySelector('.box');
    const rect = box.getBoundingClientRect();
 */


/**
 * 2 props on window 
 * window.innerHeight -> viewport dimensions
 * window.scrollY -> how much it has scrolled vertically the window
 * scrollHeight  -> total doc height
 * 
 * others available on ref...ref.current.scrollHeight, offsetWidth , scrollTop etc
 * any elemnt which is scrollable can have these props
 * offsetWidth/height = width/height + padding + border
 * scrollTop = how much it has scrolled
 * scrollHeight -> doc height
 * All above are wrt to element which is scrollable
 * 
 * const rect = getBoundingClientRect()
 * rect.top/left/bottom/height/width
 * 
 * all these props are always wrt to viewport
 * 
 */