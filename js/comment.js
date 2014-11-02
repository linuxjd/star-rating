var Rate = function() {
  var T$ = function(id) {
    return document.getElementById(id);
  },
  T$$ = function(r, t) {
    return (r || document).getElementsByTagName(t);
  },
    Stars = function(cid,rid,hid,config) {
    var lis = T$$(T$(cid),'li'),
    i=0,
    len=lis.length,
    show = function() {
      T$(rid).innerHTML = '<em>'+config.info[this.index];
      var u = T$(cid),
      curclass = u.className.split(' ')[1];
      u.className = u.className.replace(curclass,config.curcss[this.index]);
    };

    for(;i<len;i++) {
      lis[i].index = i;
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
  ],
  'curcss':[
    'onestar',
    'twostar',
    'threestar',
    'fourstar',
    'fivestar'
  ],
  'step':1
});
