var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(){
    for(tablinks of tablinks){
        tablinks.classlist.remove("active-link");

    }
    for(tabcontents of tabcontents){
        tabcontents.classlist.remove("activ-tab");
    }
}