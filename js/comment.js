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
  stars = T$('stars-input'),
  sign = [
    '*顺便评下分吧',
    '*您还没写评论呢',
    '*评论不成功，刷新后再试试吧'
  ],
  send = function() {
    var score = stars.value,
    cmt = txt.value,
    cmt_counts = $('.cmt-counts').html();
    cmt_counts = parseInt(cmt_counts);
    if('' === score) {
      C$('tip')[0].innerHTML = sign[0];
      return false;
    } 
    if('' === cmt) {
      C$('tip')[1].innerHTML = sign[1];
      return false;
    }
    $.ajax({
      url: "back.php",
      type: "post",
      dataType: "json",
      data: {
        score: score,
        content: cmt
      },
      beforeSend:function(){
        console.log(cmt);
        console.log(score);
      },
      success: function(data) {
        cmt = cmt.replace(/[\r]?\n/gi,"<br>"),
        time = '● ' + date2str(new Date(), 'yyyy-M-d h:m'), 
        newcmt = $('.note-comment:first').clone();
        newcmt.attr('id','comment-'+data.cmtid);
        //newcmt.find('.author-name').html(user);
        newcmt.find('.reply-time').html(time);
        newcmt.find('p').html(cmt);
        newcmt.appendTo($('.comment-wrap'));
        var countstr = cmt_counts + 1 + '条评论';
        $('.cmt-counts').html(countstr);
      },
      error:function(textStatus,errorThrown) {
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
  },
  cleartip = function() {
    C$('tip')[1].innerHTML = '';
  };
  EventUtil.addHandler(txt,'keyup',cleartip);
  EventUtil.addHandler(btn,'click',send);
}();

//把当前时间输出为指定格式的字符串
//alert(date2str(new Date(), 'yyyy-M-d h:m'));
function date2str(x, y) {
  var z = {
    y: x.getFullYear(),
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  return y.replace(/(y+|M+|d+|h+|m+|s+)/g, function (v) {
    return ((v.length > 1 ? '0' : '') + eval('z.' + v.slice( - 1 ))).slice( - (v.length > 2 ? v.length : 2) )
  });
}
