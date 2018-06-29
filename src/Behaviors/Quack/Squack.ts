import { QuackBehavior } from './QuackBehavior';

class Squack implements QuackBehavior {
    quack(): void {
        console.log('It is squaking');
    }
}

export { Squack };
