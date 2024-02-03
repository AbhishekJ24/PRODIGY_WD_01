let randGenerator = () => {
    let v1 = Math.random() * 255
    let v2 = Math.random() * 255
    let v3 = Math.random() * 255
    return `rgb(${v1},${v2},${v3})`
}
document.addEventListener("scroll", () => {
    let ele1 = document.body.getElementsByTagName('nav')[0]
    let ele2 = document.querySelectorAll('.random-content')
    let color = randGenerator()
    ele1.style.backgroundColor = color
    ele2.forEach((e) => {
        e.style.backgroundColor = color
    })
})