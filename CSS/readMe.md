::before ::after & content prop inside it
virtaul elements created by css and they act as last child of its parent. they are inline by default

% is always wrt to immediate parent

inline elements do not honour height and width by default , so we make them position:inline-block to make them honour h&w.

you can make block elements inline by giving inline-block

display:flex & flex-wrap(wraps flex elements on overflow)

position:static doesnt give a damn to top , bottom etc. only relative(relative its current position check example of drag drop dcode best example), absolute(absolute to parent or absolute to root) , sticky(sticky only within its parent) , fixed(fixed forever wrt root & behaves like inline by default , i mean doesnt block whole horizantal)

width and max-width (max-width behaves bit like inline , it doesnt honour width , its just a safe guard)

rect = HTMLElement.getBoundingClientRect() helps you to know if an element is present in the View Port with rect.height , rect.top(distance between VP top & ele top) , rect.bottom(distance between VP top & ele bottom)




