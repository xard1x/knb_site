const teser =  require('tesseract.js')
teser.recognize('C:\Users\karan\Documents\GitHub\knb_site\abc.png','rus',{
    logger: e=>{
        console.log(e)
    }
})
    .then(out=>{
        let text =out.data.text.replace(/\n/g,' ').replace(/[^a-zA-Za-яА-Я0-9]/g,'');
        console.log('вот что я прочитал :', text);
    })
