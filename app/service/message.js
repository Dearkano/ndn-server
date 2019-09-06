'use strict';

const Service = require('egg').Service;
class MessageService extends Service {
    async add(sender, receiver, afid, status='pending') {
        const {
            ctx,
        } = this;
        const result = await ctx.model.Message.create({
            sender,
            receiver,
            afid,
            status,
            timestamp: Date.now()
        });
        return result;
    }

    async find(sender, receiver) {
        const result = await this.ctx.model.Message.find({
            receiver,
            sender,
           // status: 'pending'
        })
        console.log('find receiver sender')
        console.log(result)
        return result
    }

    async update(sender, receiver) {
        const result = await this.ctx.model.Message.updateMany({
            receiver,
            sender,
            status: 'pending'
        }, {
            $set: {
                status: 'sent'
            }
        })
    }
}
module.exports = MessageService;