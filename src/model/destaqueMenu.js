const mongoose = require('mongoose')

const homeDestaque = mongoose.model('homeDestaque', mongoose.Schema({
    id: Number,
    title: String,
    urlCapa: String,
    urlMinCapa: String,
    describ: String,
}))

// homeDestaque.create([
//     {
//         title: "One Piece",
//         urlCapa: "https://wallpaperaccess.com/full/17350.jpg",
//         urlMinCapa: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/roJqiIITARNuxEuymqVbnVHbKmE.jpg",
//         describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maiores corrupti illum optio iste! Nulla facilis illum at sed tempore odio vitae modi aspernatur. Eveniet tempora labore quibusdam ex necessitatibus."
//     }
//     ,
//     {
//         title: "Supernatural",
//         urlCapa: "https://wallpaperaccess.com/full/1544324.jpg",
//         urlMinCapa: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ltLshA9CpddtLTHhcGQ7lGGM7uZ.jpg",
//         describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maiores corrupti illum optio iste! Nulla facilis illum at sed tempore odio vitae modi aspernatur. Eveniet tempora labore quibusdam ex necessitatibus."
//     },
//     {
//         title: "The Witcher",
//         urlCapa: "https://wallpaperaccess.com/full/2052703.jpg",
//         urlMinCapa: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bdv2vGHH4WfYCLOaaGf5Zzxl7Y8.jpg",
//         describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maiores corrupti illum optio iste! Nulla facilis illum at sed tempore odio vitae modi aspernatur. Eveniet tempora labore quibusdam ex necessitatibus."
//     },
//     {
//         title: "Um Maluco no Pedaço",
//         urlCapa: "https://hbomax-images.warnermediacdn.com/images/GXdLWQgqPHKXCPQEAAAxk/tileburnedin?size=1280x720&partner=hbomaxcom&v=d80404b3176f4015023a8ec3768f660a&host=art-gallery.api.hbo.com&language=pt-br&w=1280",
//         urlMinCapa: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/syH5iXKaLEiTEgF1ffF8OJUbCaS.jpg",
//         describ: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium m"
//     }
// ]
// )

module.exports.getData = async () => {
    return docs = await homeDestaque.find()
}