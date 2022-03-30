$(function() {
        const link = document.querySelectorAll('.hover-this')
        const cursor = document.querySelector('.cursor')

        const animateit = function (e) { // change size of cursor on hover
                const span = this.querySelector('span')
                const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,

                move = 25,
                xMove = x / width * (move * 2) - move,
                yMove = y / height * (move * 2) - move

                span.style.transform = `translate(${xMove}px, ${yMove}px)`

                if (e.type === 'mouseleave') span.style.transform = ''
        }

        const editCursor = (e) => { // custom cursor move
                const { clientX: x, clientY: y } = e
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
        }

        link.forEach(b => b.addEventListener('mousemove', animateit))
        link.forEach(b => b.addEventListener('mouseleave', animateit))
        $(window).on('mousemove', editCursor)
})