console.time('loop1');
let position = 0;
const startIndex = 3800000;
const endIndex = 3850000;
for(let i = 0; i < 3900000; i++) {
  if (position >= endIndex) break;
  if (position >= startIndex) {
    const s = "a" + "b";
  }
  position++;
}
console.timeEnd('loop1');

console.time('loop2');
position = 0;
for(let i = 0; i < 3900000; i++) {
  if (position >= endIndex) break;
  const s = "a" + "b" + i;
  if (position >= startIndex) {
    
  }
  position++;
}
console.timeEnd('loop2');
