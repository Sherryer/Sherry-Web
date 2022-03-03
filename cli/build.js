const TARGET = process.env.npm_lifecycle_event;

console.log('===', TARGET)
console.log('===', process.env.npm_package_version)

if (TARGET === 'test') {
    console.log(`Running the test task!`);
}

if (TARGET === 'pretest') {
    console.log(`Running the pretest task!`);
}

if (TARGET === 'posttest') {
    console.log(`Running the posttest task!`);
}
