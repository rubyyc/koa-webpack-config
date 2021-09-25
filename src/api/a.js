function a (ctx) {
  ctx.body = {
    "message": "hello from a.js!!!11e "
  }
}

module.exports = a
// module.exports = function (ctx) {
//   ctx.body = {
//     "message": "hello from a.js"
//   }
// }