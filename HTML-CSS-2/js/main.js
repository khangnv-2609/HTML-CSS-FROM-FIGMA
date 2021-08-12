var icons={
    success: 'fas fa-check-circle',
    heart: 'fas fa-heartbeat',
    error: 'fas fa-info-circle',
    warning: 'fas fa-exclamation-triangle',
    info: 'fas fa-info-circle'
};
function toast({title='', msg='', type='info', duration=3000}){
    const main= document.getElementById('toast');
    if(main){
        const t= document.createElement('div');
        //Auto remove toast after 3s
        const IdTimeOut= setTimeout(function(){
            main.removeChild(t);
        }, duration + 1000);
        //Remove toast when click
        t.onclick = function(e){
           if(e.target.closest('.toast__close')){
                main.removeChild(t);
                clearTimeout(IdTimeOut);
           }
        }
        t.classList.add('toast', `toast--${type}`);
        const delay= (duration/1000).toFixed(2);
        t.style.animation = `slideInLeft ease 0.5s, fadeOut ease 0.5s ${delay}s forwards `;
        t.innerHTML= `
            <div class="toast__icon">
                    <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                 <p class="toast__msg">${msg}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.appendChild(t);
    }
}

function showSuccessToast(){
    toast({
        title:"Success",
        msg:'Đăng ký môn học thành công!',
        type:"success",
        duration: 3000  
    });
}
function showErrorToast(){
    toast({
        title:'Error',
        msg:'Có lỗi rồi bạn ơi, sai mất tiêu.',
        type:'error',
        duration: 3000
    });
};
function showWarningToast(){
    toast({
        title:'Warning',
        msg:'Cẩn thận đấy nha.',
        type:'warning',
        duration: 3000
    });
};
function showInfoToast(){
    toast({
        title:'Info',
        msg:'Phải chăm chỉ vào',
        type:'info',
        duration: 3000
    });
};