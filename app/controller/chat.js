module.exports = app => {
    class Controller extends app.Controller {
        async ping() {
            const message = this.ctx.args[0];
            await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
        }
        async disconnect() {
            const message = this.ctx.args[0];
            console.log(message);
        }
    }
    return Controller
};