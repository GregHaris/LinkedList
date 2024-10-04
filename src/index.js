import './style.css';
import LinkedList from './linkedListClass';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.insertAt('monkey', 2);

list.getListSize();

list.pop();
list.find('cat');
list.contains('lion');

list.getListSize();

list.printListValue();
list.toString();

list.getListTail();
