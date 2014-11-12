var cmt = document.getElementsByClassName('post-comment-ipt') [0];
//console.log(cmt.value);
var t = cmt.value;
t = t.replace(/[\r]?\n/g, '<br>');
//console.log(t);
//
var c = document.getElementsByClassName('note-comment') [0];
var newcmt = c.cloneNode(true);
newcmt.id = "";
var cmtwrap = document.getElementsByClassName('comment-wrap')[0];
var ct = cmtwrap.getElementsByClassName('content')[0];

var ch = ct.getElementsByClassName('author-name')[0];

ch.innerHTML = '东';

var cp = ct.getElementsByTagName('p') [0];
cp.innerHTML = t;
cmtwrap.appendChild(newcmt);
