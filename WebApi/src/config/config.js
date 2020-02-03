export class Config {

    //this acts like our Containner
    addTransient(key, cls) {
        this[key] = cls;
        return this;
    }
    
    //looks like a Service Factory
    getService(key) {
        return new this[key]();
    }

    setPort(port) {
        this.port = port;
        return this;
    } 

    getPort() {
        return this.port;
    }

}	