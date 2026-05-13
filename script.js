const noBtn = document.querySelector('.btn--no');
const yesBtn = document.querySelector('.btn--yes');

// Hàm làm nút "Không bao giờ" nhảy ngẫu nhiên
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 50);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 50);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Bắt sự kiện di chuột qua hoặc chạm trên điện thoại
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Bắt sự kiện khi bấm chọn đồng ý tha lỗi
yesBtn.addEventListener('click', () => {
    alert('Hi hi, biết ngay là sẽ tha lỗi cho anh mà! Yêu bé nhất moahhh ❤️');
});
