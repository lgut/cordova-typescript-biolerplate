
const cli = require('commander');
const childProcess = require("child_process");
const webpack = require("webpack");
const config = require("./webpack.app.config");



cli
  .version("0.1.0")
  .option("-e --env [type]", "Define your current enviroment. Options are development | production")
  .option("-w --watch", "Watch for changes to src folder")
  .parse(process.argv);

switch (cli.env) {
  case undefined:
    if (process.env.TARGET) {
      cli.env = process.env.TARGET
    } else {
      cli.env = "development";
    }

    runWebpack()
    break;
  case true:
    console.log(`Please specify an enviroment`)
    process.exit(1)
    break;
  default:
    runWebpack()
    break;
}

function runWebpack() {
  const env = cli.env;
  const compiler = webpack(config(env));

  if (cli.watch) {
    const watching = compiler.watch({}, (err, stats) => {
      if (!err && !stats.hasErrors()) {

        // spawn another process
        //childProcess
        //  .spawn(electron, ["."], { stdio: "inherit" })
        //  .on("close", () => {
        //    watching.close();
        //  });
      }
    });
  } else {
    compiler.run((err, stats) => { })
  }
}
