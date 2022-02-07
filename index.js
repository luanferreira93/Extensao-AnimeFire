try{
    document.addEventListener('DOMContentLoaded',()=>{
        // console.clear()
        let botao = document.getElementById('btn_skip_video')
        function clicou(){
            botao.click()
        }
        setInterval(clicou,10)
    })
}catch(error){
    console.log(error);
}