// 页面重新布局和自适应 
; ((doc, win) => {
  const html = doc.documentElement
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'

  const reCalc = () => {
    const { clientWidth } = html
    if (!clientWidth) return
    // 1rem = 16px
    html.style.fontSize = `${(16 * clientWidth) / 1920}px`
  }

  if (!doc.addEventListener) return

  win.addEventListener(resizeEvt, reCalc)

  doc.addEventListener('DOMContentLoaded', reCalc, false)
})(document, window)