// Extra variables that live on Global that will be replaced by webpack DefinePlugin
declare var ENV: string;
interface GlobalEnvironment {
  ENV: typeof ENV
}
