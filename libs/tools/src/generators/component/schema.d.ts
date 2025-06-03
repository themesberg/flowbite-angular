type GenType = 'component' | 'directive';

export interface ComponentGeneratorSchema {
  directoryName: string;
  name: string;
  addStorybook: boolean;
  type: GenType;
}
