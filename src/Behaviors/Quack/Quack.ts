import { QuackBehavior } from './QuackBehavior';

class Quack implements QuackBehavior {
    quack(): void {
        console.log('It is quacking');
    }
}

export { Quack };
