import { FlyBehavior } from './FlyBehavior';

class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log('It cannot fly');
    }
}

export { FlyNoWay };
