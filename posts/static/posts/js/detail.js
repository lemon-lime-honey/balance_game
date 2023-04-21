const comment_content = document.getElementById('id_content')
comment_content.style.width = '100%'

const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const width1 = image1.clientWidth
const width2 = image2.clientWidth
const height1 = image1.clientHeight
const height2 = image2.clientHeight
image1.style.aspectRatio = Math.max(width1 / height1, width2 / height2)
image2.style.aspectRatio = Math.max(width1 / height1, width2 / height2)