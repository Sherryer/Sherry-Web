var usb = require('usb')

usb.on('attach', function(device) {
    console.log('attach')
    console.log(device)

});

usb.on('detach', function(device) {
    console.log('detach')
    console.log(device)
});

console.log('on')