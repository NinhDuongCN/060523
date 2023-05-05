hashCompute = function(s)
{
    var h = 0, l = s.length, i = 0;
    if ( l > 0 )
        while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
}
function Login_Clicked(){
    var pass = (document.getElementById('password')).value;
    var h = hashCompute(pass);
    if(h===2110577625)
    {
        (document.getElementById("msg")).innerText = "670231 Vợ yêu!";
        document.getElementById("formlogin").setAttribute("hidden", "true");
        setTimeout(() => {
            document.querySelector("#login").setAttribute("hidden", "true");
            var vid = document.querySelector("#video");
            vid.removeAttribute("hidden");
            vid.requestFullscreen();
            vid.play();
            
        }, 2000);
    }
    else{
        //(document.getElementById("msg")).innerText = "Sai mật khẩu rồi";
    }
}

function vidStopped(){
    document.exitFullscreen();
    document.querySelector(".video").setAttribute("hidden", "true");
    document.querySelector(".Proposal").removeAttribute("hidden");
}

function Yes_Clicked(){
    document.querySelector("#proposal .head #msg").innerText = "Anh yêu vợ anh!";
    document.querySelector("#frmProposal").setAttribute("hidden", "true");
    setTimeout(() => {
        //document.querySelector("#Yes").setAttribute("href")
    }, 2000);
}

let q=["Làm vợ anh nhé", "Will you marry me", "你愿意嫁给我吗", "結婚して下さい", "Veux-tu m'épouser", "Ты выйдешь за меня", "Mi vuoi sposare", "나와 결혼 해 줄래", "Wyjdziesz za mnie"];
let max = q.length-1;

function No_Clicked(){
    document.querySelector("#proposal .head #msg").innerText = q[Math.floor(Math.random()*max)];
}