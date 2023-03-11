function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.querySelector('.container');
    if (main) {
        const toast = document.createElement('div');
        toast.onclick = (e) => {
            if(e.target.closest('.toast__close')){
                toast.remove();
            }
        }

        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-exclamation',
            warning: 'fa fa-times-circle'
        }

        toast.style.animation = `slideInLeft ease 0.3s, fakeOut linear 1s ${duration/1000}s forwards`;

        toast.classList.add('toast', `toast--${type}`);
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);
        setTimeout(()=> {
            toast.remove();
        },duration + 1000 
        )
    }
}

function showSuccess(){
    toast({
        title: 'thành công',
        message: 'Bạn đã đăng ký thành công',
        type:'success',
        duration: 5000
    })
}

function showInfo(){
    toast({
        title: 'Show Info',
        message: 'Tài khoản của bạn là : Lê Ngọc Lực',
        type:'info',
        duration: 5000
    })
}

function showWarning(){
    toast({
        title: 'Warning',
        message: 'Đã có sự cố xảy ra',
        type:'warning',
        duration: 5000
    })
}


toast({
    title: 'Success',
    message: 'This is a success toast',
    type: 'success',
    duration: 5000
})