var d = document, n = [], w, s = setTimeout, $ = 'title', $$ = 'length', $r = 'removeChild';

function e(tag, props, parent, prop) {
    tag = d.createElement.call(d, tag);
    for (prop in props)
        tag[prop] = props[prop];
    (parent||b).appendChild(tag);
    return tag;
}

function o(item, a, p) {
    a = e('a', {
        href: item.link,
        innerHTML: '<p><img src="' + item.media.m + '"/><div>' + item[$] + '</div></p>'
    });
    s(function(){a.className = 'i';}, 200);
    return a;
}

function p(data) {
    ii = data.items;
    while (n[$$]) {
        b[$r](n.pop());
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
    b[$r](c);
    wi = 'width:';
    hi = ';height:';
    po = ';position:';
    _1 = '15em;';
    _2 = '12em;';
    x = wi+_1+hi+_1;
    q = 'font:16px Arial;';
    r = 'margin:0 auto;';
    _ = 'overflow:hidden;';
    u = 'transition:1s;';
    f = 'display:block;';
    op = 'opacity:';
    e('style', d.getElementsByTagName('head')[0]);
    i = e('input', {
        placeholder: 'type...',
        onkeydown: function() {
            clearTimeout(w);
            w = s(function(){
                e('script', {
                    src: 'http://tinyurl.com/azoff1/%26tags%3D' + encodeURIComponent(i.value)
                });                
            }, 700);
        }
    });
    h = d.styleSheets[0];        
    for (ss in (rr = {
        input: q+f+wi+'25%;border:0',
        body: q+r,
        a: x+f+op+'0;float:left;margin-top:1em'+po+'relative',        
        'a.i': op+'1',
        p: r+_+wi+_2+hi+_2,
        img: r+f,
        div: _+wi+'100%'+po+'absolute;text-align:center;background:#FFF;'+op+'0;top:0',
        'a:hover p': x,
        'a:hover div': op+'0.9',
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