import { Duck } from './Ducks/Duck';
import { DecoidDuck } from './Ducks/DecoidDuck';
import { MallardDuck } from './Ducks/MallardDuck';
import { RedheadDuck } from './Ducks/RedheadDuck';
import { RubberDuck } from './Ducks/RubberDuck';

import { FlyBehavior } from './Behaviors/Fly/FlyBehavior';
import { FlyWithWings } from './Behaviors/Fly/FlyWithWings';
import { FlyNoWay } from './Behaviors/Fly/FLyNoWay';

import { QuackBehavior } from './Behaviors/Quack/QuackBehavior';
import { MuteQuack } from './Behaviors/Quack/MuteQuack';
import { Quack } from './Behaviors/Quack/Quack';
import { Squack } from './Behaviors/Quack/Squack';


function main() {
    let duck: Duck;
    let flyBehavior: FlyBehavior;
    let quackBehavior: QuackBehavior;

    // ============================================================== DecoidDuck
    console.log('================================================= DecoidDuck');
    flyBehavior = new FlyWithWings();
    quackBehavior = new MuteQuack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Quack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Squack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new MuteQuack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Quack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Squack();
    duck = new DecoidDuck(flyBehavior, quackBehavior);
    callActions(duck);

    // ============================================================= MallardDuck
    console.log('================================================ MallardDuck');
    flyBehavior = new FlyWithWings();
    quackBehavior = new MuteQuack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Quack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Squack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new MuteQuack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Quack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Squack();
    duck = new MallardDuck(flyBehavior, quackBehavior);
    callActions(duck);

    // ============================================================= RedheadDuck
    console.log('================================================ RedheadDuck');
    flyBehavior = new FlyWithWings();
    quackBehavior = new MuteQuack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Quack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Squack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new MuteQuack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Quack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Squack();
    duck = new RedheadDuck(flyBehavior, quackBehavior);
    callActions(duck);

    // ============================================================== RubberDuck
    console.log('================================================= RubberDuck');
    flyBehavior = new FlyWithWings();
    quackBehavior = new MuteQuack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Quack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyWithWings();
    quackBehavior = new Squack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new MuteQuack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Quack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);

    flyBehavior = new FlyNoWay();
    quackBehavior = new Squack();
    duck = new RubberDuck(flyBehavior, quackBehavior);
    callActions(duck);
}

function callActions(duck: Duck) {
    duck.display();
    duck.performFly();
    duck.performQuack();
    duck.swim();
}

main();