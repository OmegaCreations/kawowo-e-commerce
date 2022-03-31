$(function(){

    $('.logo img').fadeOut(0)

    document.addEventListener("mousemove", parallax)
    function parallax(e) {
        this.querySelectorAll('.parallax').forEach(layer => { // img parallax move
            const speed = layer.getAttribute('data-speed') // speed atr in html code

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = `translateX(${x}px) translateY(${y}px) translate(-50%, -50%)`
        })
    }

    $('.hover-this').on('click', function () { // menu animation on menu click
        $('.product').css('animation', 'fade-out 0.2s ease forwards') // middle product fadeout

        $('.product-bg').css('animation', 
                             'bg-anim 0.8s ease 0.3s forwards, flicker 4s linear 2.3s infinite, fade-out 0.2s ease 0.1s forwards')
        $('.hover-this').css('animation', 
                             'fade-in-left 0.8s ease 0.5s forwards, fade-out 0.2s ease 0.2s forwards')

        $('.logo').css('animation', 
                       'logo-anim 0.6s ease, logo-transition 0.6s ease 0.2s forwards')

        $('.transition-box').css('animation', 
                                 'box-transition 1s ease-in-out 0.4s forwards')

        setTimeout(() => {
            
            setTimeout(() => {
                $('.logo img').fadeIn(400) // logo fadein
            }, 450)

            setTimeout(() => {
                $('.logo img').css('margin-bottom', '160px')
                $('.transition-text').css('opacity', '1')

                setTimeout(() => {

                    var w = window.outerWidth
                    var h = window.outerHeight
                    var d = Math.sqrt(w*w + h*h)

                    $('.transition-circle').css('transform', `translate(-${d}px, -${d}px)`)
                                            .css('padding', `${d*2}px`)
                                            .css('top', `-${d}px`)
                                            .css('left', `-${d}px`)
                    setTimeout(() => {
                        
                    }, 800)
                }, 2000)
            }, 800)
        }, 450)
    })
})