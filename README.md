# QueueJs

## Creating and using queues
After creating a queue, the enqueue and dequeue functions can be used to add items to the end of the queue and remove them from the front:

### create a new queue

```
var Queue = require('./Queue');
var queue = new Queue();
```

### enqueue an item

```
queue.enqueue('item');
```

### dequeue an item
```
var item = queue.dequeue();
```

The peek function can be used to inspect the item at the front of the queue without dequeuing it:

### get the item at the front of the queue
```
var item = queue.peek();
```

Both the dequeue and peek functions return the value ‘undefined’ if the queue is empty. The getLength and isEmpty functions can be used to determine the current state of the queue:

### determine the number of items in the queue
var length = queue.getLength();

### determine whether the queue is empty
var isEmpty = queue.isEmpty();

### set an array as a queue

```
var myArray = [
				{date : '2007-01-03', ticker : 'AAPL'},
				{date : '2007-01-03', ticker : 'IBM'},
				{date : '2007-01-03', ticker : 'FB'}
			];
queue.setQueue(myArray);
```
### get an array from the queue

```
var myArray = queue.getQueue();
```
