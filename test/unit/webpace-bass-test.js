
const assert = require('assert');

describe("webapck.bass.js test case",()=>{
    
    const baseConfig = require("../../lib/webpack.base.js")
    
    it('entry',()=>{
        assert.equal(baseConfig.entry.index,'D:/工作学习/前端学习/前端作业/webpack_study4.0/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search,'D:/工作学习/前端学习/前端作业/webpack_study4.0/builder-webpack/test/smoke/template/src/search/index.js')

    })
})