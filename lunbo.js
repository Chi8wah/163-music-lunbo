$(document).ready(function() {
    var now = 0;
    var lef = 8;
    var rig = 1;


    setmid(0);$(".abox").stop(false, true);

    $(".lbbtn").mouseover(function (){
        var btn = parseInt(this.id);
        set(btn);
    });

    function set(i) {
        var boxwid=$("#imgsbox").width()-513;
        var sidewid=boxwid + 'px';
        var boxhei=$("#imgsbox").height()-190;
        var tophei=boxhei + 'px';

        $(".abox").stop(true);
        $(".abox img").stop(true);


        console.log("mid =",i," lef =",lef," now =",now," rig =",rig);
        var newLef=0;
        var newRig=0;

        if(i===0){newLef=8;} else {newLef=i-1;}
        if(i===8){newRig=0;} else {newRig=i+1;}
        if((lef!==newLef)&&(lef!==i)&&(lef!==newRig)){setback(lef);}
        if((rig!==newLef)&&(rig!==i)&&(rig!==newRig)){setback(rig);}
        if((now!==newLef)&&(now!==i)&&(now!==newRig)){setback(now);}


        setright(newRig,sidewid,tophei);
        setleft(newLef,sidewid,tophei);
        setmid(i);

        now=i;
        lef=newLef;
        rig=newRig;

        for(var j=0;j<=8;j++){
            if((j!==lef)&&(j!==now)&&(j!==rig)){
                setback(j);
            }
        }
        console.log("lef =",lef," now =",now," rig =",rig);
    }

    function setmid(mid) {
        $(".abox").eq(mid).animate({
             top: '0',
             right: '0',
             left: '0',
            width: '540px',
            height: '200px',
        },300)

        $(".abox img").eq(mid).animate({
            opacity:'1',
        },300)
        $(".abox").eq(mid).css({"z-index":"1"});
    }

    function setback(bk) {
        $(".abox").eq(bk).animate({
             top: '0',
             right: '0',
             left: '0',
             bottom: '0',
            width: '450px',
            height: '167px',
        },300)
        $(".abox img").eq(bk).animate({
            opacity:'1',
        },300)
        $(".abox").eq(bk).css({"z-index":"-1"});
    }

    function setleft(le,lw,th) {
        //$(".abox").eq(le).css({"z-index":"0"});
        $(".abox").eq(le).animate({
             top: th,
             right: lw,
             left: '0',
             bottom: '0',
            width: '513px',
            height: '190px',
            //zIndex: '0',
        },300)
        $(".abox").eq(le).animate({
             zIndex: '0',
        },300);
        $(".abox img").eq(le).animate({
            opacity:'0.5',
        },300)
    }

    function setright(ri,lw,th) {
        $(".abox").eq(ri).css({"z-index":"0"});
        $(".abox").eq(ri).animate({
             top: th,
             right: '0',
             left: lw,
             bottom: '0',
            width: '513px',
            height: '190px',
            //zIndex: '0',
        },300)
        // $(".abox").eq(ri).animate({
        //     zIndex: '0',
        // },"fast");
        $(".abox img").eq(ri).animate({
            opacity:'0.5',
        },300)
        console.log("lw =",lw," th =",th);
    }

})