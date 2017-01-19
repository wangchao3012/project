
const cache = require('./common/cache')
const sleep = require('thread-sleep');
const task = require('./service/task');
var autoTaskFast = {
    taskFast: async function () {
        while (true) {
            try {
                let obj = await cache.qpop(cache.key.taskFast);
                if (obj) {
                    await task.runTask(JSON.parse(obj));
                    // sleep(10);
                }
                else {
                    console.log('没有数据，休息 3000 ms');
                    
                    sleep(3000); 
                }
            } catch (err) {
                sleep(3000);
            }
        }
    } () 
}

module.exports = autoTaskFast;