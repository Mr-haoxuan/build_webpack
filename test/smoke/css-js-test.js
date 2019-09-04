const glob = require("glob-all");

describe('Checking generated css js files',() => { //描述
    it('should generate html files',(done)=>{      //测试用例
        const files = glob.sync([
            './dist/index_*.js',
            './dist/index_*.css',
            './dist/search_*.js',
            './dist/search_*.css',
        ]);

        if(files.length > 0) {
            done();
        }else{
            throw new Error("no html files generated")
        }
    });
});