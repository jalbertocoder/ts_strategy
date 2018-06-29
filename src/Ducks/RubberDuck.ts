import { Duck } from './Duck';

class RubberDuck extends Duck {
    display(): void {
        console.log('RubberDuck is getting displayed');
    }
}

export { RubberDuck };
