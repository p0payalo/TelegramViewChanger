
var info = {};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.clear==true)
        {
            var allData = {
                bgURL : null,
                wrapURL: null,
                bgColor: null,
                wrapColor: null,
                headColor: null,
                textColor: null,
                textM: null,
                clear: false
            }
            localStorage.removeItem('info');
            localStorage.setItem('info',JSON.stringify(allData));
            request.clear=false;
            alert('Что-бы всё вернулось перезапусти страницу');
            return;
        }
        info = JSON.parse(localStorage.getItem('info'));
        if(request.bgURL!=null)
        {
            info.bgURL = request.bgURL;
            info.bgColor = null;
        }
        else if(request.bgColor!=null)
        {
            info.bgColor = request.bgColor;
            info.bgURL = null;
        }
        if(request.wrapURL!=null)
        {
            info.wrapURL = request.wrapURL;
            info.wrapColor = null;
        }
        else if(request.wrapColor!=null)
        {
            info.wrapColor = request.wrapColor;
            info.wrapURL = null;
        }
        if(request.textColor!=null)info.textColor = request.textColor;
        if(request.headColor!=null)info.headColor = request.headColor;
        if(request.textM!=null)info.textM = request.textM;
        localStorage.removeItem('info');
        localStorage.setItem('info',JSON.stringify(info));
        apply();
        sendResponse({farewell: "I'm good, thank you popup!"});
    });


if(localStorage.getItem('info'))
{
    setTimeout(function(){
        apply();
        setInterval(apply,1000);
    },500);
}

function apply(){
    var request = JSON.parse(localStorage.getItem('info'));
    if(request.bgURL!=null)document.querySelector('.page_wrap').style.background='url('+request.bgURL+')';
    if(request.wrapURL!=null)document.querySelector('.im_page_wrap').style.background='url('+request.wrapURL+')';
    if(request.bgColor!=null)document.querySelector('.page_wrap').style.background=request.bgColor;
    if(request.wrapColor!=null)document.querySelector('.im_page_wrap').style.background=request.wrapColor;
    if(request.headColor!=null)document.querySelector('.tg_head_split').style.background=request.headColor;
    if(request.textM!=null)
    {
        var msg = document.querySelectorAll('.im_message_text');
        for(let i = 0; i < msg.length; ++i)
        {
            msg[i].style.color=request.textM;
        }
    }
    if(request.textColor!=null)
    {
        var spans = document.querySelectorAll('span');
        for(let i = 0; i < spans.length; ++i)
        {
            spans[i].style.color=request.textColor;
        }
    }
}