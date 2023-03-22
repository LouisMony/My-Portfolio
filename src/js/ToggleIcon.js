function ToggleIcon(){
    const icon = document.getElementById('js_icon_menu')
    icon.classList.toggle('opened')
    icon.setAttribute('aria-expanded', icon.classList.contains('opened'))
}

export default ToggleIcon;