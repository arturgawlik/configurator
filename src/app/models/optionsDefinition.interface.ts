export interface OptionsDefinition {
    id: number;
    name: string;
    description: string;
    controlType: string;
    starterPrice: number;
    monthlyPrice: number;
    options: OptionsDefinition[]
}
