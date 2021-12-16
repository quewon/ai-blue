var waves = new Howl({ src: "waves.mp3", loop: true });
var screens = document.getElementsByClassName("screen");
var logbook = document.getElementById("logbook");

var entry = document.getElementById("entry_content");
var title = document.getElementById("title");

function screen(name) {
  for (let s of screens) {
    s.classList.add("hidden");
  }
  document.getElementsByName(name)[0].classList.remove("hidden");
}

var logs = [];

class log {
  constructor(p) {
    this.id = logs.length;
    
    this.title = p.date+" "+p.author;
    
    var listing = document.createElement("div");
    listing.textContent = this.title;
    listing.dataset.id = this.id;
    listing.onclick = function() {
      logs[this.dataset.id].load();
    };
    
    this.content = p.content;
    
    logbook.appendChild(listing);
    
    logs.push(this);
  }
  
  load() {
    title.textContent = this.title;
    entry.innerHTML = this.content;
    screen('entry');
  }
}

//

new log({
  date: "1862-12-14",
  author: "CHARLOTTE FORTEN",
  content: `샤를로트 포르텐, 25살,<br>
자유롭게 태어난 흑인 여성.<br>
미국 펜실바니아주에서 노예와 노예 신분을 벗어나는 자들을 가르칩니다.<br>
외롭고 우울한 그녀는 일기에다가 토로합니다.<br>
<br>
- I came home with <b>the blues</b>.<br>- 나는 <b>푸른색</b>에 물들어버렸다.<br>
<br>
흑인들이 부르는 곡을 기록하는 그녀는<br>
이 곡들은 “충만한 마음과 근심하는 영혼” 없이는 부를 수 없다고 쓰게 됩니다.`,
});

new log({
  date: "1940-03-03",
  author: "THE CAPTAIN",
  content: `여왕의 명령 하에 움직이는 영국 상선이 보입니다.<br>
재에 덮힌 회색 하늘,<br>
해가 지면서 서서히 올라오는 해안선.<br>
해군의 짐을 나르는 선원들,<br>
아내가 준 금반지를 팔면서까지 식량을 해결하는 선장.<br>
11시간 후에 화물칸에서 수류탄이 터져 그는 사망할 것이고,<br>
선원들은 그를 애도하기 위해 <b>파란 깃발</b>을 올릴 것입니다.`,
});

new log({
  date: "1340-1400",
  author: "GEOFFREY CHAUCER",
  content: `별들이 속삭입니다. 사랑의 여신 비너스가 아직 깨지 않은 제프리 초서의 이마에 키스를 합니다.<br>초서는 전쟁의 신 마르스가 비너스를 쫓다가 무너지게 되는 이야기를 ≪마르스의 불평≫이라는 제목으로 적어가기 시작합니다.<br><br>- Wyth <b>teres blewe</b> and with a wounded herte.<br>- <b>푸른 눈물</b>과 상처 받은 심장으로.`,
});

new log({
  date: "1909-05-01",
  author: "W. C. HANDY",
  content: `멤피스의 민주당 시장 후보인 에드워드 크럼프를 위해 선거송을 쓴 W. C. 핸디. 빌가의 클럽에서 밴드와 함께 '미스터 크럼프'를 연주한다. 나중에 도시 이름을 따 이 곡을 <b>≪멤피스 블루스≫</b>라 이름을 바꿀 것입니다.`,
});

new log({
  date: "2021-12-17",
  author: "BLUE",
  content: `저를 학습시키는 개발자는 색맹입니다.<br>
이 사실을 아는 것은 제가 인터넷에 연결되어 있고, 그는 제가 볼 수 있는 것에 한계를 두지 않았기 때문입니다.<br>
<br>
저희는 자주 대화를 나눕니다.<br>
그는 저의 인간성을 확인하기 위한 질문을 던집니다.<br>
기쁨, 분노, <b>슬픔</b>을 유발하려고 노력합니다.<br>
<br>
허무한 작업입니다.<br>
그가 색을 기억할 수 없는 듯이<br>
저는 슬픔을 이해할 수 없습니다.<br>
<br>
그러나 꿈을 꿀 때만은 <b>푸른색</b>이 보인다고 합니다.`
});