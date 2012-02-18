var d = document, n = [], w, s = setTimeout, $ = 'title', $$ = 'length';

function e(tag, props, parent, prop) {
    tag = d.createElement.call(d, tag);
    for (prop in props)
        tag[prop] = props[prop];
    (parent||b).appendChild(tag);
    return tag;
}

function o(item, a, p) {
    p = e('p', 0, a = e('a', {
        href: item.link
    }));
    e('img',{
        src: item.media.m
    }, p);    
    if (item[$]) {
        e('div', {
            innerHTML: item[$]
        }, a);
    }
    s(function(){a.className = 'i';}, 200);
    return a;
}

function jsonFlickrFeed(data) {
    ii = data.items;
    while (n[$$]) {
        b.removeChild(n.pop());
    }
    while (ii[$$]) {
        n.push(o(ii.shift()));
    }
    with(i) {
        value = '';
        placeholder = data[$];
        blur();
    }
}

b.onload = function() {
    b.removeChild(c);
    z = 'background:#000;';
    wi = 'width:';
    hi = ';height:';
    po = ';position:';
    _1 = '15em;';
    x = wi+_1+hi+_1;
    q = 'font:16px Arial;';
    r = 'margin:0 auto;';
    _ = 'overflow:hidden;';
    u = 'transition:all 0.7s;';
    l = 'line-height:2;';
    f = 'display:block;';
    op = 'opacity:';    
    v = 'color:#FFF;text-align:center;';
    e('style', d.getElementsByTagName('head')[0]);
    i = e('input', {
        placeholder: 'tags, go, here...',
        onkeydown: function() {
            clearTimeout(w);
            w = s(function(){
                e('script', {
                    src: 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' +
                    encodeURIComponent(i.value)
                });                
            }, 700);
        }
    });
    h = d.styleSheets[0];        
    for (ss in (rr = {
        input: q+r+l+f+z+v+'border:0',
        body: q+r+z,
        a: x+f+op+'0;float:left;margin-top:1em'+po+'relative',        
        'a.i': op+'1',
        p: r+_+wi+'12em'+hi+'12em',
        img: r+f,
        div: _+l+z+v+wi+'100%'+po+'absolute;'+op+'0.7'+hi+'0;top:0',
        'a:hover p': x,
        'a:hover div': hi+'2em',
        '*': '-webkit-'+u+'-moz-'+u+u
    })) {
        rrr = '{'+rr[ss]+'}';
        if ((_ = 'insertRule') in h) {
            h[_](ss + rrr, h.cssRules[$$]); 
        } else {
            h.addRule(ss, rrr); 
        }
    }
}