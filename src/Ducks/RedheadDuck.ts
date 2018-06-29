import { Duck } from './Duck';

class RedheadDuck extends Duck {
    display(): void {
        console.log('RedheadDuck is getting displayed');
    }
}

export { RedheadDuck };
