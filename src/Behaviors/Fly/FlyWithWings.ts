import { FlyBehavior } from './FlyBehavior';

class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('It is flying with wings');
    }
}

export { FlyWithWings };
