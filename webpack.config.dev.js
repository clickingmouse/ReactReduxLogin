import path from 'path';
import webpack from 'webpack'

export default {
  mode:"development",
  devtool:'source-map',
entry:[
//  'react-hot-loader/patch',
//'webpack-hot-middleware/client?reload=true',
//'webpack-hot-middleware/client',
  path.join(__dirname, '/client/index.js')
],
output:{
  filename:'bundle.js',
//path:path.resolve(__dirname, '/dist'),
path:'/',
publicPath:'/'

},
plugins:[
//  new webpack.NoEmitOnErrorsPlugin(),
//  new webpack.optimize.OccurrenceOrderPlugin(),
//  new webpack.HotModuleReplacementPlugin()
],
module:{
  rules: [
    {
      test: /\.js$/,
      include: path.join(__dirname, 'client'),

      loader:[
        //'react-hot-loader/webpack',
        'babel-loader']
    }
  ]
},
resolve : {
  extensions:['*', '.js']
}

}
