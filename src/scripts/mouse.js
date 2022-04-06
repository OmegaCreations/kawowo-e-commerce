$(function() {
        const link = document.querySelectorAll('.hover-this')
        const cursor = $(".cursor")
        const hover = document.querySelectorAll('.cursor-hover')

        const animateit = function (e) { // parallax effect on span hover
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
                if (cursor) {
                        cursor.css("left",  x + 'px')
                        cursor.css("top",  y + 'px')
                }
        }

        const scaleCursor = (e) => {
                if (e.type === 'mouseleave') {
                        cursor.css('transform', 'scale(1)')
                } else {
                        cursor.css('transform', 'scale(8)')
                }
        }

        hover.forEach(b => b.addEventListener('mousemove', scaleCursor))
        hover.forEach(b => b.addEventListener('mouseleave', scaleCursor))
        link.forEach(b => b.addEventListener('mousemove', animateit))
        link.forEach(b => b.addEventListener('mouseleave', animateit))
        $(window).on('mousemove', editCursor)
})