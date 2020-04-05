import { Duck } from './Duck';

class DevoidDuck extends Duck {
    display(): void {
        console.log('DevoidDuck is getting displayed');
    }
}

export { DevoidDuck as DevoidDuck };
