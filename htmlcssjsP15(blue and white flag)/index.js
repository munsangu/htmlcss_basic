/*
마우스 버튼 이벤트
>> MouseEvent.button
0: 마우스 왼쪽 버튼
1: 마우스 휠
2: 마우스 오른쪽 버튼

>> MouseEvent.type
mousedown: 마우스 버튼을 누르는 순간
mouseup: 마우스 버턴을 눌렀다 떼는 순간
click: 왼쪽 버튼을 클릭한 순간
dblclick: 왼쪽 버튼을 빠르게 두 번 클릭한 순간
contextmenu: 오른쪽 버튼을 클릭한 순간
mousemove: 마우스를 움직이는 순간
mouseover: 마우스 포인터가 요소 위로 올라온 순간
mouseout: 마우스 포인터가 요소에서 벗어나는 순간
mouseenter: 마우스 포인터가 요소 위로 올라온 순간(버블링이 일어나지 않음)
mouseleave: 미우스 포인터가 요소에서 벗어나는 순간(버블링이 일어나지 않음)
*/ 

const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

function reset() {
  document.querySelector('.up').classList.remove('up');
}

// function reset2() {
//   document.querySelector('.down').classList.remove('down');
// }

function flagUp(e) {
    if (e.button === 0) {
    flagBlue.classList.add('up');
  } else if (e.button === 2) {
    flagWhite.classList.add('up');
  }

  setTimeout(reset, 200);
}

// function flagDown(e) {
//   if (e.button === 0) {
//   flagBlue.classList.add('down');
// } else if (e.button === 2) {
//   flagWhite.classList.add('down');
// }

// setTimeout(reset2, 200);
// }

document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

document.addEventListener('mousedown', flagUp) ;



