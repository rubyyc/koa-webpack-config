class DemoController {
  constructor() {
  }
  async demo (ctx) {
    ctx.body = {
      msg: 'body demo9999'
    }
  }
}
 
export default new DemoController()