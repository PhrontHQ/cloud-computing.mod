# ServerlessFunctionInvocation

This type is designed to abstract at the WorkerGateway.mod level the details of invoking a serverless function for opening/closing a socket and for processing messages received on the socket.

Each cloud vendor specific mod that has a a serverless function feature should provide a DataService whose job will be to map a Mod's ServerlessFunctionInvocation to the actual native details of doing so for that specific cloud vendor.

