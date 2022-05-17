// 모든 버튼에 orange 클래스 제거 / 버튼 0 누르면 버튼 0에 orange 클래스 추가 / 모든 div에 붙은 show 클래스명 제거 / div 0 에 show 클래스명 추가 (여기서 0은 인덱스번호)

const buttonLi = document.querySelectorAll(".tab-button");
const innerLi = document.querySelectorAll(".tab-content");
/*
buttonLi[0].addEventListener("click", function () {
	// buttonLi[0].classList.remove("orange");
	buttonLi[1].classList.remove("orange");
	buttonLi[2].classList.remove("orange");
	buttonLi[0].classList.add("orange");
	// innerLi[0].classList.remove("show");
	innerLi[1].classList.remove("show");
	innerLi[2].classList.remove("show");
	innerLi[0].classList.add("show");
});
buttonLi[1].addEventListener("click", function () {
	buttonLi[0].classList.remove("orange");
	// buttonLi[1].classList.remove("orange");
	buttonLi[2].classList.remove("orange");
	buttonLi[1].classList.add("orange");
	innerLi[0].classList.remove("show");
	// innerLi[1].classList.remove("show");
	innerLi[2].classList.remove("show");
	innerLi[1].classList.add("show");
});
buttonLi[2].addEventListener("click", function () {
	buttonLi[0].classList.remove("orange");
	buttonLi[1].classList.remove("orange");
	// buttonLi[2].classList.remove("orange");
	buttonLi[2].classList.add("orange");
	innerLi[0].classList.remove("show");
	innerLi[1].classList.remove("show");
	// innerLi[2].classList.remove("show");
	innerLi[2].classList.add("show");
});
*/

/*
for (let i = 0; i < buttonLi.length; i++) {
	tabOpen(i);
}
function tabOpen(i) {
	buttonLi[i].addEventListener("click", function () {
		buttonLi.forEach(i => {
			i.classList.remove("orange");
		});
		buttonLi[i].classList.add("orange");
		innerLi.forEach(i => i.classList.remove("show"));
		innerLi[i].classList.add("show");
	});
}
*/
function tabOpen(i) {
	buttonLi.forEach(i => {
		i.classList.remove("orange");
	});
	buttonLi[i].classList.add("orange");
	innerLi.forEach(i => i.classList.remove("show"));
	innerLi[i].classList.add("show");
}

document.querySelector(".list").addEventListener("click", function (e) {
	/*
  if (e.target == buttonLi[0]) {
		tabOpen(0);
	}
	if (e.target == buttonLi[1]) {
		tabOpen(1);
	}
	if (e.target == buttonLi[2]) {
		tabOpen(2);
	}
  */
	tabOpen(Number(e.target.dataset.id));
});
// console.log(i);
console.log(buttonLi.length);
/*
오늘의 교훈 :
1. 함수로 축약할 때 변수같은게 있으면 파라미터로 바꾸는게 좋음 
2. 이벤트리스너 줄이면 이점이 있음
3. dataset 잡기술 알면 이벤트리스너 적게 사용할 때 내가 뭐 눌렀는지 쉽게 파악할 수도 있음 
*/
