function Queue(){var e=[],t=0;this.setQueue=function(t){e=t},this.getQueue=function(){return e},this.getLength=function(){return e.length-t},this.isEmpty=function(){return 0==e.length},this.enqueue=function(t){e.push(t)},this.dequeue=function(){if(0!=e.length){var n=e[t];return 2*++t>=e.length&&(e=e.slice(t),t=0),n}},this.peek=function(){return e.length>0?e[t]:void 0}}module.exports=Queue;