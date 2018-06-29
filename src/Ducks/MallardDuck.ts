import { Duck } from './Duck'

class MallardDuck extends Duck {
    display(): void {
        console.log('MallardDuck is getting displayed');
    }
}

export { MallardDuck };
