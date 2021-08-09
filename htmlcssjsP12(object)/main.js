// // 객체 출력(for .... in)
let myObject = {
  '2': '수학',
  '3': '과학',
  '1': '국어'
}

// // for(변수명 in 객체명) {결과}
for (let key in myObject) {
  console.log(key);           // key 출력
  console.log(typeof key);    // string
  console.log(myObject[key]); // values 출력
}

// // (주의) 숫자형(양수) property name도 가능 -> 실제로 사용될 때는 문자열로 형변환이 됨
// // (주의) 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬
console.log("")
let myObject2 = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject2) {
  console.log(key);
  console.log(myObject2); 
}
// console.log(key);
// 1
// 2
// 3
// name
// birthDay 순으로 출력됨

// console.log(myObject2); 
// {1: "정수1", 2: "정수2", 3: "정수3", name: "codeit", birthDay: "2017.5.17"}
console.log("")
let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};

function passChecker(scoreObject) {
  let totalScore = 0;

  for (let subject in scoreObject) {
    totalScore += scoreObject[subject];
  }

  if (totalScore >= 60) {
    console.log('축하합니다! 합격입니다!');
  } else {
    console.log('아쉽지만 불합격입니다..');       
  }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);
console.log("")
// let myDate1 = new Date(2017, 4, 18);
// let myDate2 = new Date(2017, 4, 19);

// let timeDiff = myDate2 - myDate1;
// console.log(timeDiff); // 86400000 (ms)
// console.log(timeDiff / 1000); // 86400 (sec)
// console.log(timeDiff / 1000 / 60) // 1440 (min)
// console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
// console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)

// D-day 계산기
let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	let timeDiff = today - startDate
  console.log((timeDiff/ 1000 / 60 / 60 / 24) + 1 )
}

workDayCalc(jaeSangStart);
console.log("")
// splice()
let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가
fruits.splice(1, 1, '사과', '청포도')

// fruits 배열의 첫 번째 요소를 삭제
fruits.splice(0, 1)


// ages 배열에 마지막 요소를 삭제
ages.splice(5, 1)


// ages 배열의 2번, 3번 인덱스를 26, 28로 변경
ages.splice(2, 2, 26, 28)


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가
numbers.splice(0, 0, 1, 2, 3, 5, 8, 9)

// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제
for(let i = 0 ; i < numbers.length ; i++) {
  if(numbers[i] % 2 !== 0) {
    numbers.splice(i, 1)
    i--;
  } 
}
// 테스트 코드
console.log(fruits[1]);
console.log(fruits[0]);
console.log(ages[ages.length - 1]);
console.log(ages[3]);
console.log(numbers[3]);
console.log(numbers);
console.log("")
// splice() 대체 가능 경우

let num = [1,2,3,4,5,6]
console.log(num)

// 1. shift(): 배열의 첫 요소를 삭제
num.shift()
console.log(num)  // 2, 3, 4, 5, 6
// 2. pop(): 배열의 마지막 요소를 삭제
num.pop()  
console.log(num)  // 2, 3, 4, 5
// 3. unshift(value): 배열의 첫 요소로 값 추가
num.unshift(1)
console.log(num)  // 1, 2, 3, 4, 5
// 4. push(value): 배열의 마지막 요소로 값 추가
num.push(6)
console.log(num)  // 1, 2, 3, 4, 5, 6
console.log(num.indexOf(6))  //  5(있음, 아이템의 인텍스값이 나옴)
console.log(num.indexOf(7))  // -1(없음)
console.log(num.includes(6)) // true
console.log(num.includes(7)) // false
console.log(num.reverse())   // 6, 5, 4, 3, 2, 1
console.log("")

// 배열 출력(for ... of...)
let kor = ['가', '나', '다', '라']

for(let i = 0 ; i < kor.length ; i++) {
  console.log(kor[i])
}

for(let element of kor) {
  console.log(element)
}

// 결과 
// 가
// 나
// 다
// 라
console.log("")

// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];

// 후보별 득표수 객체
let voteCounter = {};
for(let name of votes){
  if(name in voteCounter) {
    voteCounter[name]+= 1;
  } else {
    voteCounter[name] = 1;
  }
}

console.log(voteCounter);
console.log("")
// 팀 나누기
let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

for(let i = 0 ; i < teams.length ; i++){
  for(let j = 0; j < groups.length ; j++){
    teams[i][j] = groups[j][i]
  }
}

console.log(teams[0]);
console.log(teams[1]);
