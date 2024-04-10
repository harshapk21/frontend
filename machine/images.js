/**
 * Using width:100% and height:auto and max-width:100% (in some cases)solves most of the responsiveness issues with images
 * 
 * if you put image in a containing block and give max-width:100% to image , 
 * and if intrinsic image width > containing width ,  then image always scales down to fit within the block & if 
 * intrinsic image width < containing width , it will not scale up...
 * 
 *  if you put image in a containing block and give width:100% to image without max-width:100%,the image always tries to
 *  occupy full width of the block 
 * and if intrinsic image width > containing width , image overflows the parent & no scaling happens & if
 * intrinsic image width < containing width , it will scale up and tries to fit the continer causing distortion...
 * 
 * in both above cases , height:auto helps with image's aspect ratio...& also height:auto helps to containing block 
 * to fit dynamically
 * normally image automatically scales itself with height
 * 
 * using max-width:100%(if image size is smaller than screen , no responsivenes) and 
 * width:100%(if image size > screen , overflow ) has own set of problems bro
 * 
 * Infact width:100% with height:auto always safegaurds
 * 
 * giving height:auto on image , always strives for aspect ratio and goes out of vp or containing element
 * if you give height: auto on container , then container adjusts its height
 * 
 * Solution to these problems is to go with object-fit , read from w3s
 * object-fit:contain seems best fo lot which respects aspects and also doesnt cut
 * :cover: respects aspect but cuts off
 * :fill - default , just fits in doesnt help with aspects so distortion might occur
 */

/**
 * Incase of object-fit:cover , there is a risk of loosing some image space , so we can specify which portion of image is important
 * using object-position: 10% 100% -> starting portion of image with full height is imp , can ignore end...
 */

