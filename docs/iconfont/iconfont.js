window._iconfont_svg_string_1767121 = '<svg><symbol id="icon-location" viewBox="0 0 1024 1024"><path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 516c-108.248 0-196-87.752-196-196s87.752-196 196-196 196 87.752 196 196-87.752 196-196 196zM388 320c0-68.484 55.516-124 124-124s124 55.516 124 124c0 68.484-55.518 124-124 124s-124-55.516-124-124z"  ></path></symbol><symbol id="icon-ppt" viewBox="0 0 1024 1024"><path d="M160 32c-12 0-24.8 4.8-33.6 14.4S112 68 112 80v864c0 12 4.8 24.8 14.4 33.6 9.6 9.6 21.6 14.4 33.6 14.4h704c12 0 24.8-4.8 33.6-14.4 9.6-9.6 14.4-21.6 14.4-33.6V304L640 32H160z" fill="#FF8976" ></path><path d="M912 304H688c-12 0-24.8-4.8-33.6-14.4-9.6-8.8-14.4-21.6-14.4-33.6V32l272 272z" fill="#FFD0C8" ></path><path d="M385.6 385.6h176c70.4 0 92.8 47.2 92.8 97.6 0 48-28 96.8-92 96.8H445.6v120h-60V385.6z m60 145.6h96.8c34.4 0 52.8-10.4 52.8-47.2 0-38.4-24.8-48-48-48H445.6v95.2z" fill="#FFFFFF" ></path></symbol></svg>',

(function h(a) {
  document.addEventListener("DOMContentLoaded", () => {
    let l = document.createElement('div')
    l.innerHTML = a._iconfont_svg_string_1767121
    // l.innerHTML = 'aaa'
    let svg = l.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', true)
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      l = svg
      const firstChild = document.body.firstChild
      if (firstChild) {
        firstChild.parentNode.insertBefore(l, firstChild)
      } else {
        document.body.appendChild(l)
      }
    }
  })
})(window)