function show_hide_menu(){
    let menu=document.getElementById('mobile_menu');
    if (menu.style.display=='flex') {
        menu.style.display='none';
    }else{
        menu.style.display='flex';
    }
}