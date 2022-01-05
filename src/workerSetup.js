export default class WebWorker{
    constructor(worker){
        const code = worker;
        const blob = new Blob(["(" + code + ")()"])
        return new Worker(URL.createObjectURL(blob))
    }
}