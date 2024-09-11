export class SalesOrderItem {

    constructor({orderId, productId, quantity, unitPrice}) {
        this._orderId = orderId;
        this._productId = productId;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    calculateItemPrice(){
        return this.quantity * this.unitPrice;

    }
}