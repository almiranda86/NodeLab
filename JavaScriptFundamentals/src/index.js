import { HelloWorld } from './helloWorld';
import { ApiClient } from './apiClient';

new HelloWorld().sayHello();

var apiClient = new ApiClient();
apiClient.getTasks()
.then(data => {
    console.log(`I got back ${data.length} rows`);
})
.catch(err => {
    console.log(`Something went horribly wrong: ${err}`);
})

