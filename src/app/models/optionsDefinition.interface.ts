export interface OptionsDefinition {
    id: number;
    name: string;
    description: string;
    controlType: string;
    options: OptionsDefinition[]
}
