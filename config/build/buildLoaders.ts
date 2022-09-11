import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptloader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [typescriptloader];
}
