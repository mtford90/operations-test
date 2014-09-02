var operations          = require('operations'),
    Operation           = operations.Operation,
    OperationQueue      = operations.OperationQueue,
    Log                 = operations.Log;


var op = new Operation('MyOp');
op.start();

