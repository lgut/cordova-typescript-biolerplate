const execSync = require('child_process').execSync
const path = require('path')

module.exports = (context) =>{
  const scriptPath = path.resolve(__dirname, "../start.js")
  switch (context.hook) {
    case "before_prepare":
      results = execSync(`node ${scriptPath}`)
      console.log(results.toString('utf8'))
      break;
  
    default:
      break;
  }
}