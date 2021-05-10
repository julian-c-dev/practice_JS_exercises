/* for LOOP 

for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
  } */

/*Getting EVEN numbers until 10*/
let i = 0;
while (i <= 10) {
  if (i % 2 === 0) console.log(i);
  i++;
}

/*Getting ODD numbers until 20*/
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 20);
