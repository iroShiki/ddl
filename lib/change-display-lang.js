function change_display_lang(src){
    var url = window.location.href;
    url=url.substr(url.lastIndexOf("?")+1)
    console.log(url);
    var home = document.getElementById('tag-home');
    var archive = document.getElementById('tag-archive');
    var project = document.getElementById('tag-project');
    var about = document.getElementById('tag-about');
    var login = document.getElementById('tag-login');
    var title = document.getElementById('title');
    var logo = document.getElementById('nav-left');
    if(url=='lang=zh-cn'){
        $("[class=tag]").css("font-family","microsoft yahei");
        home.innerHTML ='首页';
        archive.innerHTML ='存档';
        project.innerHTML ='项目';
        about.innerHTML = '关于';
        login.innerHTML = '内部登录';
        title.innerHTML ='选择国家或地区';
        home.setAttribute("href","zh-cn/index.html");
        archive.setAttribute("href","zh-cn/archive.html");
        $(archive).css("display","none");
        $("[class=tag]").css("padding","0px 25px");
        $(login).css("padding-right","5px");
        project.setAttribute("href","zh-cn/project.html");
        about.setAttribute("href","zh-cn/about.html");
        login.setAttribute("href","zh-cn/login.html");
        logo.setAttribute("href","zh-cn/index.html");
    }
    else if(url=='lang=jp'){
        home.innerHTML ='ホームページ';
        archive.innerHTML ='アーカイブ';
        project.innerHTML ='プロジェクト';
        about.innerHTML ='概要';
        login.innerHTML ='内部ログイン';
        title.innerHTML ='国または地域を選択してください';
        home.setAttribute("href","jp/index.html");
        project.setAttribute("href","jp/project.html");
        logo.setAttribute("href","jp/index.html");
    }
    else if(url=='lang=zh-hant'){
        $("[class=tag]").css("font-family","microsoft yahei");
        home.innerHTML ='首頁';
        archive.innerHTML ='存檔';
        project.innerHTML ='項目';
        about.innerHTML ='關於';
        login.innerHTML ='會員登入';
        title.innerHTML ='選擇國家或地區';
        home.setAttribute("href","zh-hant/index.html");
        project.setAttribute("href","zh-hant/project.html");
        logo.setAttribute("href","zh-hant/index.html");
    }
}