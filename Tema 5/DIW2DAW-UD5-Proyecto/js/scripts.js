document.addEventListener('DOMContentLoaded', () => {
    
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                productos: [
                    {
                        id: 1,
                        nombre: "Aceite de Oliva Virgen Extra Selección Oro",
                        foto: "img/oro-virgen-lata.jpg", 
                        atributo1: "Picual Monovarietal",
                        atributo2: "Botella 500ml",
                        cantidad: 1,
                        precio: 24.50,
                        descuento: false
                    },
                    {
                        id: 2,
                        nombre: "Queso de Oveja Curado en Manteca de Flores",
                        foto: "img/Queso-Flores-y-Vino.png",
                        atributo1: "Madurado 12 meses",
                        atributo2: "Cuña 450g",
                        cantidad: 1,
                        precio: 18.90,
                        precioOriginal: 26.00,
                        descuento: true 
                    }
                ],
                envios: 4.95
            }
        },
        computed: {
            calcularSubtotal() {
                return this.productos.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
            },
            calcularTotal() {
                if (this.productos.length === 0) return 0;
                
                this.envios = this.calcularSubtotal > 40 ? 0 : 4.95;
                return this.calcularSubtotal + this.envios;
            }
        },
        watch: {
            'productos.length'(nuevoValor) {
                this.actualizarCabecera(nuevoValor);
            }
        },
        methods: {
            eliminarProducto(index) {
                this.productos.splice(index, 1);
            },
            actualizarCabecera(valor) {
                const badge = document.querySelector('header .user-utils #shopping-cart > span');
                if (badge) {
                    badge.textContent = valor;
                }
            }
        },
        mounted() {
            this.actualizarCabecera(this.productos.length);

            const toTopBtn = document.getElementById('totop');
            
            if (toTopBtn) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 300) {
                        toTopBtn.style.display = 'flex'; 
                    } else {
                        toTopBtn.style.display = 'none';
                    }
                });

                toTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        }
    }).mount('#cart-app'); 

});