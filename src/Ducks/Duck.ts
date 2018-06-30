import { FlyBehavior } from '../Behaviors/Fly/FlyBehavior';
import { QuackBehavior } from '../Behaviors/Quack/QuackBehavior';

abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    constructor() {}

    abstract display(): void;

    setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    performFly(): void {
        this.flyBehavior.fly();
    }

    setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    swim(): void {
        console.log('It is swimming');
    }
}

export { Duck };
