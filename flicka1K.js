// shorten references
$ = document;
t = 'title';
z = 'placeholder';
_ = 0;
n = [];

// css parts
_t = 'transition:0.7s;';
_b = 'background:rgba(0,0,0,0.8);';
_d = 'display:block;';

// add styles
e('style', {
    innerHTML: '*{-moz-'+_t+'-webkit-'+_t+_t+';font:16px/1.8 Arial}input{'+_d+'width:25em;border:0}a{'+_b+'width:8em;height:8em;margin:0 0 -9px 0;overflow:hidden;text-decoration:none;display:inline-block;position:relative}a:hover{width:15em;height:15em;margin:-61px;z-index:2}div{'+_b+'color:#FFF;text-align:center;position:absolute;bottom:0;width:100%}img{'+_d+'margin:0 auto}'
});

// creates elements
function e(tag, props, prop) {
    tag = $.createElement.call($, tag);
    for (prop in props)
        tag[prop] = props[prop];
    b.appendChild(tag);
    return tag;
}

// parses flickr data
function p(data) {
    d = data.items;
    // delete existing nodes
    while (n.length) {
        b.removeChild(n.pop());
    }
    // add new nodes
    while (o = d.shift()) {
        n.push(e('a', {
            href: o.link,
            innerHTML: '<img src="' + o.media.m + '"/><div>' + o[t] + '</div>'
        }));
    }
    i.value = '';
    i[z] = data[t];
    i.blur();
}

// remove the canvas
b.removeChild(c);

// create the input and listener
i = e('input', {
    onkeydown: function(){
        clearTimeout(_);
        _ = setTimeout(function(){
            e('script', {
                src: 'http://tinyurl.com/azoff1/%26tags%3D' + encodeURIComponent(i.value)
            });                
        }, 700);
    }
});

i[z] = 'add,tags...';