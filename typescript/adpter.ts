// criar class adpter

class Adptee {
    public specificRequest(): string {
        return 'Adptee: (.) Target: (.)';
    }
}
abstract class Target {
    public abstract request(): string;
}

class Adapter extends Target {
    private adptee = new Adptee();
    public request(): string {
        const result = this.adptee.specificRequest().split('').reverse().join('');
        return `Adapter: (.) ${result}`;
    }
}