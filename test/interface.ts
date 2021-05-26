import IMicroCMSSearchable from "../src/types/IMicroCMSSearchable";

export default interface SampleInterface extends IMicroCMSSearchable {
    num: number;
    str: string;
    bol: boolean;
    obj: { id: string; [p: string]: string | number | boolean };
    arr: Array<{ id: string; [p: string]: string | number | boolean }>;
}
