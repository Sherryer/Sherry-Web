import{ observable, computed, autorun }from'mobx';

letnumbers = observable([1,2,3]);
letsum = computed(()=>numbers.reduce((a, b) =>a + b,0));

letdisposer1 = autorun(()=>console.log(`sum:${sum.get()}`));
letdisposer2 = autorun(()=>console.log(`length:${numbers.length}`));
// sum:6
// length:3

numbers.push(4);
// sum:10
// length:4

disposer2();
numbers.push(5);
// sum:15