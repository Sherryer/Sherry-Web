function getBlob(data) {
  return new Blob([getArrayBuffer(data)], {
    type: "application/pdf",
  })
}
function getArrayBuffer(data) {
  var len = data.length,
    ab = new ArrayBuffer(len),
    u8 = new Uint8Array(ab)

  while (len--) u8[len] = data.charCodeAt(len)
  return ab
}

function pdfBuffer2file(data, fileName = "") {
  return new window.File([getBlob(data)], fileName, { type: "application/pdf" })
}

export default pdfBuffer2file
