import { Duck } from './Duck';

class DecoidDuck extends Duck {
    display(): void {
        console.log('DecoidDuck is getting displayed');
    }
}

export { DecoidDuck };
