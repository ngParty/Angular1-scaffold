interface WebpackModule {
  hot: {
    data?: any,
    idle: any,
    accept( dependencies?: string | string[], callback?: ( updatedDependencies?: any ) => void ): void;
    decline( dependencies?: string | string[] ): void;
    dispose( callback?: ( data?: any ) => void ): void;
    addDisposeHandler( callback?: ( data?: any ) => void ): void;
    removeDisposeHandler( callback?: ( data?: any ) => void ): void;
    check( autoApply?: any, callback?: ( err?: Error, outdatedModules?: any[] ) => void ): void;
    apply( options?: any, callback?: ( err?: Error, outdatedModules?: any[] ) => void ): void;
    status( callback?: ( status?: string ) => void ): void | string;
    removeStatusHandler( callback?: ( status?: string ) => void ): void;
  };
}

interface WebpackRequire {
  context( file: string, flag?: boolean, exp?: RegExp ): any;
}


interface ErrorStackTraceLimit {
  stackTraceLimit: number;
}

// webpack plugins
// add here any plugin you want to add:
declare module 'webpack/lib/DefinePlugin' {
  import * as webpack from 'webpack';
  const DefinePlugin: webpack.DefinePluginStatic;
  export = DefinePlugin;
}
declare module 'copy-webpack-plugin' {
  const CopyWebpackPlugin: any;
  export = CopyWebpackPlugin;
}
declare module 'html-webpack-plugin' {
  const HtmlWebpackPlugin: any;
  export = HtmlWebpackPlugin;
}

// needed because karma
declare module 'express' {
  function e(): any;

  namespace e {
    interface Handler { }
  }
  export = e;
}

// Extend typings
interface NodeRequire extends WebpackRequire {}
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface NodeModule extends WebpackModule {}
