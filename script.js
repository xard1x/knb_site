Tesseract.recognize(
    'abc.png',
    'rus',
    { logger: m => console.log(m)}
).then(({ data: { text } }) => {
    console.log(text)
})