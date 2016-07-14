function ShowSelectedData(){
    var show = document.database.play.value;
    if(show==01){
        //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/01.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //フライヤーを載せる
        document.write('<img src="01.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>人気のない惑星のお屋敷に<br>');
        document.write('女の子と二人の従者だけが<br>');
        document.write('暮らしておりました。<br>');
        document.write('ほかに誰かやってきても<br>')
        document.write('みんなお嬢様に追い出されてしまうのです。<br>あぁ<br>噂をすれば <br>')
        document.write('それでは失礼させていただきます<br>')
        document.write('お客様をお待たせするわけにはいきませんからね。</h4><br>');
        document.write('<h3>◇原案</h3><br><h4>瀧岡美咲</h4><br>');
        document.write('<h3>◇脚本</h3><br><h4>白石響</h4><br>');
        document.write('<h3>◇演出</h3><br><h4>頃末龍</h4><br>');
        document.write('<h3>◇出演</h3><br><h4>境大軌・村上航・本岡万侑・山本静香</h4></br>')
        document.write('<h3>◇スタッフ</h3><h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台美術 　加藤真央・尾林太郎・木村智矩・木村美帆・瀧岡美咲・野宮傑<br>')
        document.write('音響 　齋藤大樹・境大軌・野宮傑<br>照明　 山本希<br>');
        document.write('宣伝美術 　頃末龍<br>衣裳　栗原朋子<br>広報　 山本希<br>制作　 白石響<br></h4>' );
        //BGMを止める
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/_bc0GIXUUyM" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Bn1Ni-GoESY" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</section>');
    }
    else if(show==02){
         //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/02.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //フライヤーを載せる
        document.write('<img src="02.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4><子供の頃からの親友だったぬいぐるみを母に捨てられてしまったハルマは友達のいない高校二年生。<br>');
        document.write('母を心配させないため、日々友達を作ろうと試行錯誤するハルマの前にある日謎の男が現れてこう言った。「君の願いを叶えてあげる」<br>')
        document.write('そこから始まるハルマの短い夏の物語。</h4><br>');
        document.write('<h3>◇脚本・演出</h3><br><h4>赤間洸介</h4><br>');
        document.write('<h3>◇出演</h3><br><h4>岩城智子・木村智矩・木村美帆・熊谷啓孝<br>');
        document.write('斎藤悠人・田村重人・星野礼馬・吉井優香</h4><br>');
        document.write('<h3>◇スタッフ</h3><h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台美術 　加藤真央・尾林太郎・木村智矩・木村美帆・瀧岡美咲・野宮傑<br>')
        document.write('音響 　齋藤大樹・境大軌・野宮傑<br>照明　 山本希<br>');
        document.write('宣伝美術 　頃末龍<br>衣裳　栗原朋子<br>広報　 山本希<br>制作　 白石響</h4><br>' );
        //BGMを止める
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/-gQbLLPVjVA" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/UEUb3ZjNHqw" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</section>');
    }
    else if(show==03){
         //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/03.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //フライヤーを載せる
        document.write('<img src="03.jpg" width="500" height="700"><br>'); 
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>人の上に人がいて、人の下にも人がいる。<br>');
        document.write('そんな世知辛い現実世界で、 <br>');    
        document.write('原発級のハッピー野郎が<br>');
        document.write('原爆級のサゲマン少女に恋をした！<br>');
        document.write('豊かな暮らしは幸せか、貧乏人は不幸せか？<br>');
        document.write('……そもそも、幸せって何だっけ？</h4><br>');
        document.write('<h3>◇脚本・演出</h3><br><h4>斎藤悠人</h4><br>')
        document.write('<h3>◇出演</h3><br><h4>加藤真央・川中萌・貴福雄志郎・木村智矩<br>');
        document.write('頃末龍・笹本健斗・白石響</h4><br>');
        document.write('<h3>◇スタッフ</h3><h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台監督補佐　木村智矩<br>')
        document.write('舞台美術 　大川愛梨沙・加藤真央・北川里奈・瀧岡美咲<br>')
        document.write('音響 　齋藤大樹<br>照明　 山本希・岡田彬彦<br>');
        document.write('宣伝美術 　川中萌<br>制作　 山本希<br>' );
        document.write('制作補佐　栗原朋子</h4>');
        //BGMを止める
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://drive.google.com/file/d/0ByGlB98ttM5jY0JpWUZxbGlvbm8/view?usp=sharing" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://drive.google.com/open?id=0ByGlB98ttM5jQW9JUHBGeWgyMUk" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</section>');
    }
    
    else if(show==04){
         //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/04.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //フライヤーを載せる
        document.write('<img src="04.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>あらすじ</h3><br>');
        document.write('<h4>ーだけど、キミは来ないー<br><br> ')
        document.write('アスファルトに咲くスイセンを抜いて花占いするぼくちゃんは、<br><br>');
        document.write('何回やっても何回やっても「キライ」にしかなりませんでした！ファック！<br><br>');
        document.write('鏡をナイフに持ち替えて、<br>ぼくらのペシミズムは加速する！！<br><br>');
        document.write('恋、考えたヤツ、殺す！！！！</h4><br>');
        document.write('<h3>◇脚本</h3><br><h4>小野亮</h4><br>');
        document.write('<h3>◇演出</h3><br><h4>梅澤健二郎</h4><br>');
        document.write('<h3>◇演出助手</h3><br><h4>赤間洸介・木村智矩</h4><br>');
        document.write('<h3>◇出演</h3><br>');
        document.write('<h4>赤間洸介・金澤卓哉・頃末龍・笹本健斗<br>');
        document.write('高橋陽・田村重人・吉井優香・加藤真央<br>');
        document.write('木村智矩・栗原朋子・斎藤悠人</h4><br>');
        document.write('<h3>◇スタッフ</h3><br>');
        document.write('<h4>舞台監督　大川愛梨沙<br>');
        document.write('舞台美術　北川理奈・加藤真央・瀧岡美咲<br>');
        document.write('照明　岡田彬彦・山本希<br>');
        document.write('音響　齋藤大樹・高橋陽<br>');
        document.write('制作　吉井優香・大川愛梨沙・笹本健斗・山本希<br>');
        document.write('宣伝美術　若杉亮介・川中萌</h4>')
        //BGMを止める
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/_bc0GIXUUyM" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Bn1Ni-GoESY" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('</section>');
    }
}