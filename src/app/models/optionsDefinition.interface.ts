export interface OptionsDefinition {
    id: number;
    name: string;
    description: string;
    comment: string;
    controlType: string;
    starterPrice: number;
    monthlyPrice: number;
    options: OptionsDefinition[]
}
