abstract class AbstractClass {

    public templateMethod(): void {
        this.baseOperation1();
    }

    protected baseOperation1(): void {
        console.log('AbstractClass says: I am doing the bulk of the work');
    }

}

class ConcretedClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');
    }

}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

clientCode(new ConcretedClass2());
