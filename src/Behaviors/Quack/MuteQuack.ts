import { QuackBehavior } from './QuackBehavior';

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('It is not quacking because it is mute');
    }
}

export { MuteQuack };
