let cart = [];
let total = 0;

const xisData = [
    {n: 'Xis Tudo', p: 35}, {n: 'Xis Coração', p: 32}, {n: 'Xis Strogonoff', p: 32},
    {n: 'Xis Bacon', p: 25}, {n: 'Xis Filé', p: 24}, {n: 'Xis Calabresa', p: 22},
    {n: 'Xis Frango', p: 21}, {n: 'Xis Salada', p: 20}, {n: 'Hambúrguer', p: 19}
];

function renderXis() {
    const container = document.getElementById('xis-list');
    xisData.forEach(item => {
        container.innerHTML += `
            <div class="product-card">
                <div class="product-info"><h3>${item.n}</h3><span class="price">R$ ${item.p.toFixed(2)}</span></div>
                <button class="add-btn" onclick="addToCart('${item.n}', ${item.p})">+</button>
            </div>`;
    });
}

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateUI();
}

function clearCart() {
    if(confirm("Deseja realmente limpar seu pedido?")) {
        cart = [];
        total = 0;
        updateUI();
    }
}

function updateUI() {
    const bar = document.getElementById('cartBar');
    document.getElementById('cartTotal').innerText = `R$ ${total.toFixed(2)}`;
    bar.style.display = cart.length > 0 ? 'flex' : 'none';
}

function sendWhatsApp() {
    const phone = "5551981031317";
    let message = `*Novo Pedido - Divina Batata*%0A%0A`;
    cart.forEach(item => {
        message += `• ${item.name} - R$ ${item.price.toFixed(2)}%0A`;
    });
    message += `%0A*Total: R$ ${total.toFixed(2)}*`;
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

document.addEventListener('DOMContentLoaded', renderXis);