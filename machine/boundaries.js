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