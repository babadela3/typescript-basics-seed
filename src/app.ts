type Size = 'small' | 'medium' | 'hard';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const setSize: Callback = (x) => pizzaSize = x;

setSize('hard');