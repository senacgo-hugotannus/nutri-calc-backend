module.exports = app => {
    const controller = app.controllers.CustomerWallets;

    app.route('/api/v1/customer-wallets')
.get(controller.listCustomerWallets);
}