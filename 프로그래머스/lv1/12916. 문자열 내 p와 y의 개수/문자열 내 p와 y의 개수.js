function solution(s){
    var answer = true;

    const pLen = findAndCount(s.toLowerCase(), 'p');
    const yLen = findAndCount(s.toLowerCase(), 'y');

    return yLen===pLen;
}

const findAndCount = (s, searchChar) => {
    let count = 0;
    var pos = s.indexOf(searchChar);
    while (pos !== -1) {
      count++;
      pos = s.indexOf(searchChar, pos + 1);
    }
    return count++;
}