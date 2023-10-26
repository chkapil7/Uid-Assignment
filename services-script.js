const mouseService = document.getElementById('mouseService');
let alertMessage;

mouseService.addEventListener('click', function () {
    alertMessage = alert('You clicked on Interactive Mouse Events!');
    setTimeout(() => {
        alertMessage.close();
    }, 300000);
    setTimeout(() => {
        alert('1 minute left!');
    }, 240000);
});

mouseService.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#fd4766';
    this.style.color = '#fff';
});

mouseService.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#fff';
    this.style.color = '#1f1f25';
});

document.addEventListener('mousemove', function (e) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});