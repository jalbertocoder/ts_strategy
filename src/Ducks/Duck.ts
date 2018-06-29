import { FlyBehavior } from '../Behaviors/Fly/FlyBehavior';
import { QuackBehavior } from '../Behaviors/Quack/QuackBehavior';

abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor(fb: FlyBehavior, qb: QuackBehavior) {
        this.flyBehavior = fb;
        this.quackBehavior = qb;
    }

    abstract display(): void;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log('It is swimming');
    }
}

export { Duck };
