abstract class ImpostoStrategy {
    abstract calcularImposto(): void;
}

class ImpostoEUA extends ImpostoStrategy {
    calcularImposto(): void {
        console.log('Imposto EUA');
    }
}

class ImpostoBR extends ImpostoStrategy {
    calcularImposto(): void {
        console.log('Imposto BR');
    }
}

class ImpostoCA extends ImpostoStrategy {
    calcularImposto(): void {
        console.log('Imposto CA');
    }
}

class PedidoVenda {
    private imposto: ImpostoStrategy;

    constructor(imposto: ImpostoStrategy) {
        this.imposto = imposto;
    }

    public calcularImposto(): void {
        this.imposto.calcularImposto();
    }
}

const pedidoVenda = new PedidoVenda(new ImpostoEUA());