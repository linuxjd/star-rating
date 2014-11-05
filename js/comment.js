var T$ = function(id) {
    return document.getElementById(id);
  },
  T$$ = function(r, t) {
    return (r || document).getElementsByTagName(t);
  },
  C$ = function(classname) {
    return document.getElementsByClassName(classname);
  };

var Rate = function() {
  var Stars = function(cid,rid,hid,config) {
    var lis = T$$(T$(cid),'li'),
    i = 0,
    len = lis.length,
    show = function() {
      T$(rid).innerHTML = config.info[this.index];
      var u = T$(cid),
      curclass = u.className.split(' ')[1];
      u.className = u.className.replace(curclass,config.curcss[this.index]);
      T$(hid).value = T$$(this,'a')[0].getAttribute('title');
    },
    cleartip = function() {
      C$('tip')[0].innerHTML = '';
    };

    for(;i<len;i++) {
      lis[i].index = i;
      EventUtil.addHandler(T$(cid),'mouseover',cleartip);
      EventUtil.addHandler(lis[i],'click',show);
    }
  };
  return { Stars: Stars };
}().Stars('star','stars-tip','stars-input',{
  'info':[
    '很差',
    '较差',
    '还行',
    '推荐',
    '力荐'
  ], 'curcss':[
    'onestar',
    'twostar',
    'threestar',
    'fourstar',
    'fivestar'
  ],
  'step':1
});


var comment = function(){
  var btn = C$('post-comment-btn')[0],
  txt = C$('post-comment-ipt')[0],
  sign = [
    '*顺便评下分吧',
    '*您还没写评论呢',
    '*评论不成功，刷新后再试试吧'
  ],
  send = function() {
    var score = T$('stars-input').value,
    cmt = C$('post-comment-ipt')[0].value;
    if('' === score) {
      C$('tip')[0].innerHTML = sign[0];
    } else if('' === cmt) {
      C$('tip')[1].innerHTML = sign[1];
    } else {
      console.log(cmt);
      console.log(score);
    }
  },
  cleartip = function() {
    C$('tip')[1].innerHTML = '';
  };
  EventUtil.addHandler(txt,'keyup',cleartip);
  EventUtil.addHandler(btn,'click',send);
}();
