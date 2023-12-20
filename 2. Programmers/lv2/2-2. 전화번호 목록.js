// Array.prototype.sort()는 파라미터 없이 실행할 경우 문자열의 유니코드에 따라 정렬한다..
// 이렇게 정렬해서 비교하고 싶었는데 파라미터 없는 실행 결과를 잊고 있었다.
// some 활용법도 다시 기억해두자.
// 다른 사람의 풀이
function solution(phone_book) {
  let answer = phone_book
    .sort()
    .some((value, index, self) => self[index + 1]?.indexOf(value) === 0);

  return !answer;
}

// 실패
const makeBook = (origin) => {
  const book = {};
  origin.forEach((number) => {
    let key;
    if (number < 10) key = number[0];
    if (book[key]) book[key].push(number);
    else book[key] = [number];
  });
  return book;
};

function solution(phone_book) {
  const book = makeBook(phone_book);
  const keys = Object.keys(book);

  for (let i = 0; i < keys.length; i++) {
    const page = book[keys[i]];
    if (page.length >= 2) {
      page.sort((a, b) => a - b);
      if (page[0] === keys[i]) return false;
      while (page.length) {
        const target = page.pop();
        for (let j = 0; j < page.length; j++) {
          if (target.length === page[j].length) continue;
          if (target.slice(0, page[j].length) === page[j]) return false;
        }
      }
    }
  }
  return true;
}

// 실패
function solution(phone_book) {
  const size = phone_book.length;
  const letters = [...new Set(phone_book.map((v) => v.length))];

  for (let i = 0; i < letters.length; i++) {
    const cut = phone_book
      .filter((v) => v.length > letters[i])
      .map((v) => v.slice(0, letters[i]));
    if (cut.length !== size) return false;
  }
  return true;
}

// 실패
function solution(phone_book) {
  const book = {};
  phone_book.forEach((number) => {
    if (book[number[0]]) book[number[0]].push(number);
    else book[number[0]] = [number];
  });

  Object.keys(book).forEach((init) => {
    if (book[init].length >= 2) {
      const list = book[init]
        .sort((a, b) => b - a)
        .sort((a, b) => b.length - a.length);

      let target = list.pop();
      if (target < 10) return false;

      for (let i = list.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
          if (target.length === list[j].length || target[1] !== list[i][1])
            continue;
          if (list[j].slice(0, target.length) === target) return false;
        }
        target = list.pop();
      }
    }
  });

  return true;
}
